// To parse this data:
//
//   import { Convert, OCRtext } from "./file";
//
//   const OCRtext = Convert.toOCRtext(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface OCRtext {
    textAnnotations:    TextAnnotation[];
    fullTextAnnotation: FullTextAnnotation;
}

export interface FullTextAnnotation {
    pages: Page[];
    text:  string;
}

export interface Page {
    property: ParagraphProperty;
    width:    number;
    height:   number;
    blocks:   Block[];
}

export interface Block {
    property:    ParagraphProperty;
    boundingBox: Bounding;
    paragraphs:  Paragraph[];
    blockType:   string;
}

export interface Bounding {
    vertices: Vertex[];
}

export interface Vertex {
    x: number;
    y: number;
}

export interface Paragraph {
    property:    ParagraphProperty;
    boundingBox: Bounding;
    words:       Word[];
}

export interface ParagraphProperty {
    detectedLanguages: DetectedLanguage[];
}

export interface DetectedLanguage {
    languageCode: Locale;
}

export enum Locale {
    En = "en",
    Fi = "fi",
}

export interface Word {
    property:    ParagraphProperty;
    boundingBox: Bounding;
    symbols:     Symbol[];
}

export interface Symbol {
    property:    SymbolProperty;
    boundingBox: Bounding;
    text:        string;
}

export interface SymbolProperty {
    detectedLanguages: DetectedLanguage[];
    detectedBreak?:    DetectedBreak;
}

export interface DetectedBreak {
    type: string;
}

export interface TextAnnotation {
    locale?:      Locale;
    description:  string;
    boundingPoly: Bounding;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toWelcome(json: string): OCRtext {
        return cast(JSON.parse(json), r("OCRtext"));
    }

    public static welcomeToJson(value: OCRtext): string {
        return JSON.stringify(uncast(value, r("OCRtext")), null, 2);
    }
}

function invalidValue(typ: any, val: any): never {
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`);
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        var map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        var map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        var l = typs.length;
        for (var i = 0; i < l; i++) {
            var typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(typ: any, val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        var result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(typ, val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Welcome": o([
        { json: "textAnnotations", js: "textAnnotations", typ: a(r("TextAnnotation")) },
        { json: "fullTextAnnotation", js: "fullTextAnnotation", typ: r("FullTextAnnotation") },
    ], false),
    "FullTextAnnotation": o([
        { json: "pages", js: "pages", typ: a(r("Page")) },
        { json: "text", js: "text", typ: "" },
    ], false),
    "Page": o([
        { json: "property", js: "property", typ: r("ParagraphProperty") },
        { json: "width", js: "width", typ: 0 },
        { json: "height", js: "height", typ: 0 },
        { json: "blocks", js: "blocks", typ: a(r("Block")) },
    ], false),
    "Block": o([
        { json: "property", js: "property", typ: r("ParagraphProperty") },
        { json: "boundingBox", js: "boundingBox", typ: r("Bounding") },
        { json: "paragraphs", js: "paragraphs", typ: a(r("Paragraph")) },
        { json: "blockType", js: "blockType", typ: "" },
    ], false),
    "Bounding": o([
        { json: "vertices", js: "vertices", typ: a(r("Vertex")) },
    ], false),
    "Vertex": o([
        { json: "x", js: "x", typ: 0 },
        { json: "y", js: "y", typ: 0 },
    ], false),
    "Paragraph": o([
        { json: "property", js: "property", typ: r("ParagraphProperty") },
        { json: "boundingBox", js: "boundingBox", typ: r("Bounding") },
        { json: "words", js: "words", typ: a(r("Word")) },
    ], false),
    "ParagraphProperty": o([
        { json: "detectedLanguages", js: "detectedLanguages", typ: a(r("DetectedLanguage")) },
    ], false),
    "DetectedLanguage": o([
        { json: "languageCode", js: "languageCode", typ: r("Locale") },
    ], false),
    "Word": o([
        { json: "property", js: "property", typ: r("ParagraphProperty") },
        { json: "boundingBox", js: "boundingBox", typ: r("Bounding") },
        { json: "symbols", js: "symbols", typ: a(r("Symbol")) },
    ], false),
    "Symbol": o([
        { json: "property", js: "property", typ: r("SymbolProperty") },
        { json: "boundingBox", js: "boundingBox", typ: r("Bounding") },
        { json: "text", js: "text", typ: "" },
    ], false),
    "SymbolProperty": o([
        { json: "detectedLanguages", js: "detectedLanguages", typ: a(r("DetectedLanguage")) },
        { json: "detectedBreak", js: "detectedBreak", typ: u(undefined, r("DetectedBreak")) },
    ], false),
    "DetectedBreak": o([
        { json: "type", js: "type", typ: "" },
    ], false),
    "TextAnnotation": o([
        { json: "locale", js: "locale", typ: u(undefined, r("Locale")) },
        { json: "description", js: "description", typ: "" },
        { json: "boundingPoly", js: "boundingPoly", typ: r("Bounding") },
    ], false),
    "Locale": [
        "en",
        "fi",
    ],
};
