export const checksums = {
  "blog": "v3.5.0--bPmpx7WOMgCWvp93ekxxSMl8JGr-kPUsjUCGIPcWiko"
}
export const checksumsStructure = {
  "blog": "GYxHGSqzDdxU2rd3mrAmRtEpzXGa6mU4JOZkUgkrPG4"
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