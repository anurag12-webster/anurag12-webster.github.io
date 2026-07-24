export const checksums = {
  "blog": "v3.5.0--ksCIgWBlxEg2UvgmMvMzkJVVwIHGMqsPOB8SbUna_A0"
}
export const checksumsStructure = {
  "blog": "WJCX28_xSh5_96sJUGlvg37AnteX_-XVuOm7SCvT5WI"
}

export const tables = {
  "blog": "_content_blog",
  "info": "_content_info"
}

export default {
  "blog": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "author": "string",
      "body": "json",
      "categories": "json",
      "citations": "json",
      "date": "string",
      "description": "string",
      "extension": "string",
      "hidden": "boolean",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "stem": "string",
      "thumbnail": "string"
    }
  },
  "info": {
    "type": "data",
    "fields": {}
  }
}