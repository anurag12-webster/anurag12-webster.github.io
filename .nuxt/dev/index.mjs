import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { Server } from 'node:http';
import { resolve as resolve$3, dirname, join as join$1 } from 'node:path';
import nodeCrypto from 'node:crypto';
import { parentPort, threadId, Worker } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, appendResponseHeader, getRequestURL, getResponseHeader, getRequestProtocol, getRequestHost, createError, getQuery as getQuery$1, removeResponseHeader, readBody, setHeader, getRouterParam, getResponseStatus, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getResponseStatusText, H3Error } from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/h3/dist/index.mjs';
import { escapeHtml } from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/@vue/shared/dist/shared.cjs.js';
import defu, { defuFn, defu as defu$1 } from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/defu/dist/defu.mjs';
import { parse, ELEMENT_NODE, TEXT_NODE } from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/ultrahtml/dist/index.js';
import { querySelector } from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/ultrahtml/dist/selector.js';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, hasProtocol, withHttps, withLeadingSlash, withoutTrailingSlash, withBase, withTrailingSlash, withoutLeadingSlash, decodePath, joinRelativeURL } from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/ufo/dist/index.mjs';
import { readFile } from 'node:fs/promises';
import { join, dirname as dirname$1, resolve as resolve$4, isAbsolute } from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/pathe/dist/index.mjs';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import destr, { destr as destr$1 } from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/destr/dist/index.mjs';
import { stringify, uneval, parse as parse$1 } from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/devalue/index.js';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/unhead/dist/server.mjs';
import { existsSync, mkdirSync, readFileSync, writeFileSync, promises } from 'node:fs';
import { toValue, isVNode, isRef } from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/vue/index.mjs';
import consola, { createConsola, consola as consola$1 } from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/consola/dist/index.mjs';
import { klona } from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/klona/dist/index.mjs';
import { snakeCase } from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/scule/dist/index.mjs';
import { digest, hash as hash$1 } from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/ohash/dist/index.mjs';
import { createStorage, prefixStorage, normalizeKey } from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/unstorage/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/radix3/dist/index.mjs';
import { createHooks } from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1, $fetch as $fetch$1 } from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/node-mock-http/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/unstorage/drivers/fs.mjs';
import { ErrorParser } from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/youch-core/build/index.js';
import { Youch } from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/source-map/source-map.js';
import devalue from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/@nuxt/devalue/dist/devalue.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { getContext } from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/unctx/dist/index.mjs';
import { captureRawStackTrace, parseRawStackTrace } from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/errx/dist/index.js';
import _wH6JrtIxmaSoA8lCPWFnE9z4lQeXW6H5z3l5aymEQw from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/@nuxt/vite-builder/dist/fix-stacktrace.mjs';
import { fileURLToPath } from 'node:url';
import { renderToString } from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/vue/server-renderer/index.mjs';
import { walkResolver } from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/unhead/dist/utils.mjs';
import localAdapter from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/db0/dist/connectors/better-sqlite3.mjs';
import lruCacheDriver from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/unstorage/drivers/lru-cache.mjs';
import { createUnhead } from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/unhead/dist/index.mjs';
import _satori from 'file://C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/satori/dist/index.js';

const serverAssets = [{"baseName":"server","dir":"C:/Users/ASUS/Documents/anurag12-webster.github.io/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:/Users/ASUS/Documents/anurag12-webster.github.io","watchOptions":{"ignored":[null]}}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:/Users/ASUS/Documents/anurag12-webster.github.io/server","watchOptions":{"ignored":[null]}}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:/Users/ASUS/Documents/anurag12-webster.github.io/.nuxt"}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:/Users/ASUS/Documents/anurag12-webster.github.io/.nuxt/cache"}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"C:/Users/ASUS/Documents/anurag12-webster.github.io/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/__nuxt_content/**": {
        "robots": false,
        "cache": false
      },
      "/__nuxt_content/blog/sql_dump.txt": {
        "prerender": true
      },
      "/blog/gpu-architecture-notes": {
        "prerender": true
      },
      "/blog/neural-audio-codec-rvq": {
        "prerender": true
      },
      "/blog/teaching-models-to-write-kernels": {
        "prerender": true
      },
      "/blog/tpu-silicon-engine-ai-training": {
        "prerender": true
      },
      "/blog/tts-datasets": {
        "prerender": true
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_og-static-fonts/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/__nuxt_content/blog/sql_dump.txt/_payload.json": {
        "prerender": true
      },
      "/blog/gpu-architecture-notes/_payload.json": {
        "prerender": true
      },
      "/blog/neural-audio-codec-rvq/_payload.json": {
        "prerender": true
      },
      "/blog/teaching-models-to-write-kernels/_payload.json": {
        "prerender": true
      },
      "/blog/tpu-silicon-engine-ai-training/_payload.json": {
        "prerender": true
      },
      "/blog/tts-datasets/_payload.json": {
        "prerender": true
      }
    }
  },
  "public": {
    "mdc": {
      "components": {
        "prose": true,
        "map": {},
        "customElements": []
      },
      "headings": {
        "anchorLinks": {
          "h1": false,
          "h2": true,
          "h3": true,
          "h4": true,
          "h5": false,
          "h6": false
        }
      },
      "highlight": {
        "noApiRoute": true,
        "highlighter": "shiki",
        "theme": {
          "default": "github-light",
          "dark": "github-dark"
        },
        "shikiEngine": "oniguruma",
        "langs": [
          "js",
          "jsx",
          "json",
          "ts",
          "tsx",
          "vue",
          "css",
          "html",
          "bash",
          "md",
          "mdc",
          "yaml"
        ]
      }
    },
    "content": {
      "wsUrl": ""
    }
  },
  "content": {
    "databaseVersion": "v3.5.0",
    "version": "3.12.0",
    "database": {
      "type": "sqlite",
      "filename": "./contents.sqlite"
    },
    "localDatabase": {
      "type": "sqlite",
      "filename": "C:/Users/ASUS/Documents/anurag12-webster.github.io/.data/content/contents.sqlite"
    },
    "integrityCheck": true
  },
  "nuxt-site-config": {
    "stack": [
      {
        "_context": "system",
        "_priority": -15,
        "env": "development"
      },
      {
        "_priority": -3,
        "_context": "nuxt-site-config:config",
        "url": "https://anuragkanade.com",
        "name": "Anurag Kanade"
      }
    ],
    "version": "4.0.7",
    "debug": false,
    "multiTenancy": []
  },
  "nuxt-og-image": {
    "version": "6.3.2",
    "satoriOptions": {},
    "resvgOptions": {},
    "sharpOptions": {},
    "publicStoragePath": "root:public",
    "defaults": {
      "emojis": "noto",
      "extension": "png",
      "width": 1200,
      "height": 600,
      "cacheMaxAgeSeconds": 259200
    },
    "debug": false,
    "baseCacheKey": "/cache/nuxt-og-image/6.3.2",
    "buildCacheDir": "",
    "hasNuxtIcon": false,
    "colorPreference": "light",
    "isNuxtContentDocumentDriven": false,
    "cacheQueryParams": false,
    "cssFramework": "tailwind",
    "browser": "",
    "security": {
      "strict": false,
      "maxDimension": 2048,
      "maxDpr": 2,
      "renderTimeout": 15000,
      "maxQueryParamSize": "",
      "restrictRuntimeImagesToOrigin": false,
      "secret": ""
    },
    "componentDirs": [
      "OgImageCommunity",
      "OgImageTemplate",
      "og-image",
      "OgImage"
    ],
    "srcDir": "C:/Users/ASUS/Documents/anurag12-webster.github.io/app",
    "rootDir": "C:/Users/ASUS/Documents/anurag12-webster.github.io",
    "communityTemplatesDir": "C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community"
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

/**
* Nitro internal functions extracted from https://github.com/nitrojs/nitro/blob/v2/src/runtime/internal/utils.ts
*/
function isJsonRequest(event) {
	// If the client specifically requests HTML, then avoid classifying as JSON.
	if (hasReqHeader(event, "accept", "text/html")) {
		return false;
	}
	return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
	const value = getRequestHeader(event, name);
	return !!(value && typeof value === "string" && value.toLowerCase().includes(includes));
}

const iframeStorageBridge = (nonce) => `
(function () {
  const NONCE = ${JSON.stringify(nonce)};
  const memoryStore = Object.create(null);

  const post = (type, payload) => {
    window.parent.postMessage({ type, nonce: NONCE, ...payload }, '*');
  };

  const isValid = (data) => data && data.nonce === NONCE;

  const mockStorage = {
    getItem(key) {
      return Object.hasOwn(memoryStore, key)
        ? memoryStore[key]
        : null;
    },
    setItem(key, value) {
      const v = String(value);
      memoryStore[key] = v;
      post('storage-set', { key, value: v });
    },
    removeItem(key) {
      delete memoryStore[key];
      post('storage-remove', { key });
    },
    clear() {
      for (const key of Object.keys(memoryStore))
        delete memoryStore[key];
      post('storage-clear', {});
    },
    key(index) {
      const keys = Object.keys(memoryStore);
      return keys[index] ?? null;
    },
    get length() {
      return Object.keys(memoryStore).length;
    }
  };

  const defineLocalStorage = () => {
    try {
      Object.defineProperty(window, 'localStorage', {
        value: mockStorage,
        writable: false,
        configurable: true
      });
    } catch {
      window.localStorage = mockStorage;
    }
  };

  defineLocalStorage();

  window.addEventListener('message', (event) => {
    const data = event.data;
    if (!isValid(data) || data.type !== 'storage-sync-data') return;

    const incoming = data.data || {};
    for (const key of Object.keys(incoming))
      memoryStore[key] = incoming[key];

    if (typeof window.initTheme === 'function')
      window.initTheme();
    window.dispatchEvent(new Event('storage-ready'));
  });

  // Clipboard API is unavailable in data: URL iframe, so we use postMessage
  document.addEventListener('DOMContentLoaded', function() {
    window.copyErrorMessage = function(button) {
      post('clipboard-copy', { text: button.dataset.errorText });
      button.classList.add('copied');
      setTimeout(function() { button.classList.remove('copied'); }, 2000);
    };
  });

  post('storage-sync-request', {});
})();
`;
const parentStorageBridge = (nonce) => `
(function () {
  const host = document.querySelector('nuxt-error-overlay');
  if (!host) return;

  const NONCE = ${JSON.stringify(nonce)};
  const isValid = (data) => data && data.nonce === NONCE;

  // Handle clipboard copy from iframe
  window.addEventListener('message', function(e) {
    if (isValid(e) && e.data.type === 'clipboard-copy') {
      navigator.clipboard.writeText(e.data.text).catch(function() {});
    }
  });

  const collectLocalStorage = () => {
    const all = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k != null) all[k] = localStorage.getItem(k);
    }
    return all;
  };

  const attachWhenReady = () => {
    const root = host.shadowRoot;
    if (!root)
      return false;
    const iframe = root.getElementById('frame');
    if (!iframe || !iframe.contentWindow)
      return false;

    const handlers = {
      'storage-set': (d) => localStorage.setItem(d.key, d.value),
      'storage-remove': (d) => localStorage.removeItem(d.key),
      'storage-clear': () => localStorage.clear(),
      'storage-sync-request': () => {
        iframe.contentWindow.postMessage({
          type: 'storage-sync-data',
          data: collectLocalStorage(),
          nonce: NONCE
        }, '*');
      }
    };

    window.addEventListener('message', (event) => {
      const data = event.data;
      if (!isValid(data)) return;
      const fn = handlers[data.type];
      if (fn) fn(data);
    });

    return true;
  };

  if (attachWhenReady())
    return;

  const obs = new MutationObserver(() => {
    if (attachWhenReady())
      obs.disconnect();
  });

  obs.observe(host, { childList: true, subtree: true });
})();
`;
const errorCSS = `
:host {
  --preview-width: 240px;
  --preview-height: 180px;
  --base-width: 1200px;
  --base-height: 900px;
  --z-base: 999999998;
  --error-pip-left: auto;
  --error-pip-top: auto;
  --error-pip-right: 5px;
  --error-pip-bottom: 5px;
  --error-pip-origin: bottom right;
  --app-preview-left: auto;
  --app-preview-top: auto;
  --app-preview-right: 5px;
  --app-preview-bottom: 5px;
  all: initial;
  display: contents;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
#frame {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  border: none;
  z-index: var(--z-base);
}
#frame[inert] {
  left: var(--error-pip-left);
  top: var(--error-pip-top);
  right: var(--error-pip-right);
  bottom: var(--error-pip-bottom);
  width: var(--base-width);
  height: var(--base-height);
  transform: scale(calc(240 / 1200));
  transform-origin: var(--error-pip-origin);
  overflow: hidden;
  border-radius: calc(1200 * 8px / 240);
}
#preview {
  position: fixed;
  left: var(--app-preview-left);
  top: var(--app-preview-top);
  right: var(--app-preview-right);
  bottom: var(--app-preview-bottom);
  width: var(--preview-width);
  height: var(--preview-height);
  overflow: hidden;
  border-radius: 6px;
  pointer-events: none;
  z-index: var(--z-base);
  background: white;
  display: none;
}
#preview iframe {
  transform-origin: var(--error-pip-origin);
}
#frame:not([inert]) + #preview {
  display: block;
}
#toggle {
  position: fixed;
  left: var(--app-preview-left);
  top: var(--app-preview-top);
  right: calc(var(--app-preview-right) - 3px);
  bottom: calc(var(--app-preview-bottom) - 3px);
  width: var(--preview-width);
  height: var(--preview-height);
  background: none;
  border: 3px solid #00DC82;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s, box-shadow 0.2s;
  z-index: calc(var(--z-base) + 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
#toggle:hover,
#toggle:focus {
  opacity: 1;
  box-shadow: 0 0 20px rgba(0, 220, 130, 0.6);
}
#toggle:focus-visible {
  outline: 3px solid #00DC82;
  outline-offset: 0;
  box-shadow: 0 0 24px rgba(0, 220, 130, 0.8);
}
#frame[inert] ~ #toggle {
  left: var(--error-pip-left);
  top: var(--error-pip-top);
  right: calc(var(--error-pip-right) - 3px);
  bottom: calc(var(--error-pip-bottom) - 3px);
  cursor: grab;
}
:host(.dragging) #frame[inert] ~ #toggle {
  cursor: grabbing;
}
#frame:not([inert]) ~ #toggle,
#frame:not([inert]) + #preview {
  cursor: grab;
}
:host(.dragging-preview) #frame:not([inert]) ~ #toggle,
:host(.dragging-preview) #frame:not([inert]) + #preview {
  cursor: grabbing;
}

#pip-close {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  font-size: 16px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  pointer-events: auto;
}
#pip-close:focus-visible {
  outline: 2px solid #00DC82;
  outline-offset: 2px;
}

#pip-restore {
  position: fixed;
  right: 16px;
  bottom: 16px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 2px solid #00DC82;
  background: #111;
  color: #fff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  z-index: calc(var(--z-base) + 2);
  cursor: grab;
}
#pip-restore:focus-visible {
  outline: 2px solid #00DC82;
  outline-offset: 2px;
}
:host(.dragging-restore) #pip-restore {
  cursor: grabbing;
}

#frame[hidden],
#toggle[hidden],
#preview[hidden],
#pip-restore[hidden],
#pip-close[hidden] {
  display: none !important;
}

@media (prefers-reduced-motion: reduce) {
  #toggle {
    transition: none;
  }
}
`;
function webComponentScript(base64HTML, startMinimized) {
	return `
(function () {
  try {
    // =========================
    // Host + Shadow
    // =========================
    const host = document.querySelector('nuxt-error-overlay');
    if (!host)
      return;
    const shadow = host.attachShadow({ mode: 'open' });

    // =========================
    // DOM helpers
    // =========================
    const el = (tag) => document.createElement(tag);
    const on = (node, type, fn, opts) => node.addEventListener(type, fn, opts);
    const hide = (node, v) => node.toggleAttribute('hidden', !!v);
    const setVar = (name, value) => host.style.setProperty(name, value);
    const unsetVar = (name) => host.style.removeProperty(name);

    // =========================
    // Create DOM
    // =========================
    const style = el('style');
    style.textContent = ${JSON.stringify(errorCSS)};

    const iframe = el('iframe');
    iframe.id = 'frame';
    iframe.src = 'data:text/html;base64,${base64HTML}';
    iframe.title = 'Detailed error stack trace';
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-top-navigation-by-user-activation');

    const preview = el('div');
    preview.id = 'preview';

    const toggle = el('div');
    toggle.id = 'toggle';
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('role', 'button');
    toggle.setAttribute('tabindex', '0');
    toggle.innerHTML = '<span class="sr-only">Toggle detailed error view</span>';

    const liveRegion = el('div');
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.className = 'sr-only';

    const pipCloseButton = el('button');
    pipCloseButton.id = 'pip-close';
    pipCloseButton.setAttribute('type', 'button');
    pipCloseButton.setAttribute('aria-label', 'Hide error preview overlay');
    pipCloseButton.innerHTML = '&times;';
    pipCloseButton.hidden = true;
    toggle.appendChild(pipCloseButton);

    const pipRestoreButton = el('button');
    pipRestoreButton.id = 'pip-restore';
    pipRestoreButton.setAttribute('type', 'button');
    pipRestoreButton.setAttribute('aria-label', 'Show error overlay');
    pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error overlay</span>';
    pipRestoreButton.hidden = true;

    // Order matters: #frame + #preview adjacency
    shadow.appendChild(style);
    shadow.appendChild(liveRegion);
    shadow.appendChild(iframe);
    shadow.appendChild(preview);
    shadow.appendChild(toggle);
    shadow.appendChild(pipRestoreButton);

    // =========================
    // Constants / keys
    // =========================
    const POS_KEYS = {
      position: 'nuxt-error-overlay:position',
      hiddenPretty: 'nuxt-error-overlay:error-pip:hidden',
      hiddenPreview: 'nuxt-error-overlay:app-preview:hidden'
    };

    const CSS_VARS = {
      pip: {
        left: '--error-pip-left',
        top: '--error-pip-top',
        right: '--error-pip-right',
        bottom: '--error-pip-bottom'
      },
      preview: {
        left: '--app-preview-left',
        top: '--app-preview-top',
        right: '--app-preview-right',
        bottom: '--app-preview-bottom'
      }
    };

    const MIN_GAP = 5;
    const DRAG_THRESHOLD = 2;

    // =========================
    // Local storage safe access + state
    // =========================
    let storageReady = true;
    let isPrettyHidden = false;
    let isPreviewHidden = false;

    const safeGet = (k) => {
      try {
        return localStorage.getItem(k);
      } catch {
        return null;
      }
    };

    const safeSet = (k, v) => {
      if (!storageReady) 
        return;
      try {
        localStorage.setItem(k, v);
      } catch {}
    };

    // =========================
    // Sizing helpers
    // =========================
    const vvSize = () => {
      const v = window.visualViewport;
      return v ? { w: v.width, h: v.height } : { w: window.innerWidth, h: window.innerHeight };
    };

    const previewSize = () => {
      const styles = getComputedStyle(host);
      const w = parseFloat(styles.getPropertyValue('--preview-width')) || 240;
      const h = parseFloat(styles.getPropertyValue('--preview-height')) || 180;
      return { w, h };
    };

    const sizeForTarget = (target) => {
      if (!target)
        return previewSize();
      const rect = target.getBoundingClientRect();
      if (rect.width && rect.height)
        return { w: rect.width, h: rect.height };
      return previewSize();
    };

    // =========================
    // Dock model + offset/alignment calculations
    // =========================
    const dock = { edge: null, offset: null, align: null, gap: null };

    const maxOffsetFor = (edge, size) => {
      const vv = vvSize();
      if (edge === 'left' || edge === 'right')
        return Math.max(MIN_GAP, vv.h - size.h - MIN_GAP);
      return Math.max(MIN_GAP, vv.w - size.w - MIN_GAP);
    };

    const clampOffset = (edge, value, size) => {
      const max = maxOffsetFor(edge, size);
      return Math.min(Math.max(value, MIN_GAP), max);
    };

    const updateDockAlignment = (size) => {
      if (!dock.edge || dock.offset == null)
        return;
      const max = maxOffsetFor(dock.edge, size);
      if (dock.offset <= max / 2) {
        dock.align = 'start';
        dock.gap = dock.offset;
      } else {
        dock.align = 'end';
        dock.gap = Math.max(0, max - dock.offset);
      }
    };

    const appliedOffsetFor = (size) => {
      if (!dock.edge || dock.offset == null)
        return null;
      const max = maxOffsetFor(dock.edge, size);

      if (dock.align === 'end' && typeof dock.gap === 'number') {
        return clampOffset(dock.edge, max - dock.gap, size);
      }
      if (dock.align === 'start' && typeof dock.gap === 'number') {
        return clampOffset(dock.edge, dock.gap, size);
      }
      return clampOffset(dock.edge, dock.offset, size);
    };

    const nearestEdgeAt = (x, y) => {
      const { w, h } = vvSize();
      const d = { left: x, right: w - x, top: y, bottom: h - y };
      return Object.keys(d).reduce((a, b) => (d[a] < d[b] ? a : b));
    };

    const cornerDefaultDock = () => {
      const vv = vvSize();
      const size = previewSize();
      const offset = Math.max(MIN_GAP, vv.w - size.w - MIN_GAP);
      return { edge: 'bottom', offset };
    };

    const currentTransformOrigin = () => {
      if (!dock.edge) return null;
      if (dock.edge === 'left' || dock.edge === 'top')
        return 'top left';
      if (dock.edge === 'right')
        return 'top right';
      return 'bottom left';
    };

    // =========================
    // Persist / load dock
    // =========================
    const loadDock = () => {
      const raw = safeGet(POS_KEYS.position);
      if (!raw)
        return;
      try {
        const parsed = JSON.parse(raw);
        const { edge, offset, align, gap } = parsed || {};
        if (!['left', 'right', 'top', 'bottom'].includes(edge))
          return;
        if (typeof offset !== 'number')
          return;

        dock.edge = edge;
        dock.offset = clampOffset(edge, offset, previewSize());
        dock.align = align === 'start' || align === 'end' ? align : null;
        dock.gap = typeof gap === 'number' ? gap : null;

        if (!dock.align || dock.gap == null)
          updateDockAlignment(previewSize());
      } catch {}
    };

    const persistDock = () => {
      if (!dock.edge || dock.offset == null)
        return; 
      safeSet(POS_KEYS.position, JSON.stringify({
        edge: dock.edge,
        offset: dock.offset,
        align: dock.align,
        gap: dock.gap
      }));
    };

    // =========================
    // Apply dock
    // =========================
    const dockToVars = (vars) => ({
      set: (side, v) => host.style.setProperty(vars[side], v),
      clear: (side) => host.style.removeProperty(vars[side])
    });

    const dockToEl = (node) => ({
      set: (side, v) => { node.style[side] = v; },
      clear: (side) => { node.style[side] = ''; }
    });

    const applyDock = (target, size, opts) => {
      if (!dock.edge || dock.offset == null) {
        target.clear('left');
        target.clear('top');
        target.clear('right');
        target.clear('bottom');
        return;
      }

      target.set('left', 'auto');
      target.set('top', 'auto');
      target.set('right', 'auto');
      target.set('bottom', 'auto');

      const applied = appliedOffsetFor(size);

      if (dock.edge === 'left') {
        target.set('left', MIN_GAP + 'px');
        target.set('top', applied + 'px');
      } else if (dock.edge === 'right') {
        target.set('right', MIN_GAP + 'px');
        target.set('top', applied + 'px');
      } else if (dock.edge === 'top') {
        target.set('top', MIN_GAP + 'px');
        target.set('left', applied + 'px');
      } else {
        target.set('bottom', MIN_GAP + 'px');
        target.set('left', applied + 'px');
      }

      if (!opts || opts.persist !== false)
        persistDock();
    };

    const applyDockAll = (opts) => {
      applyDock(dockToVars(CSS_VARS.pip), previewSize(), opts);
      applyDock(dockToVars(CSS_VARS.preview), previewSize(), opts);
      applyDock(dockToEl(pipRestoreButton), sizeForTarget(pipRestoreButton), opts);
    };

    const repaintToDock = () => {
      if (!dock.edge || dock.offset == null)
        return;
      const origin = currentTransformOrigin();
      if (origin)
        setVar('--error-pip-origin', origin);
      else 
        unsetVar('--error-pip-origin');
      applyDockAll({ persist: false });
    };

    // =========================
    // Hidden state + UI
    // =========================
    const loadHidden = () => {
      const rawPretty = safeGet(POS_KEYS.hiddenPretty);
      if (rawPretty != null)
        isPrettyHidden = rawPretty === '1' || rawPretty === 'true';
      const rawPreview = safeGet(POS_KEYS.hiddenPreview);
      if (rawPreview != null)
        isPreviewHidden = rawPreview === '1' || rawPreview === 'true';
    };

    const setPrettyHidden = (v) => {
      isPrettyHidden = !!v;
      safeSet(POS_KEYS.hiddenPretty, isPrettyHidden ? '1' : '0');
      updateUI();
    };

    const setPreviewHidden = (v) => {
      isPreviewHidden = !!v;
      safeSet(POS_KEYS.hiddenPreview, isPreviewHidden ? '1' : '0');
      updateUI();
    };

    const isMinimized = () => iframe.hasAttribute('inert');

    const setMinimized = (v) => {
      if (v) {
        iframe.setAttribute('inert', '');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        iframe.removeAttribute('inert');
        toggle.setAttribute('aria-expanded', 'true');
      }
    };

    const setRestoreLabel = (kind) => {
      if (kind === 'pretty') {
        pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error overlay</span>';
        pipRestoreButton.setAttribute('aria-label', 'Show error overlay');
      } else {
        pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error page</span>';
        pipRestoreButton.setAttribute('aria-label', 'Show error page');
      }
    };

    const updateUI = () => {
      const minimized = isMinimized();
      const showPiP = minimized && !isPrettyHidden;
      const showPreview = !minimized && !isPreviewHidden;
      const pipHiddenByUser = minimized && isPrettyHidden;
      const previewHiddenByUser = !minimized && isPreviewHidden;
      const showToggle = minimized ? showPiP : showPreview;
      const showRestore = pipHiddenByUser || previewHiddenByUser;

      hide(iframe, pipHiddenByUser);
      hide(preview, !showPreview);
      hide(toggle, !showToggle);
      hide(pipCloseButton, !showToggle);
      hide(pipRestoreButton, !showRestore);

      pipCloseButton.setAttribute('aria-label', minimized ? 'Hide error overlay' : 'Hide error page preview');

      if (pipHiddenByUser)
        setRestoreLabel('pretty');
      else if (previewHiddenByUser)
        setRestoreLabel('preview');

      host.classList.toggle('pip-hidden', isPrettyHidden);
      host.classList.toggle('preview-hidden', isPreviewHidden);
    };

    // =========================
    // Preview snapshot
    // =========================
    const updatePreview = () => {
      try {
        let previewIframe = preview.querySelector('iframe');
        if (!previewIframe) {
          previewIframe = el('iframe');
          previewIframe.style.cssText = 'width: 1200px; height: 900px; transform: scale(0.2); transform-origin: top left; border: none;';
          previewIframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
          preview.appendChild(previewIframe);
        }

        const doctype = document.doctype ? '<!DOCTYPE ' + document.doctype.name + '>' : '';
        const cleanedHTML = document.documentElement.outerHTML
          .replace(/<nuxt-error-overlay[^>]*>.*?<\\/nuxt-error-overlay>/gs, '')
          .replace(/<script[^>]*>.*?<\\/script>/gs, '');

        const iframeDoc = previewIframe.contentDocument || previewIframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(doctype + cleanedHTML);
        iframeDoc.close();
      } catch (err) {
        console.error('Failed to update preview:', err);
      }
    };

    // =========================
    // View toggling
    // =========================
    const toggleView = () => {
      if (isMinimized()) {
        updatePreview();
        setMinimized(false);
        liveRegion.textContent = 'Showing detailed error view';
        setTimeout(() => { 
          try { 
            iframe.contentWindow.focus();
          } catch {}
        }, 100);
      } else {
        setMinimized(true);
        liveRegion.textContent = 'Showing error page';
        repaintToDock();
        void iframe.offsetWidth;
      }
      updateUI();
    };

    // =========================
    // Dragging (unified, rAF throttled)
    // =========================
    let drag = null;
    let rafId = null;
    let suppressToggleClick = false;
    let suppressRestoreClick = false;

    const beginDrag = (e) => {
      if (drag) 
        return;

      if (!dock.edge || dock.offset == null) {
        const def = cornerDefaultDock();
        dock.edge = def.edge;
        dock.offset = def.offset;
        updateDockAlignment(previewSize());
      }

      const isRestoreTarget = e.currentTarget === pipRestoreButton;

      drag = {
        kind: isRestoreTarget ? 'restore' : (isMinimized() ? 'pip' : 'preview'),
        pointerId: e.pointerId,
        startX: e.clientX,
        startY: e.clientY,
        lastX: e.clientX,
        lastY: e.clientY,
        moved: false,
        target: e.currentTarget
      };

      drag.target.setPointerCapture(e.pointerId);

      if (drag.kind === 'restore')
        host.classList.add('dragging-restore');
      else 
        host.classList.add(drag.kind === 'pip' ? 'dragging' : 'dragging-preview');

      e.preventDefault();
    };

    const moveDrag = (e) => {
      if (!drag || drag.pointerId !== e.pointerId)
        return;

      drag.lastX = e.clientX;
      drag.lastY = e.clientY;
      
      const dx = drag.lastX - drag.startX;
      const dy = drag.lastY - drag.startY;

      if (!drag.moved && (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD)) {
        drag.moved = true;
      }

      if (!drag.moved)
        return;
      if (rafId)
        return;

      rafId = requestAnimationFrame(() => {
        rafId = null;

        const edge = nearestEdgeAt(drag.lastX, drag.lastY);
        const size = sizeForTarget(drag.target);

        let offset;
        if (edge === 'left' || edge === 'right') {
          const top = drag.lastY - (size.h / 2);
          offset = clampOffset(edge, Math.round(top), size);
        } else {
          const left = drag.lastX - (size.w / 2);
          offset = clampOffset(edge, Math.round(left), size);
        }

        dock.edge = edge;
        dock.offset = offset;
        updateDockAlignment(size);

        const origin = currentTransformOrigin();
        setVar('--error-pip-origin', origin || 'bottom right');

        applyDockAll({ persist: false });
      });
    };

    const endDrag = (e) => {
      if (!drag || drag.pointerId !== e.pointerId)
        return;

      const endedKind = drag.kind;
      drag.target.releasePointerCapture(e.pointerId);

      if (endedKind === 'restore')
        host.classList.remove('dragging-restore');
      else 
        host.classList.remove(endedKind === 'pip' ? 'dragging' : 'dragging-preview');

      const didMove = drag.moved;
      drag = null;

      if (didMove) {
        persistDock();
        if (endedKind === 'restore')
          suppressRestoreClick = true;
        else 
          suppressToggleClick = true;
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const bindDragTarget = (node) => {
      on(node, 'pointerdown', beginDrag);
      on(node, 'pointermove', moveDrag);
      on(node, 'pointerup', endDrag);
      on(node, 'pointercancel', endDrag);
    };

    bindDragTarget(toggle);
    bindDragTarget(pipRestoreButton);

    // =========================
    // Events (toggle / close / restore)
    // =========================
    on(toggle, 'click', (e) => {
      if (suppressToggleClick) {
        e.preventDefault();
        suppressToggleClick = false;
        return;
      }
      toggleView();
    });

    on(toggle, 'keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleView();
      }
    });

    on(pipCloseButton, 'click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isMinimized())
        setPrettyHidden(true);
      else
        setPreviewHidden(true);
    });

    on(pipCloseButton, 'pointerdown', (e) => {
      e.stopPropagation();
    });

    on(pipRestoreButton, 'click', (e) => {
      if (suppressRestoreClick) {
        e.preventDefault();
        suppressRestoreClick = false;
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      if (isMinimized()) 
        setPrettyHidden(false);
      else 
        setPreviewHidden(false);
    });

    // =========================
    // Lifecycle: load / sync / repaint
    // =========================
    const loadState = () => {
      loadDock();
      loadHidden();

      if (isPrettyHidden && !isMinimized())
        setMinimized(true);

      updateUI();
      repaintToDock();
    };

    loadState();

    on(window, 'storage-ready', () => {
      storageReady = true;
      loadState();
    });

    const onViewportChange = () => repaintToDock();

    on(window, 'resize', onViewportChange);

    if (window.visualViewport) {
      on(window.visualViewport, 'resize', onViewportChange);
      on(window.visualViewport, 'scroll', onViewportChange);
    }

    // initial preview
    setTimeout(updatePreview, 100);

    // initial minimized option
    if (${startMinimized}) {
      setMinimized(true);
      repaintToDock();
      void iframe.offsetWidth;
      updateUI();
    }
  } catch (err) {
    console.error('Failed to initialize Nuxt error overlay:', err);
  }
})();
`;
}
function generateErrorOverlayHTML(html, options) {
	const nonce = Array.from(crypto.getRandomValues(new Uint8Array(16)), (b) => b.toString(16).padStart(2, "0")).join("");
	const errorPage = html.replace("<head>", `<head><script>${iframeStorageBridge(nonce)}<\/script>`);
	const base64HTML = Buffer.from(errorPage, "utf8").toString("base64");
	return `
    <script>${parentStorageBridge(nonce)}<\/script>
    <nuxt-error-overlay></nuxt-error-overlay>
    <script>${webComponentScript(base64HTML, options?.startMinimized ?? false)}<\/script>
  `;
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
	if (event.handled || isJsonRequest(event)) {
		// let Nitro handle JSON errors
		return;
	}
	// invoke default Nitro error handler (which will log appropriately if required)
	const defaultRes = await defaultHandler(error, event, { json: true });
	// let Nitro handle redirect if appropriate
	const status = error.status || error.statusCode || 500;
	if (status === 404 && defaultRes.status === 302) {
		setResponseHeaders(event, defaultRes.headers);
		setResponseStatus(event, defaultRes.status, defaultRes.statusText);
		return send(event, JSON.stringify(defaultRes.body, null, 2));
	}
	if (typeof defaultRes.body !== "string" && Array.isArray(defaultRes.body.stack)) {
		// normalize to string format expected by nuxt `error.vue`
		defaultRes.body.stack = defaultRes.body.stack.join("\n");
	}
	const errorObject = defaultRes.body;
	// remove proto/hostname/port from URL
	const url = new URL(errorObject.url);
	errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
	// add default server message (keep sanitized for unhandled errors)
	errorObject.message = error.unhandled ? errorObject.message || "Server Error" : error.message || errorObject.message || "Server Error";
	// we will be rendering this error internally so we can pass along the error.data safely
	errorObject.data ||= error.data;
	errorObject.statusText ||= error.statusText || error.statusMessage;
	delete defaultRes.headers["content-type"];
	delete defaultRes.headers["content-security-policy"];
	setResponseHeaders(event, defaultRes.headers);
	// Access request headers
	const reqHeaders = getRequestHeaders(event);
	// Detect to avoid recursion in SSR rendering of errors
	const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
	// HTML response (via SSR)
	const res = isRenderingError ? null : await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject), {
		headers: {
			...reqHeaders,
			"x-nuxt-error": "true"
		},
		redirect: "manual"
	}).catch(() => null);
	if (event.handled) {
		return;
	}
	// Fallback to static rendered error page
	if (!res) {
		const { template } = await Promise.resolve().then(function () { return error500; });
		{
			// TODO: Support `message` in template
			errorObject.description = errorObject.message;
		}
		setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
		return send(event, template(errorObject));
	}
	const html = await res.text();
	for (const [header, value] of res.headers.entries()) {
		if (header === "set-cookie") {
			appendResponseHeader(event, header, value);
			continue;
		}
		setResponseHeader(event, header, value);
	}
	setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
	if (!globalThis._importMeta_.test && typeof html === "string") {
		const prettyResponse = await defaultHandler(error, event, { json: false });
		if (typeof prettyResponse.body === "string") {
			return send(event, html.replace("</body>", `${generateErrorOverlayHTML(prettyResponse.body, { startMinimized: 300 <= status && status < 500 })}</body>`));
		}
	}
	return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    if (!event.node?.res.headersSent) {
      setResponseHeaders(event, res.headers);
    }
    setResponseStatus(event, res.status, res.statusText);
    return send(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json ?? !getRequestHeader(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const parsed = await new ErrorParser().defineSourceLoader(sourceLoader).parse(error);
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
async function sourceLoader(frame) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const rawSourceMap = await readFile(`${frame.fileName}.map`, "utf8").catch(() => {
    });
    if (rawSourceMap) {
      const consumer = await new SourceMapConsumer(rawSourceMap);
      const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
      if (originalPosition.source && originalPosition.line) {
        frame.fileName = resolve$3(dirname(frame.fileName), originalPosition.source);
        frame.lineNumber = originalPosition.line;
        frame.columnNumber = originalPosition.column || 0;
      }
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const SiteConfigPriority = {
  nitro: -4,
  runtime: 0
};

function normalizeSiteConfig(config) {
  if (typeof config.indexable !== "undefined")
    config.indexable = String(config.indexable) !== "false";
  if (typeof config.trailingSlash !== "undefined" && !config.trailingSlash)
    config.trailingSlash = String(config.trailingSlash) !== "false";
  if (config.url && !hasProtocol(String(config.url), { acceptRelative: true, strict: false }))
    config.url = withHttps(String(config.url));
  const keys = Object.keys(config).sort((a, b) => a.localeCompare(b));
  const newConfig = {};
  for (const k of keys)
    newConfig[k] = config[k];
  return newConfig;
}
function createSiteConfigStack(options) {
  const debug = options?.debug || false;
  const stack = [];
  function push(input) {
    if (!input || typeof input !== "object" || Object.keys(input).length === 0) {
      return () => {
      };
    }
    if (!input._context && debug) {
      let lastFunctionName = new Error("tmp").stack?.split("\n")[2]?.split(" ")[5];
      if (lastFunctionName?.includes("/"))
        lastFunctionName = "anonymous";
      input._context = lastFunctionName;
    }
    const entry = {};
    for (const k in input) {
      const val = input[k];
      if (typeof val !== "undefined" && val !== "")
        entry[k] = val;
    }
    if (Object.keys(entry).filter((k) => !k.startsWith("_")).length === 0) {
      return () => {
      };
    }
    stack.push(entry);
    return () => {
      const idx = stack.indexOf(entry);
      if (idx !== -1)
        stack.splice(idx, 1);
    };
  }
  function get(options2) {
    const siteConfig = {};
    if (options2?.debug)
      siteConfig._context = {};
    siteConfig._priority = {};
    for (const o in stack.sort((a, b) => (a._priority || 0) - (b._priority || 0))) {
      for (const k in stack[o]) {
        const key = k;
        const val = options2?.resolveRefs ? toValue(stack[o][k]) : stack[o][k];
        if (!k.startsWith("_") && typeof val !== "undefined" && val !== "") {
          siteConfig[k] = val;
          if (typeof stack[o]._priority !== "undefined" && stack[o]._priority !== -1) {
            siteConfig._priority[key] = stack[o]._priority;
          }
          if (options2?.debug)
            siteConfig._context[key] = stack[o]._context?.[key] || stack[o]._context || "anonymous";
        }
      }
    }
    return options2?.skipNormalize ? siteConfig : normalizeSiteConfig(siteConfig);
  }
  return {
    stack,
    push,
    get
  };
}

const NUXT_SITE_ENV_RE = /^NUXT_(PUBLIC_)?SITE_/;
function envSiteConfig(env = {}) {
  return Object.fromEntries(Object.entries(env).filter(([k]) => k.startsWith("NUXT_SITE_") || k.startsWith("NUXT_PUBLIC_SITE_")).map(([k, v]) => [
    k.replace(NUXT_SITE_ENV_RE, "").split("_").map((s, i) => i === 0 ? s.toLowerCase() : s[0]?.toUpperCase() + s.slice(1).toLowerCase()).join(""),
    v
  ]));
}

const logger$2 = /* @__PURE__ */ createConsola({
  defaults: {
    tag: "nuxt-site-config"
  }
});

function getSiteConfig(e, _options) {
  if (!e.context._initedSiteConfig) {
    logger$2.warn("Site config has not been initialized yet. If you're trying to access site config in a server middleware then this not yet supported. See https://github.com/harlan-zw/nuxt-seo/issues/397");
  }
  e.context.siteConfig = e.context.siteConfig || createSiteConfigStack();
  const options = defu$1(_options, useRuntimeConfig(e)["nuxt-site-config"], { debug: false });
  return e.context.siteConfig.get(options);
}

const _jhSnSAZLMGS7l4aTAUwDrDACw05wWtrXgjRqNwydzxM = defineNitroPlugin(async (nitroApp) => {
  nitroApp.hooks.hook("render:html", async (ctx, { event }) => {
    const routeOptions = getRouteRules(event);
    const isIsland = process.env.NUXT_COMPONENT_ISLANDS && event.path.startsWith("/__nuxt_island");
    event.path;
    const noSSR = !!process.env.NUXT_NO_SSR || event.context.nuxt?.noSSR || routeOptions.ssr === false && !isIsland || (false);
    if (noSSR) {
      const siteConfig = Object.fromEntries(
        Object.entries(getSiteConfig(event)).map(([k, v]) => [k, toValue(v)])
      );
      ctx.body.push(`<script>window.__NUXT_SITE_CONFIG__=${devalue(siteConfig)}<\/script>`);
    }
  });
});

const htmlPayloadCache = createStorage({
  // short cache time so we don't need many entries at runtime
  driver: lruCacheDriver({ max: 50 })
});
const emojiCache = createStorage({
  driver: lruCacheDriver({ max: 1e3 })
});
class BoundedMap {
  constructor(max) {
    this.max = max;
  }
  map = /* @__PURE__ */ new Map();
  get(key) {
    return this.map.get(key);
  }
  set(key, value) {
    if (this.map.size >= this.max)
      this.map.delete(this.map.keys().next().value);
    this.map.set(key, value);
  }
}
const fontCache = new BoundedMap(100);
const fontArrayCache = new BoundedMap(20);

const FILE_EXT_RE = /\.[0-9a-z]+$/i;
function resolveSitePath(pathOrUrl, options) {
  let path = pathOrUrl;
  if (hasProtocol(pathOrUrl, { strict: false, acceptRelative: true })) {
    const parsed = parseURL(pathOrUrl);
    path = parsed.pathname;
  }
  const base = withLeadingSlash(options.base || "/");
  if (base !== "/" && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  let origin = withoutTrailingSlash(options.absolute ? options.siteUrl : "");
  if (base !== "/" && origin.endsWith(base)) {
    origin = origin.slice(0, origin.indexOf(base));
  }
  const baseWithOrigin = options.withBase ? withBase(base, origin || "/") : origin;
  const resolvedUrl = withBase(path, baseWithOrigin);
  return path === "/" && !options.withBase ? withTrailingSlash(resolvedUrl) : fixSlashes(options.trailingSlash, resolvedUrl);
}
const fileExtensions = [
  // Images
  "jpg",
  "jpeg",
  "png",
  "gif",
  "bmp",
  "webp",
  "svg",
  "ico",
  // Documents
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx",
  "txt",
  "md",
  "markdown",
  // Archives
  "zip",
  "rar",
  "7z",
  "tar",
  "gz",
  // Audio
  "mp3",
  "wav",
  "flac",
  "ogg",
  "opus",
  "m4a",
  "aac",
  "midi",
  "mid",
  // Video
  "mp4",
  "avi",
  "mkv",
  "mov",
  "wmv",
  "flv",
  "webm",
  // Web
  "html",
  "css",
  "js",
  "json",
  "xml",
  "tsx",
  "jsx",
  "ts",
  "vue",
  "svelte",
  "xsl",
  "rss",
  "atom",
  // Programming
  "php",
  "py",
  "rb",
  "java",
  "c",
  "cpp",
  "h",
  "go",
  // Data formats
  "csv",
  "tsv",
  "sql",
  "yaml",
  "yml",
  // Fonts
  "woff",
  "woff2",
  "ttf",
  "otf",
  "eot",
  // Executables/Binaries
  "exe",
  "msi",
  "apk",
  "ipa",
  "dmg",
  "iso",
  "bin",
  // Scripts/Config
  "bat",
  "cmd",
  "sh",
  "env",
  "htaccess",
  "conf",
  "toml",
  "ini",
  // Package formats
  "deb",
  "rpm",
  "jar",
  "war",
  // E-books
  "epub",
  "mobi",
  // Common temporary/backup files
  "log",
  "tmp",
  "bak",
  "old",
  "sav"
];
function isPathFile(path) {
  const lastSegment = path.split("/").pop();
  const ext = (lastSegment || path).match(FILE_EXT_RE)?.[0];
  return !!(ext && fileExtensions.includes(ext.replace(".", "")));
}
function fixSlashes(trailingSlash, pathOrUrl) {
  const $url = parseURL(pathOrUrl);
  if (isPathFile($url.pathname))
    return pathOrUrl;
  const fixedPath = trailingSlash ? withTrailingSlash($url.pathname) : withoutTrailingSlash($url.pathname);
  return `${$url.protocol ? `${$url.protocol}//` : ""}${$url.host || ""}${fixedPath}${$url.search || ""}${$url.hash || ""}`;
}

const e=globalThis.process?.env||Object.create(null),t=globalThis.process||{env:e},n=t!==void 0&&t.env&&t.env.NODE_ENV||void 0,r=[[`claude`,[`CLAUDECODE`,`CLAUDE_CODE`]],[`replit`,[`REPL_ID`]],[`gemini`,[`GEMINI_CLI`]],[`codex`,[`CODEX_SANDBOX`,`CODEX_THREAD_ID`]],[`opencode`,[`OPENCODE`]],[`pi`,[i(`PATH`,/\.pi[\\/]agent/)]],[`auggie`,[`AUGMENT_AGENT`]],[`goose`,[`GOOSE_PROVIDER`]],[`devin`,[i(`EDITOR`,/devin/)]],[`cursor`,[`CURSOR_AGENT`]],[`kiro`,[i(`TERM_PROGRAM`,/kiro/)]]];function i(t,n){return ()=>{let r=e[t];return r?n.test(r):false}}function a(){let t=e.AI_AGENT;if(t)return {name:t.toLowerCase()};for(let[t,n]of r)for(let r of n)if(typeof r==`string`?e[r]:r())return {name:t};return {}}const o=a();o.name;!!o.name;const l=[[`APPVEYOR`],[`AWS_AMPLIFY`,`AWS_APP_ID`,{ci:true}],[`AZURE_PIPELINES`,`SYSTEM_TEAMFOUNDATIONCOLLECTIONURI`],[`AZURE_STATIC`,`INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN`],[`APPCIRCLE`,`AC_APPCIRCLE`],[`BAMBOO`,`bamboo_planKey`],[`BITBUCKET`,`BITBUCKET_COMMIT`],[`BITRISE`,`BITRISE_IO`],[`BUDDY`,`BUDDY_WORKSPACE_ID`],[`BUILDKITE`],[`CIRCLE`,`CIRCLECI`],[`CIRRUS`,`CIRRUS_CI`],[`CLOUDFLARE_PAGES`,`CF_PAGES`,{ci:true}],[`CLOUDFLARE_WORKERS`,`WORKERS_CI`,{ci:true}],[`GOOGLE_CLOUDRUN`,`K_SERVICE`],[`GOOGLE_CLOUDRUN_JOB`,`CLOUD_RUN_JOB`],[`CODEBUILD`,`CODEBUILD_BUILD_ARN`],[`CODEFRESH`,`CF_BUILD_ID`],[`DRONE`],[`DRONE`,`DRONE_BUILD_EVENT`],[`DSARI`],[`GITHUB_ACTIONS`],[`GITLAB`,`GITLAB_CI`],[`GITLAB`,`CI_MERGE_REQUEST_ID`],[`GOCD`,`GO_PIPELINE_LABEL`],[`LAYERCI`],[`JENKINS`,`JENKINS_URL`],[`HUDSON`,`HUDSON_URL`],[`MAGNUM`],[`NETLIFY`],[`NETLIFY`,`NETLIFY_LOCAL`,{ci:false}],[`NEVERCODE`],[`RENDER`],[`SAIL`,`SAILCI`],[`SEMAPHORE`],[`SCREWDRIVER`],[`SHIPPABLE`],[`SOLANO`,`TDDIUM`],[`STRIDER`],[`TEAMCITY`,`TEAMCITY_VERSION`],[`TRAVIS`],[`VERCEL`,`NOW_BUILDER`],[`VERCEL`,`VERCEL`,{ci:false}],[`VERCEL`,`VERCEL_ENV`,{ci:false}],[`APPCENTER`,`APPCENTER_BUILD_ID`],[`CODESANDBOX`,`CODESANDBOX_SSE`,{ci:false}],[`CODESANDBOX`,`CODESANDBOX_HOST`,{ci:false}],[`STACKBLITZ`],[`STORMKIT`],[`CLEAVR`],[`ZEABUR`],[`CODESPHERE`,`CODESPHERE_APP_ID`,{ci:true}],[`RAILWAY`,`RAILWAY_PROJECT_ID`],[`RAILWAY`,`RAILWAY_SERVICE_ID`],[`DENO-DEPLOY`,`DENO_DEPLOY`],[`DENO-DEPLOY`,`DENO_DEPLOYMENT_ID`],[`FIREBASE_APP_HOSTING`,`FIREBASE_APP_HOSTING`,{ci:true}]];function u(){for(let t of l)if(e[t[1]||t[0]])return {name:t[0].toLowerCase(),...t[2]};return e.SHELL===`/bin/jsh`&&t.versions?.webcontainer?{name:`stackblitz`,ci:false}:{name:``,ci:false}}const d=u();d.name;const p=t.platform||``,m=!!e.CI||d.ci!==false,h=!!t.stdout?.isTTY;!!e.DEBUG;const v=n===`test`||!!e.TEST;n===`production`||e.MODE===`production`;const b=n===`dev`||n===`development`||e.MODE===`development`;!!e.MINIMAL||m||v||!h;const S=/^win/i.test(p);!e.NO_COLOR&&(!!e.FORCE_COLOR||(h||S)&&e.TERM!==`dumb`||m);const E=(t.versions?.node||``).replace(/^v/,``)||null;Number(E?.split(`.`)[0])||null;const O=!!t?.versions?.node,k=`Bun`in globalThis,A=`Deno`in globalThis,j=`fastly`in globalThis,M=`Netlify`in globalThis,N=`EdgeRuntime`in globalThis,P=globalThis.navigator?.userAgent===`Cloudflare-Workers`,F=[[M,`netlify`],[N,`edge-light`],[P,`workerd`],[j,`fastly`],[A,`deno`],[k,`bun`],[O,`node`]];function I(){let e=F.find(e=>e[0]);if(e)return {name:e[1]}}const L=I();L?.name||``;

const PROTOCOL_RE = /^https?:\/\//;
const TRAILING_SLASH_RE = /\/$/;
function isLocalhostHost(host) {
  if (!host || host.startsWith("localhost") || host.startsWith("127.") || host.startsWith("0.0.0.0"))
    return true;
  const hostname = host.startsWith("[") ? host.slice(0, host.indexOf("]") + 1) : host;
  return hostname === "[::1]" || hostname === "::1" || hostname === "[::]" || hostname === "::";
}
function extractHostname(host) {
  if (host.startsWith("[")) {
    const close = host.indexOf("]");
    return close !== -1 ? host.slice(0, close + 1) : host;
  }
  const colonCount = host.split(":").length - 1;
  return colonCount === 1 ? host.slice(0, host.indexOf(":")) : host;
}
function splitHostPort(host) {
  if (host.startsWith("[")) {
    const close = host.indexOf("]");
    const hostname = close !== -1 ? host.slice(0, close + 1) : host;
    const port = close !== -1 && host[close + 1] === ":" ? host.slice(close + 2) : "";
    const normalized = hostname === "[::1]" || hostname === "[::]" ? "localhost" : hostname;
    return { host: normalized, port };
  }
  if (host === "0.0.0.0" || host.startsWith("0.0.0.0:")) {
    const i = host.indexOf(":");
    return { host: "localhost", port: i !== -1 ? host.slice(i + 1) : "" };
  }
  const colonCount = host.split(":").length - 1;
  if (colonCount === 1) {
    const i = host.indexOf(":");
    return { host: host.slice(0, i), port: host.slice(i + 1) };
  }
  if (colonCount > 1) {
    const normalized = host === "::1" || host === "::" ? "localhost" : `[${host}]`;
    return { host: normalized, port: "" };
  }
  return { host, port: "" };
}
function getNitroOrigin$1(ctx = {}) {
  const isDev = ctx.isDev ?? b;
  const isPrerender = ctx.isPrerender ?? false;
  let host = "";
  let port = "";
  let protocol = process.env.NITRO_SSL_CERT && process.env.NITRO_SSL_KEY ? "https" : "http";
  if (isDev || isPrerender) {
    const devEnv = process.env.__NUXT_DEV__ || process.env.NUXT_VITE_NODE_OPTIONS;
    if (devEnv) {
      const parsed = JSON.parse(devEnv);
      const origin = parsed.proxy?.url || parsed.baseURL?.replace("/__nuxt_vite_node__", "");
      host = origin.replace(PROTOCOL_RE, "").replace(TRAILING_SLASH_RE, "");
      protocol = origin.startsWith("https") ? "https" : "http";
    }
  }
  if (isDev && isLocalhostHost(host) && ctx.requestHost) {
    const reqHost = extractHostname(ctx.requestHost);
    if (reqHost && !isLocalhostHost(reqHost)) {
      host = ctx.requestHost;
      protocol = ctx.requestProtocol || protocol;
    }
  }
  if (!host && ctx.requestHost) {
    host = ctx.requestHost;
    protocol = ctx.requestProtocol || protocol;
  }
  if (!host) {
    host = process.env.NITRO_HOST || process.env.HOST || "";
    if (isDev)
      port = process.env.NITRO_PORT || process.env.PORT || "3000";
  }
  const split = splitHostPort(host);
  host = split.host;
  if (split.port)
    port = split.port;
  host = process.env.NUXT_SITE_HOST_OVERRIDE || host;
  port = process.env.NUXT_SITE_PORT_OVERRIDE || port;
  if (host.startsWith("http://") || host.startsWith("https://")) {
    protocol = host.startsWith("https://") ? "https" : "http";
    host = host.replace(PROTOCOL_RE, "");
  } else if (!isDev && (!host || !isLocalhostHost(host))) {
    protocol = "https";
  }
  return `${protocol}://${host}${port ? `:${port}` : ""}/`;
}

function getNitroOrigin(e) {
  return getNitroOrigin$1({
    isDev: true,
    isPrerender: false,
    requestHost: e ? getRequestHost(e, { xForwardedHost: true }) : void 0,
    requestProtocol: e ? getRequestProtocol(e, { xForwardedProto: true }) : void 0
  });
}

function createSitePathResolver(e, options = {}) {
  const siteConfig = getSiteConfig(e);
  const nitroOrigin = getNitroOrigin(e);
  const nuxtBase = useRuntimeConfig(e).app.baseURL || "/";
  return (path) => {
    return resolveSitePath(path, {
      ...options,
      siteUrl: options.canonical !== false || false ? siteConfig.url : nitroOrigin,
      trailingSlash: siteConfig.trailingSlash,
      base: nuxtBase
    });
  };
}

const RE_SOCIAL_META_TAG = /<meta[^>]+(property|name)="(twitter|og):([^"]+)"[^>]*>/g;
const RE_SOCIAL_META_KEY = /(property|name)="(twitter|og):([^"]+)"/;
const RE_META_CONTENT = /content="([^"]+)"/;
const RE_OG_KEY_PARAM = /[,/]k_([^,./]+)/;
function extractSocialPreviewTags(html) {
  const data = [];
  const rootData = {};
  const socialMetaTags = html.match(RE_SOCIAL_META_TAG) || [];
  let currentArrayIdx = -1;
  socialMetaTags.forEach((tag) => {
    const [, , type, key] = tag.match(RE_SOCIAL_META_KEY);
    const value = tag.match(RE_META_CONTENT)?.[1];
    if (!value) {
      return;
    }
    if (key === "title" || key === "description") {
      rootData[`${type}:${key}`] = value;
      return;
    }
    if (type === "og" && key === "image") {
      currentArrayIdx++;
    }
    if (!data[currentArrayIdx])
      data[currentArrayIdx] = {};
    if (!data[currentArrayIdx][type])
      data[currentArrayIdx][type] = {};
    data[currentArrayIdx][type][key] = value;
  });
  data.forEach((preview) => {
    if (preview.og?.image && preview.og?.image.includes("/_og/")) {
      const url = withoutQuery(preview.og.image);
      const keyMatch = url.match(RE_OG_KEY_PARAM);
      preview.key = keyMatch?.[1] || "og";
    }
  });
  return [rootData, data];
}
function detectBase64MimeType(data) {
  const signatures = {
    "R0lGODdh": "image/gif",
    "R0lGODlh": "image/gif",
    "iVBORw0KGgo": "image/png",
    "/9j/": "image/jpeg",
    "UklGR": "image/webp",
    "AAABAA": "image/x-icon",
    "PHN2Zy": "image/svg+xml",
    // <svg
    "PD94bW": "image/svg+xml",
    // <?xml
    "PCEt": "image/svg+xml"
    // <!--
  };
  for (const s in signatures) {
    if (data.startsWith(s)) {
      return signatures[s];
    }
  }
  return "image/svg+xml";
}
function toBase64Image(data) {
  const base64 = typeof data === "string" ? data : Buffer.from(data).toString("base64");
  const type = detectBase64MimeType(base64);
  return `data:${type};base64,${base64}`;
}
function withoutQuery(path) {
  return path.split("?")[0];
}

const RE_BASE64_URL_DASH = /-/g;
const RE_BASE64_URL_TILDE = /~/g;
const RE_DOUBLE_UNDERSCORE = /__/g;
const RE_PLUS = /\+/g;
const RE_SINGLE_UNDERSCORE = /(?<!_)_(?!_)/;
const RE_OG_ROUTE_PREFIX = /\/_og\/[ds]\//;
const RE_COMMA_PARAM_SEPARATOR = /,(?=\w+_)/;
const PARAM_ALIASES = {
  w: "width",
  h: "height",
  c: "component",
  em: "emojis",
  k: "key",
  a: "alt",
  u: "url",
  cache: "cacheMaxAgeSeconds",
  p: "_path",
  // page path - needs alias since _path starts with underscore
  q: "_query",
  // query params - needs alias since _query starts with underscore
  ch: "_componentHash"
  // component template hash for cache busting prerendered URLs
};
Object.fromEntries(
  Object.entries(PARAM_ALIASES).map(([alias, param]) => [param, alias])
);
const KNOWN_PARAMS = /* @__PURE__ */ new Set([
  "width",
  "height",
  "component",
  "renderer",
  "emojis",
  "key",
  "alt",
  "url",
  "cacheMaxAgeSeconds",
  "cacheKey",
  "extension",
  "satori",
  "resvg",
  "sharp",
  "screenshot",
  "takumi",
  "fonts",
  "_query",
  "_hash",
  "_componentHash",
  "socialPreview",
  "props",
  "_path"
]);
const COMPLEX_PARAMS = /* @__PURE__ */ new Set(["satori", "resvg", "sharp", "screenshot", "takumi", "fonts", "_query", "_path"]);
function b64Decode(str) {
  const standard = str.replace(RE_BASE64_URL_DASH, "+").replace(RE_BASE64_URL_TILDE, "/");
  const padded = standard + "=".repeat((4 - standard.length % 4) % 4);
  if (typeof atob === "function") {
    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  }
  return Buffer.from(padded, "base64").toString("utf8");
}
const RE_NUMERIC = /^-?(?:0|[1-9]\d*)(?:\.\d+)?$/;
function tryParseNumber(value) {
  if (RE_NUMERIC.test(value)) {
    const num = Number(value);
    if (!Number.isNaN(num))
      return num;
  }
  return value;
}
function decodeSimpleValue(raw) {
  if (raw.startsWith("~~")) {
    return decodeURIComponent(raw.slice(1).replace(RE_PLUS, "%20")).replace(RE_DOUBLE_UNDERSCORE, "_");
  }
  if (raw.startsWith("~")) {
    try {
      return b64Decode(raw.slice(1));
    } catch {
      return decodeURIComponent(raw.replace(RE_PLUS, "%20")).replace(RE_DOUBLE_UNDERSCORE, "_");
    }
  }
  return decodeURIComponent(raw.replace(RE_PLUS, "%20")).replace(RE_DOUBLE_UNDERSCORE, "_");
}
function decodeOgImageParams(encoded) {
  if (!encoded || encoded === "default")
    return {};
  const options = {};
  const parts = encoded.split(RE_COMMA_PARAM_SEPARATOR);
  for (const part of parts) {
    const idx = part.search(RE_SINGLE_UNDERSCORE);
    if (idx === -1)
      continue;
    const alias = part.slice(0, idx);
    let value = part.slice(idx + 1);
    const paramName = PARAM_ALIASES[alias] || alias;
    if (COMPLEX_PARAMS.has(paramName)) {
      try {
        const json = b64Decode(value);
        options[paramName] = JSON.parse(json);
      } catch {
        options[paramName] = value;
      }
    } else if (paramName === "props") {
      try {
        const json = b64Decode(value);
        options.props = { ...options.props, ...JSON.parse(json) };
      } catch {
      }
    } else if (KNOWN_PARAMS.has(paramName)) {
      value = decodeSimpleValue(value);
      if (value === "true") {
        options[paramName] = true;
      } else if (value === "false") {
        options[paramName] = false;
      } else if (value !== "") {
        options[paramName] = tryParseNumber(value);
      }
    } else {
      value = decodeSimpleValue(value);
      options.props = options.props || {};
      if (value === "true") {
        options.props[paramName] = true;
      } else if (value === "false") {
        options.props[paramName] = false;
      } else if (value !== "") {
        options.props[paramName] = tryParseNumber(value);
      }
    }
  }
  return options;
}
function extractEncodedSegment(path, extension) {
  const match = path.match(RE_OG_ROUTE_PREFIX);
  if (match?.index != null) {
    return path.slice(match.index + match[0].length).replace(new RegExp(`\\.${extension}$`), "");
  }
  return path.split("/").pop().replace(new RegExp(`\\.${extension}$`), "");
}

const RE_KEBAB_CASE = /-([a-z])/g;
function filterIsOgImageOption(key) {
  const keys = [
    "url",
    "extension",
    "width",
    "height",
    "alt",
    "props",
    "renderer",
    "component",
    "emojis",
    "_query",
    "_hash",
    "fonts",
    "satori",
    "resvg",
    "sharp",
    "screenshot",
    "takumi",
    "cacheMaxAgeSeconds",
    "cacheKey",
    "key"
  ];
  return keys.includes(key);
}
function separateProps(options, ignoreKeys = []) {
  options = options || {};
  const _props = defu$1(options.props, Object.fromEntries(
    Object.entries({ ...options }).filter(([k]) => !filterIsOgImageOption(k) && !ignoreKeys.includes(k))
  ));
  const props = {};
  Object.entries(_props).forEach(([key, val]) => {
    props[key.replace(RE_KEBAB_CASE, (g) => String(g[1]).toUpperCase())] = val;
  });
  const result = Object.fromEntries(
    Object.entries({ ...options }).filter(([k]) => filterIsOgImageOption(k) || ignoreKeys.includes(k))
  );
  if (Object.keys(props).length > 0)
    result.props = props;
  return result;
}
const DANGEROUS_ATTRS = /* @__PURE__ */ new Set(["autofocus", "contenteditable", "tabindex", "accesskey"]);
function sanitizeProps(props) {
  const clean = {};
  for (const key of Object.keys(props)) {
    if (key.startsWith("on") || DANGEROUS_ATTRS.has(key.toLowerCase()))
      continue;
    clean[key] = props[key];
  }
  return clean;
}

const logger$1 = createConsola({
  defaults: {
    tag: "@nuxtjs/og-image"
  }
});

const logger = createConsola({
  defaults: {
    tag: "Nuxt OG Image"
  }
});

const RE_OG_IMAGE_PREFIX$1 = /^OgImage/;
const RE_RENDERER_SUFFIX = /(Satori|Browser|Takumi)$/;
const ejectedTemplates = /* @__PURE__ */ new Set();
function autoEjectCommunityTemplate(component, runtimeConfig, options) {
  if (options?.requestPath?.includes("/_og/")) {
    return;
  }
  const { srcDir, communityTemplatesDir } = runtimeConfig;
  if (!srcDir || !communityTemplatesDir)
    return;
  if (ejectedTemplates.has(component.pascalName))
    return;
  ejectedTemplates.add(component.pascalName);
  const baseName = component.pascalName.replace(RE_OG_IMAGE_PREFIX$1, "").replace(RE_RENDERER_SUFFIX, "");
  const filename = `${baseName}.${component.renderer}.vue`;
  const outputDir = join(srcDir, "components", "OgImage");
  const outputPath = join(outputDir, filename);
  if (existsSync(outputPath))
    return;
  const templatePath = join(communityTemplatesDir, filename);
  if (!existsSync(templatePath)) {
    logger.warn(`[nuxt-og-image] Community template not found: ${templatePath}`);
    return;
  }
  if (!existsSync(outputDir))
    mkdirSync(outputDir, { recursive: true });
  const content = readFileSync(templatePath, "utf-8");
  writeFileSync(outputPath, content, "utf-8");
  logger.info(`Auto-ejected community template "${baseName}" to ${outputPath}`);
}

function fetchIsland(e, component, props) {
  const hashId = hash$1([component, props]).replaceAll("_", "-");
  return e.$fetch(`/__nuxt_island/${component}_${hashId}.json`, {
    params: {
      props: JSON.stringify(props)
    }
  });
}
function createNitroRouteRuleMatcher() {
  const { nitro, app } = useRuntimeConfig();
  const _routeRulesMatcher = toRouteMatcher(
    createRouter({
      routes: Object.fromEntries(
        Object.entries(nitro?.routeRules || {}).map(([path, rules]) => [withoutTrailingSlash(path), rules])
      )
    })
  );
  return (path) => {
    return defu$1({}, ..._routeRulesMatcher.matchAll(
      withoutBase(withoutTrailingSlash(path.split("?")[0]), app.baseURL)
    ).reverse());
  };
}

const componentNames = [{"hash":"XG2DTMzZI6zUm3FvksBxMeOmedPPQ8FG69drTpUSe-4","pascalName":"OgImageBlogPostSatori","kebabName":"og-image-blog-post-satori","path":"C:/Users/ASUS/Documents/anurag12-webster.github.io/app/components/OgImage/BlogPost.satori.vue","category":"app","renderer":"satori","propNames":["title","category"]},{"hash":"Nii9MheFKbeOSkOj9qtSGSHTVGzl03zt8xU3S9I-GA4","pascalName":"BlogPostTakumi","kebabName":"blog-post-takumi","path":"C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/BlogPost.takumi.vue","category":"community","renderer":"takumi","propNames":["colorMode","title","author","date","category","avatar","backgroundImage"]},{"hash":"Kf8rphxjBGtGJd9yb27plwTGRU5JtSzvg8wWkhMIkBI","pascalName":"BrutalistSatori","kebabName":"brutalist-satori","path":"C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Brutalist.satori.vue","category":"community","renderer":"satori","propNames":["colorMode","title","subtitle","accent"]},{"hash":"rL7FpBisCop2TG42iQRJGFZZItC3-XzdqfmptP9UCnk","pascalName":"DocsTakumi","kebabName":"docs-takumi","path":"C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Docs.takumi.vue","category":"community","renderer":"takumi","propNames":["colorMode","title","description","icon","primaryColor","primaryTextColor","site"]},{"hash":"I2PtG1xFMpZxsUmEZfqSesH2AcS0S1KfSK-IQzaK7FQ","pascalName":"FrameSatori","kebabName":"frame-satori","path":"C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Frame.satori.vue","category":"community","renderer":"satori","propNames":["colorMode","title","description","bg","icon","logo","image","username","socials"]},{"hash":"mh6YW5EOmoJ0J6i6aA11GC0IxPdgToPp30qK2LIsqf4","pascalName":"NuxtSatori","kebabName":"nuxt-satori","path":"C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Nuxt.satori.vue","category":"community","renderer":"satori","propNames":["colorMode","headline"]},{"hash":"FrixLZMM-QKuCVMeLU72WdQbE-CHwAwf4DqV8S2uAd0","pascalName":"NuxtSeoSatori","kebabName":"nuxt-seo-satori","path":"C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/NuxtSeo.satori.vue","category":"community","renderer":"satori","propNames":["colorMode","title","description","isPro"]},{"hash":"cFYTVsKa3J48KJwXTJEqV9qZKEA0zgz-W-8jrdXKjZw","pascalName":"NuxtSeoTakumi","kebabName":"nuxt-seo-takumi","path":"C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/NuxtSeo.takumi.vue","category":"community","renderer":"takumi","propNames":["colorMode","title","description","isPro","width","height"]},{"hash":"5Xy09wVQErT2e9MpEtdHkz5OxL6tRgqo-9MFvemClFE","pascalName":"PergelSatori","kebabName":"pergel-satori","path":"C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Pergel.satori.vue","category":"community","renderer":"satori","propNames":["colorMode","description","headline"]},{"hash":"qzOKZNUZ-1A2I3uL-N-od-jRWyexKx7JSJZlmOg9NHc","pascalName":"ProductCardTakumi","kebabName":"product-card-takumi","path":"C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/ProductCard.takumi.vue","category":"community","renderer":"takumi","propNames":["colorMode","productName","price","description","image","brand"]},{"hash":"5IACzL4LjOUdw1WLpjABTnAfWRkWV8uXT7y8tBxUwC0","pascalName":"SaaSSatori","kebabName":"saa-s-satori","path":"C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/SaaS.satori.vue","category":"community","renderer":"satori","propNames":["colorMode","icon","theme","image"]},{"hash":"b9CqMyNj9aYI3JDauWG-T6y4xe5-M-tBSu-LOj94Z4M","pascalName":"SimpleBlogSatori","kebabName":"simple-blog-satori","path":"C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/SimpleBlog.satori.vue","category":"community","renderer":"satori","propNames":["colorMode","title"]},{"hash":"RJ3pWw5n7QlfM6kEXmvD-jmscNOvC74V-EnvrlvImyw","pascalName":"UnJsSatori","kebabName":"un-js-satori","path":"C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/UnJs.satori.vue","category":"community","renderer":"satori","propNames":["colorMode","title","emoji","contributors"]},{"hash":"wSTKUff2Xeyt-k2gaHRy9YGXwDqwRpdugm7Z8qF9zBo","pascalName":"WithEmojiSatori","kebabName":"with-emoji-satori","path":"C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/WithEmoji.satori.vue","category":"community","renderer":"satori","propNames":["colorMode","emoji","title"]}];

const RENDERER_SUFFIXES = ["satori", "browser", "takumi"];
const RE_RENDERER_SUFFIX_DOT = /\.?(satori|browser|takumi)$/i;
const RE_RENDERER_SUFFIX_PASCAL = /(Satori|Browser|Takumi)$/;
const RE_OG_IMAGE_PREFIX = /^OgImage/;
function parseInputName(name) {
  for (const suffix of RENDERER_SUFFIXES) {
    if (name.endsWith(`.${suffix}`))
      return { baseName: name.slice(0, -(suffix.length + 1)), renderer: suffix };
  }
  for (const suffix of RENDERER_SUFFIXES) {
    const pascal = suffix.charAt(0).toUpperCase() + suffix.slice(1);
    if (name.endsWith(pascal))
      return { baseName: name.slice(0, -pascal.length), renderer: suffix };
  }
  return { baseName: name, renderer: null };
}
function stripRenderer(name) {
  return name.replace(RE_RENDERER_SUFFIX_DOT, "").replace(RE_RENDERER_SUFFIX_PASCAL, "");
}
const OGIMAGE_PREFIXES = [
  { prefix: "OgImageCommunity", overlapWord: "Community" },
  { prefix: "OgImageTemplate", overlapWord: "Template" },
  { prefix: "OgImage", overlapWord: "Image" }
];
function getComponentBaseNames(component) {
  const names = [];
  const stripped = stripRenderer(component.pascalName);
  for (const { prefix, overlapWord } of OGIMAGE_PREFIXES) {
    if (!stripped.startsWith(prefix))
      continue;
    const withoutPrefix = stripped.slice(prefix.length);
    if (withoutPrefix) {
      names.push(withoutPrefix);
      if (withoutPrefix !== overlapWord)
        names.push(overlapWord + withoutPrefix);
    } else {
      names.push(overlapWord);
    }
    break;
  }
  if (names.length === 0)
    names.push(stripped);
  return names;
}
function resolveComponent(name) {
  const exactMatch = componentNames.find((c) => c.pascalName === name);
  if (exactMatch)
    return { component: exactMatch, renderer: exactMatch.renderer };
  const { baseName, renderer } = parseInputName(name);
  const strippedBaseName = baseName.replace(RE_OG_IMAGE_PREFIX, "");
  const matches = componentNames.filter((c) => {
    const baseNames = getComponentBaseNames(c);
    return baseNames.some(
      (cBase) => cBase === baseName || cBase === strippedBaseName || cBase === `OgImage${baseName}` || cBase === `OgImage${strippedBaseName}`
    );
  });
  const filtered = renderer ? matches.filter((c) => c.renderer === renderer) : matches;
  if (filtered.length === 0) {
    if (renderer && matches.length > 0) {
      const available = matches.map((c) => `${getComponentBaseNames(c)[0]}.${c.renderer}`).join(", ");
      throw createError({
        statusCode: 500,
        message: `[Nuxt OG Image] Component "${name}" not found. Available variants: ${available}`
      });
    }
    throw createError({
      statusCode: 500,
      message: `[Nuxt OG Image] Component "${name}" not found. Create a component in components/OgImage/ with a renderer suffix (e.g., ${baseName}.satori.vue)`
    });
  }
  const appComponents = filtered.filter((c) => c.category !== "community");
  if (appComponents.length > 0) {
    const resolved2 = appComponents[0];
    return { component: resolved2, renderer: resolved2.renderer };
  }
  const resolved = filtered[0];
  return { component: resolved, renderer: resolved.renderer };
}
function normaliseOptions(_options) {
  const options = { ..._options };
  if (options.component === "PageScreenshot") {
    return {
      options,
      renderer: options.renderer || "browser",
      component: void 0
    };
  }
  if (!componentNames?.length) {
    throw createError({
      statusCode: 500,
      message: `[Nuxt OG Image] No OG Image components found. Create a component in components/OgImage/ with a renderer suffix (e.g., Default.satori.vue)`
    });
  }
  let resolved;
  let renderer;
  if (options.component) {
    const result = resolveComponent(options.component);
    resolved = result.component;
    renderer = result.renderer;
  } else {
    resolved = componentNames.find((c) => c.category !== "community") || componentNames[0];
    renderer = resolved.renderer;
  }
  options.component = resolved.pascalName;
  if (resolved.category === "community") ;
  return {
    options,
    renderer,
    component: resolved
  };
}

function useOgImageRuntimeConfig(e) {
  const c = useRuntimeConfig(e);
  return {
    defaults: {},
    ...c["nuxt-og-image"],
    app: {
      baseURL: c.app.baseURL
    }
  };
}

const satoriRendererInstance = { instance: void 0 };
const browserRendererInstance = { instance: void 0 };
const takumiRendererInstance = { instance: void 0 };
async function getSatoriRenderer() {
  satoriRendererInstance.instance = satoriRendererInstance.instance || await Promise.resolve().then(function () { return renderer$2; }).then((m) => m.default);
  return satoriRendererInstance.instance;
}
async function getBrowserRenderer() {
  browserRendererInstance.instance = browserRendererInstance.instance || await Promise.resolve().then(function () { return empty; }).then((m) => m.default);
  return browserRendererInstance.instance;
}
async function getTakumiRenderer() {
  takumiRendererInstance.instance = takumiRendererInstance.instance || await Promise.resolve().then(function () { return renderer$1; }).then((m) => m.default);
  return takumiRendererInstance.instance;
}

const RE_HASH_MODE = /^o_([a-z0-9]+)$/i;
const RE_SIGNATURE_SUFFIX = /,s_([^,]+)$/;
function resolvePathCacheKey(e, path, resolvedOptions) {
  const siteConfig = getSiteConfig(e, {
    resolveRefs: true
  });
  const basePath = withoutTrailingSlash(withoutLeadingSlash(normalizeKey(path)));
  const hashParts = [
    basePath,
    siteConfig.url
  ];
  if (resolvedOptions)
    hashParts.push(hash$1(resolvedOptions));
  return [
    !basePath || basePath === "/" ? "index" : basePath,
    hash$1(hashParts)
  ].join(":");
}
async function resolveContext(e) {
  const runtimeConfig = useOgImageRuntimeConfig();
  const resolvePathWithBase = createSitePathResolver(e, {
    absolute: false,
    withBase: true
  });
  const path = resolvePathWithBase(parseURL(e.path).pathname);
  let extension = path.split(".").pop();
  if (!extension || !path.includes(".") || extension.includes("/") || !["png", "jpeg", "jpg", "webp", "svg", "html", "json"].includes(extension)) {
    extension = "png";
  }
  const encodedSegment = extractEncodedSegment(path, extension);
  const secret = runtimeConfig.security?.secret;
  let paramsSegment = encodedSegment;
  if (secret && RE_SIGNATURE_SUFFIX.test(encodedSegment)) {
    paramsSegment = encodedSegment.replace(RE_SIGNATURE_SUFFIX, "");
  }
  const hashMatch = paramsSegment.match(RE_HASH_MODE);
  let urlOptions = {};
  if (hashMatch) {
    const optionsHash = hashMatch[1];
    {
      return createError({
        statusCode: 400,
        statusMessage: `[Nuxt OG Image] Hash-based URLs (o_${optionsHash}) are only supported during prerendering. Use encoded params or query params for runtime.`
      });
    }
  } else {
    urlOptions = decodeOgImageParams(paramsSegment);
  }
  const maxQueryParamSize = runtimeConfig.security?.maxQueryParamSize;
  if (maxQueryParamSize && true) {
    const queryString = parseURL(e.path).search || "";
    if (queryString.length > maxQueryParamSize) {
      return createError({
        statusCode: 400,
        statusMessage: `[Nuxt OG Image] Query string exceeds maximum allowed length of ${maxQueryParamSize} characters.`
      });
    }
  }
  let queryParams = {};
  {
    const query = getQuery$1(e);
    for (const k in query) {
      const v = String(query[k]);
      if (!v)
        continue;
      if (v.startsWith("{")) {
        try {
          queryParams[k] = JSON.parse(v);
        } catch {
        }
      } else {
        queryParams[k] = v;
      }
    }
    delete queryParams.html;
    queryParams = separateProps(queryParams);
  }
  const basePath = withoutTrailingSlash(urlOptions._path || "/");
  const componentHash = urlOptions._componentHash || "";
  delete urlOptions._path;
  delete urlOptions._hash;
  delete urlOptions._componentHash;
  if (runtimeConfig.security?.strict) {
    delete urlOptions.html;
  }
  const basePathWithQuery = queryParams._query && typeof queryParams._query === "object" ? withQuery(basePath, queryParams._query) : basePath;
  const isDebugJsonPayload = extension === "json" && (true);
  const routeRuleMatcher = createNitroRouteRuleMatcher();
  const routeRules = routeRuleMatcher(basePath);
  const ogImageRouteRules = separateProps(routeRules.ogImage);
  const options = defu$1(queryParams, urlOptions, ogImageRouteRules, runtimeConfig.defaults);
  const maxDim = runtimeConfig.security?.maxDimension || 2048;
  if (options.width != null) {
    const w = Number(options.width);
    options.width = Number.isFinite(w) ? Math.min(Math.max(1, w), maxDim) : void 0;
  }
  if (options.height != null) {
    const h = Number(options.height);
    options.height = Number.isFinite(h) ? Math.min(Math.max(1, h), maxDim) : void 0;
  }
  if (options.props && typeof options.props === "object")
    options.props = sanitizeProps(options.props);
  if (!options) {
    return createError({
      statusCode: 404,
      statusMessage: "[Nuxt OG Image] OG Image not found."
    });
  }
  const normalised = normaliseOptions(options);
  if (normalised.component && normalised.options.props && typeof normalised.options.props === "object") {
    const builtinProps = /* @__PURE__ */ new Set(["colorMode", "timestamp"]);
    const allowedProps = normalised.component.propNames || [];
    const allowedSet = new Set(allowedProps);
    const raw = normalised.options.props;
    const filtered = {};
    for (const key2 of Object.keys(raw)) {
      if (allowedSet.has(key2) || builtinProps.has(key2))
        filtered[key2] = raw[key2];
      else logger$1.warn(`[Nuxt OG Image] Prop "${key2}" is not declared by component "${normalised.component.pascalName}". Declared props: ${allowedProps.join(", ")}`);
    }
    normalised.options.props = filtered;
  }
  if (normalised.component?.category === "community")
    autoEjectCommunityTemplate(normalised.component, runtimeConfig, { requestPath: e.path });
  const rendererType = normalised.renderer;
  const baseCacheKey = normalised.options.cacheKey || (hashMatch ? `hash:${hashMatch[1]}` : resolvePathCacheKey(e, basePathWithQuery, normalised.options));
  const key = componentHash ? `${baseCacheKey}:${componentHash}` : baseCacheKey;
  let renderer;
  switch (rendererType) {
    case "satori":
      renderer = await getSatoriRenderer();
      break;
    case "browser":
      renderer = await getBrowserRenderer();
      break;
    case "takumi":
      renderer = await getTakumiRenderer();
      break;
  }
  if (!renderer || renderer.__mock__) {
    throw createError({
      statusCode: 400,
      statusMessage: `[Nuxt OG Image] Renderer "${rendererType}" is not available. Component "${normalised.component?.pascalName}" requires the ${rendererType} renderer but it's not bundled for this preset.`
    });
  }
  const ctx = {
    e,
    key,
    renderer,
    isDevToolsContextRequest: isDebugJsonPayload,
    runtimeConfig,
    publicStoragePath: runtimeConfig.publicStoragePath,
    extension,
    basePath,
    options: normalised.options,
    _nitro: useNitroApp()
  };
  await ctx._nitro.hooks.callHook("nuxt-og-image:context", ctx);
  return ctx;
}

const _ppwlUzQ_HgE9SI9TXrFJFumKBSoC_pb8vW7jyIkAros = defineNitroPlugin(async (nitro) => {
  return;
});

const rootDir$1 = "C:/Users/ASUS/Documents/anurag12-webster.github.io";

const appHead = {"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"description","content":"I work on ASR, TTS, NLP, and Machine Learning."}],"link":[{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=DM+Mono:wght@300;400&display=swap"},{"rel":"stylesheet","href":"https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"}],"style":[],"script":[],"noscript":[],"title":"Anurag Kanade"};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appSpaLoaderTag = "div";

const appSpaLoaderAttrs = {"id":"__nuxt-loader"};

const appId = "nuxt-app";

const devReducers = {
	VNode: (data) => isVNode(data) ? {
		type: data.type,
		props: data.props
	} : undefined,
	URL: (data) => data instanceof URL ? data.toString() : undefined
};
const asyncContext = getContext("nuxt-dev", {
	asyncContext: true,
	AsyncLocalStorage
});
const _BELhN0S1GsNZzOdinCbC6eNcYKNXEQ1F7ptkjlce2o = (nitroApp) => {
	const handler = nitroApp.h3App.handler;
	nitroApp.h3App.handler = (event) => {
		return asyncContext.callAsync({
			logs: [],
			event
		}, () => handler(event));
	};
	onConsoleLog((_log) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		const rawStack = captureRawStackTrace();
		if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
			return;
		}
		const trace = [];
		let filename = "";
		for (const entry of parseRawStackTrace(rawStack)) {
			if (entry.source === globalThis._importMeta_.url) {
				continue;
			}
			if (EXCLUDE_TRACE_RE.test(entry.source)) {
				continue;
			}
			filename ||= entry.source.replace(withTrailingSlash(rootDir$1), "");
			trace.push({
				...entry,
				source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
			});
		}
		const log = {
			..._log,
			filename,
			stack: trace
		};
		// retain log to be include in the next render
		ctx.logs.push(log);
	});
	nitroApp.hooks.hook("afterResponse", () => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		return nitroApp.hooks.callHook("dev:ssr-logs", {
			logs: ctx.logs,
			path: ctx.event.path
		});
	});
	// Pass any logs to the client
	nitroApp.hooks.hook("render:html", (htmlContext) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		try {
			const reducers = Object.assign(Object.create(null), devReducers, ctx.event.context["~payloadReducers"]);
			htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
		} catch (e) {
			const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
			console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/4.x/api/composables/use-nuxt-app#payload.`);
		}
	});
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
	consola$1.addReporter({ log(logObj) {
		callback(logObj);
	} });
	consola$1.wrapConsole();
}

const plugins = [
  _jhSnSAZLMGS7l4aTAUwDrDACw05wWtrXgjRqNwydzxM,
_ppwlUzQ_HgE9SI9TXrFJFumKBSoC_pb8vW7jyIkAros,
_BELhN0S1GsNZzOdinCbC6eNcYKNXEQ1F7ptkjlce2o,
_wH6JrtIxmaSoA8lCPWFnE9z4lQeXW6H5z3l5aymEQw
];

const assets = {};

function readAsset (id) {
  const serverDir = dirname$1(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve$4(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/_og-static-fonts/":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _5tnCmT = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({ statusCode: 404 });
    }
    return;
  }
  if (asset.encoding !== void 0) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const VueResolver = (_, value) => {
  return isRef(value) ? toValue(value) : value;
};

const headSymbol = "usehead";
// @__NO_SIDE_EFFECTS__
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

// @__NO_SIDE_EFFECTS__
function resolveUnrefHeadInput(input) {
  return walkResolver(input, VueResolver);
}

const createHeadCore = createUnhead;

const NUXT_PAYLOAD_INLINE = false;
const NUXT_RUNTIME_PAYLOAD_EXTRACTION = false;

// @__NO_SIDE_EFFECTS__
function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

const unheadOptions = {
  disableDefaults: true,
};

function createSSRContext(event) {
	const ssrContext = {
		url: event.path,
		event,
		runtimeConfig: useRuntimeConfig(event),
		noSSR: event.context.nuxt?.noSSR || (false),
		head: createHead(unheadOptions),
		error: false,
		nuxt: undefined,
		payload: {},
		["~payloadReducers"]: Object.create(null),
		modules: new Set()
	};
	return ssrContext;
}
function setSSRError(ssrContext, error) {
	ssrContext.error = true;
	ssrContext.payload = { error };
	ssrContext.url = error.url;
}

function buildAssetsDir() {
	// TODO: support passing event to `useRuntimeConfig`
	return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
	return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
	// TODO: support passing event to `useRuntimeConfig`
	const app = useRuntimeConfig().app;
	const publicBase = app.cdnURL || app.baseURL;
	return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
// @ts-expect-error file will be produced after app build
const getServerEntry = () => import('file://C:/Users/ASUS/Documents/anurag12-webster.github.io/.nuxt//dist/server/server.mjs').then((r) => r.default || r);
// @ts-expect-error file will be produced after app build
const getClientManifest = () => import('file://C:/Users/ASUS/Documents/anurag12-webster.github.io/.nuxt//dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
// -- SSR Renderer --
const getSSRRenderer = lazyCachedFunction(async () => {
	// Load server bundle
	const createSSRApp = await getServerEntry();
	if (!createSSRApp) {
		throw new Error("Server bundle is not available");
	}
	// Load precomputed dependencies
	const precomputed = undefined ;
	// Create renderer
	const renderer = createRenderer(createSSRApp, {
		precomputed,
		manifest: await getClientManifest() ,
		renderToString: renderToString$1,
		buildAssetsURL
	});
	async function renderToString$1(input, context) {
		const html = await renderToString(input, context);
		// In development with vite-node, the manifest is on-demand and will be available after rendering
		// eslint-disable-next-line no-restricted-globals
		if (process.env.NUXT_VITE_NODE_OPTIONS) {
			renderer.rendererContext.updateManifest(await getClientManifest());
		}
		return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
	}
	return renderer;
});
// -- SPA Renderer --
const getSPARenderer = lazyCachedFunction(async () => {
	const precomputed = undefined ;
	// @ts-expect-error virtual file
	const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => {
		{
			const APP_SPA_LOADER_OPEN_TAG = `<${appSpaLoaderTag}${propsToString(appSpaLoaderAttrs)}>`;
			const APP_SPA_LOADER_CLOSE_TAG = `</${appSpaLoaderTag}>`;
			const appTemplate = APP_ROOT_OPEN_TAG + APP_ROOT_CLOSE_TAG;
			const loaderTemplate = r ? APP_SPA_LOADER_OPEN_TAG + r + APP_SPA_LOADER_CLOSE_TAG : "";
			return appTemplate + loaderTemplate;
		}
	});
	// Create SPA renderer and cache the result for all requests
	const renderer = createRenderer(() => () => {}, {
		precomputed,
		manifest: await getClientManifest() ,
		renderToString: () => spaTemplate,
		buildAssetsURL
	});
	const result = await renderer.renderToString({});
	const renderToString = (ssrContext) => {
		const config = useRuntimeConfig(ssrContext.event);
		ssrContext.modules ||= new Set();
		ssrContext.payload.serverRendered = false;
		ssrContext.config = {
			public: config.public,
			app: config.app
		};
		return Promise.resolve(result);
	};
	return {
		rendererContext: renderer.rendererContext,
		renderToString
	};
});
function lazyCachedFunction(fn) {
	let res = null;
	return () => {
		if (res === null) {
			res = fn().catch((err) => {
				res = null;
				throw err;
			});
		}
		return res;
	};
}
function getRenderer(ssrContext) {
	return ssrContext.noSSR ? getSPARenderer() : getSSRRenderer();
}
// @ts-expect-error file will be produced after app build
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));

async function renderInlineStyles(usedModules) {
	const styleMap = await getSSRStyles();
	const inlinedStyles = new Set();
	for (const mod of usedModules) {
		if (mod in styleMap && styleMap[mod]) {
			for (const style of await styleMap[mod]()) {
				inlinedStyles.add(style);
			}
		}
	}
	return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}

// @ts-expect-error virtual file
const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
/**
* remove the root node from the html body
*/
function getServerComponentHTML(body) {
	const match = body.match(ROOT_NODE_REGEX);
	return match?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
		return undefined;
	}
	const response = {};
	for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) {
		response[name] = {
			...slot,
			fallback: ssrContext.teleports?.[`island-fallback=${name}`]
		};
	}
	return response;
}
function getClientIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
		return undefined;
	}
	const response = {};
	for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
		// remove teleport anchor to avoid hydration issues
		const html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
		response[clientUid] = {
			...component,
			html,
			slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
		};
	}
	return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
	const entries = Object.entries(teleports);
	const slots = {};
	for (const [key, value] of entries) {
		const match = key.match(SSR_CLIENT_SLOT_MARKER);
		if (match) {
			const [, id, slot] = match;
			if (!slot || clientUid !== id) {
				continue;
			}
			slots[slot] = value;
		}
	}
	return slots;
}
function replaceIslandTeleports(ssrContext, html) {
	const { teleports, islandContext } = ssrContext;
	if (islandContext || !teleports) {
		return html;
	}
	for (const key in teleports) {
		const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
		if (matchClientComp) {
			const [, uid, clientId] = matchClientComp;
			if (!uid || !clientId) {
				continue;
			}
			html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
				return full + teleports[key];
			});
			continue;
		}
		const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
		if (matchSlot) {
			const [, uid, slot] = matchSlot;
			if (!uid || !slot) {
				continue;
			}
			html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
				return full + teleports[key];
			});
		}
	}
	return html;
}

const ISLAND_SUFFIX_RE = /\.json(?:\?.*)?$/;
const handler$1 = defineEventHandler(async (event) => {
	const nitroApp = useNitroApp();
	setResponseHeaders(event, {
		"content-type": "application/json;charset=utf-8",
		"x-powered-by": "Nuxt"
	});
	const islandContext = await getIslandContext(event);
	const ssrContext = {
		...createSSRContext(event),
		islandContext,
		noSSR: false,
		url: islandContext.url
	};
	// Render app
	const renderer = await getSSRRenderer();
	const renderResult = await renderer.renderToString(ssrContext).catch(async (err) => {
		await ssrContext.nuxt?.hooks.callHook("app:error", err);
		throw err;
	});
	// Handle errors
	if (ssrContext.payload?.error) {
		throw ssrContext.payload.error;
	}
	const inlinedStyles = await renderInlineStyles(ssrContext.modules ?? []);
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult
	});
	if (inlinedStyles.length) {
		ssrContext.head.push({ style: inlinedStyles });
	}
	{
		const { styles } = getRequestDependencies(ssrContext, renderer.rendererContext);
		const link = [];
		for (const resource of Object.values(styles)) {
			// Do not add links to resources that are inlined (vite v5+)
			if ("inline" in getQuery(resource.file)) {
				continue;
			}
			// Add CSS links in <head> for CSS files
			// - in dev mode when rendering an island and the file has scoped styles and is not a page
			if (resource.file.includes("scoped") && !resource.file.includes("pages/")) {
				link.push({
					rel: "stylesheet",
					href: renderer.rendererContext.buildAssetsURL(resource.file),
					crossorigin: ""
				});
			}
		}
		if (link.length) {
			ssrContext.head.push({ link }, { mode: "server" });
		}
	}
	const islandHead = {};
	for (const entry of ssrContext.head.entries.values()) {
		// eslint-disable-next-line @typescript-eslint/no-deprecated
		for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
			const currentValue = islandHead[key];
			if (Array.isArray(currentValue)) {
				currentValue.push(...value);
			} else {
				islandHead[key] = value;
			}
		}
	}
	const islandResponse = {
		id: islandContext.id,
		head: islandHead,
		html: getServerComponentHTML(renderResult.html),
		components: getClientIslandResponse(ssrContext),
		slots: getSlotIslandResponse(ssrContext)
	};
	await nitroApp.hooks.callHook("render:island", islandResponse, {
		event,
		islandContext
	});
	return islandResponse;
});
const ISLAND_PATH_PREFIX = "/__nuxt_island/";
const VALID_COMPONENT_NAME_RE = /^[a-z][\w.-]*$/i;
async function getIslandContext(event) {
	let url = event.path || "";
	if (!url.startsWith(ISLAND_PATH_PREFIX)) {
		throw createError({
			statusCode: 400,
			statusMessage: "Invalid island request path"
		});
	}
	const componentParts = url.substring(ISLAND_PATH_PREFIX.length).replace(ISLAND_SUFFIX_RE, "").split("_");
	const hashId = componentParts.length > 1 ? componentParts.pop() : undefined;
	const componentName = componentParts.join("_");
	if (!componentName || !VALID_COMPONENT_NAME_RE.test(componentName)) {
		throw createError({
			statusCode: 400,
			statusMessage: "Invalid island component name"
		});
	}
	const context = event.method === "GET" ? getQuery$1(event) : await readBody(event);
	// Only extract known context fields to prevent arbitrary data injection
	return {
		url: typeof context?.url === "string" ? context.url : "/",
		id: hashId,
		name: componentName,
		props: destr$1(context.props) || {},
		slots: {},
		components: {}
	};
}

const PORT_SUFFIX_RE = /:\d+$/;
const _J9na6O = eventHandler(async (e) => {
  if (e.context._initedSiteConfig)
    return;
  const runtimeConfig = useRuntimeConfig(e);
  const config = runtimeConfig["nuxt-site-config"];
  const nitroApp = useNitroApp();
  const siteConfig = e.context.siteConfig || createSiteConfigStack({
    debug: config.debug
  });
  const nitroOrigin = getNitroOrigin(e);
  e.context.siteConfigNitroOrigin = nitroOrigin;
  {
    siteConfig.push({
      _context: "nitro:init",
      _priority: SiteConfigPriority.nitro,
      url: nitroOrigin
    });
  }
  siteConfig.push({
    _context: "runtimeEnv",
    _priority: SiteConfigPriority.runtime,
    ...runtimeConfig.site || {},
    ...runtimeConfig.public.site || {},
    ...envSiteConfig(globalThis._importMeta_.env || {})
    // just in-case, shouldn't be needed
  });
  const buildStack = config.stack || [];
  buildStack.forEach((c) => siteConfig.push(c));
  if (e.context._nitro.routeRules.site) {
    siteConfig.push({
      _context: "route-rules",
      ...e.context._nitro.routeRules.site
    });
  }
  if (config.multiTenancy) {
    const host = parseURL(nitroOrigin).host?.replace(PORT_SUFFIX_RE, "") || "";
    const tenant = config.multiTenancy?.find((t) => t.hosts.includes(host));
    if (tenant) {
      siteConfig.push({
        _context: `multi-tenancy:${host}`,
        _priority: SiteConfigPriority.runtime,
        ...tenant.config
      });
    }
  }
  const ctx = { siteConfig, event: e };
  await nitroApp.hooks.callHook("site-config:init", ctx);
  e.context.siteConfig = ctx.siteConfig;
  e.context._initedSiteConfig = true;
});

const _FHZlRW = eventHandler(async (e) => {
  const siteConfig = getSiteConfig(e);
  const nitroOrigin = getNitroOrigin(e);
  const runtimeConfig = useRuntimeConfig(e);
  const stack = e.context.siteConfig.stack;
  setHeader(e, "Content-Type", "application/json");
  return {
    config: siteConfig,
    stack,
    nitroOrigin,
    version: runtimeConfig["nuxt-site-config"].version
  };
});

const _iAwXBs = eventHandler(async (event) => {
  const collection = getRouterParam(event, "collection") || event.path?.split("/")?.[2] || "";
  setHeader(event, "Content-Type", "text/plain");
  const data = await useStorage().getItem(`build:content:database.compressed.mjs`) || "";
  if (data) {
    const lineStart = `export const ${collection} = "`;
    const content = String(data).split("\n").find((line) => line.startsWith(lineStart));
    if (content) {
      return content.substring(lineStart.length, content.length - 1);
    }
  }
  return await import('file://C:/Users/ASUS/Documents/anurag12-webster.github.io/.nuxt/content/database.compressed.mjs').then((m) => m[collection]);
});

async function decompressSQLDump(base64Str, compressionType = "gzip") {
  let binaryData;
  if (typeof Buffer !== "undefined") {
    const buffer = Buffer.from(base64Str, "base64");
    binaryData = Uint8Array.from(buffer);
  } else if (typeof atob !== "undefined") {
    binaryData = Uint8Array.from(atob(base64Str), (c) => c.charCodeAt(0));
  } else {
    throw new TypeError("No base64 decoding method available");
  }
  const response = new Response(new Blob([binaryData]));
  const decompressedStream = response.body?.pipeThrough(new DecompressionStream(compressionType));
  const text = await new Response(decompressedStream).text();
  return JSON.parse(text);
}

const checksums = {
  "blog": "v3.5.0--bPmpx7WOMgCWvp93ekxxSMl8JGr-kPUsjUCGIPcWiko"
};
const checksumsStructure = {
  "blog": "GYxHGSqzDdxU2rd3mrAmRtEpzXGa6mU4JOZkUgkrPG4"
};
const tables = {
  "blog": "_content_blog",
  "info": "_content_info"
};
const contentManifest = {
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
};

async function fetchContent(event, collection, path, options) {
  const headers = event ? getRequestHeaders(event) : {};
  headers["accept-encoding"] = void 0;
  const url = `/__nuxt_content/${collection}/${path}`;
  const fetchOptions = {
    ...options,
    headers: {
      ...headers,
      ...options.headers
    },
    query: { v: checksums[String(collection)], t: Date.now()  }
  };
  return event ? await event.$fetch(url, fetchOptions) : await $fetch(url, fetchOptions);
}
async function fetchDatabase(event, collection) {
  return fetchContent(event, collection, "sql_dump.txt", {
    responseType: "text",
    headers: {
      "content-type": "text/plain"
    }
  });
}

function refineContentFields(sql, doc) {
  const fields = findCollectionFields(sql);
  const item = { ...doc };
  for (const key in item) {
    if (fields[key] === "json" && item[key] && item[key] !== "undefined") {
      item[key] = JSON.parse(item[key]);
    }
    if (fields[key] === "boolean" && item[key] !== "undefined") {
      item[key] = Boolean(item[key]);
    }
  }
  for (const key in item) {
    if (item[key] === "NULL") {
      item[key] = void 0;
    }
  }
  return item;
}
function findCollectionFields(sql) {
  const table = sql.match(/FROM\s+(\w+)/);
  if (!table) {
    return {};
  }
  const info = contentManifest[getCollectionName(table[1])];
  return info?.fields || {};
}
function getCollectionName(table) {
  return table.replace(/^_content_/, "");
}

let db;
function loadDatabaseAdapter(config) {
  const { database, localDatabase } = config;
  if (!db) {
    {
      db = localAdapter(refineDatabaseConfig(localDatabase));
    }
  }
  return {
    all: async (sql, params = []) => {
      return db.prepare(sql).all(...params).then((result) => (result || []).map((item) => refineContentFields(sql, item)));
    },
    first: async (sql, params = []) => {
      return db.prepare(sql).get(...params).then((item) => item ? refineContentFields(sql, item) : item);
    },
    exec: async (sql, params = []) => {
      return db.prepare(sql).run(...params);
    }
  };
}
const checkDatabaseIntegrity = /* @__PURE__ */ new Map();
const integrityCheckPromise = /* @__PURE__ */ new Map();
async function checkAndImportDatabaseIntegrity(event, collection, config) {
  if (checkDatabaseIntegrity.get(collection) !== false) {
    checkDatabaseIntegrity.set(collection, false);
    if (!integrityCheckPromise.has(collection)) {
      const _integrityCheck = _checkAndImportDatabaseIntegrity(event, collection, checksums[collection], checksumsStructure[collection], config).then((isValid) => {
        checkDatabaseIntegrity.set(collection, !isValid);
      }).catch((error) => {
        console.error("Database integrity check failed", error);
        checkDatabaseIntegrity.set(collection, true);
        integrityCheckPromise.delete(collection);
      });
      integrityCheckPromise.set(collection, _integrityCheck);
    }
  }
  if (integrityCheckPromise.has(collection)) {
    await integrityCheckPromise.get(collection);
  }
}
async function _checkAndImportDatabaseIntegrity(event, collection, integrityVersion, structureIntegrityVersion, config) {
  const db2 = loadDatabaseAdapter(config);
  const before = await db2.first(`SELECT * FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]).catch(() => null);
  if (before?.version && !String(before.version)?.startsWith(`${config.databaseVersion}--`)) {
    await db2.exec(`DROP TABLE IF EXISTS ${tables.info}`);
    before.version = "";
  }
  const unchangedStructure = before?.structureVersion === structureIntegrityVersion;
  if (before?.version) {
    if (before.version === integrityVersion) {
      if (before.ready) {
        return true;
      }
      await waitUntilDatabaseIsReady(db2, collection);
      return true;
    }
    await db2.exec(`DELETE FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]);
    if (!unchangedStructure) {
      await db2.exec(`DROP TABLE IF EXISTS ${tables[collection]}`);
    }
  }
  const dump = await loadDatabaseDump(event, collection).then(decompressSQLDump);
  const dumpLinesHash = dump.map((row) => row.split(" -- ").pop());
  let hashesInDb = /* @__PURE__ */ new Set();
  if (unchangedStructure) {
    const hashListFromTheDump = new Set(dumpLinesHash);
    const hashesInDbRecords = await db2.all(`SELECT __hash__ FROM ${tables[collection]}`).catch(() => []);
    hashesInDb = new Set(hashesInDbRecords.map((r) => r.__hash__));
    const hashesToDelete = hashesInDb.difference(hashListFromTheDump);
    if (hashesToDelete.size) {
      await db2.exec(`DELETE FROM ${tables[collection]} WHERE __hash__ IN (${Array(hashesToDelete.size).fill("?").join(",")})`, Array.from(hashesToDelete));
    }
  }
  await dump.reduce(async (prev, sql, index) => {
    await prev;
    const hash = dumpLinesHash[index];
    const statement = sql.substring(0, sql.length - hash.length - 4);
    if (unchangedStructure) {
      if (hash === "structure") {
        return Promise.resolve();
      }
      if (hashesInDb.has(hash)) {
        return Promise.resolve();
      }
    }
    await db2.exec(statement).catch((err) => {
      const message = err.message || "Unknown error";
      console.error(`Failed to execute SQL ${sql}: ${message}`);
    });
  }, Promise.resolve());
  const after = await db2.first(`SELECT version FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]).catch(() => ({ version: "" }));
  return after?.version === integrityVersion;
}
const REQUEST_TIMEOUT = 90;
async function waitUntilDatabaseIsReady(db2, collection) {
  let iterationCount = 0;
  let interval;
  await new Promise((resolve, reject) => {
    interval = setInterval(async () => {
      const row = await db2.first(`SELECT ready FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]).catch(() => ({ ready: true }));
      if (row?.ready) {
        clearInterval(interval);
        resolve(0);
      }
      if (iterationCount++ > REQUEST_TIMEOUT) {
        clearInterval(interval);
        reject(new Error("Waiting for another database initialization timed out"));
      }
    }, 1e3);
  }).catch((e) => {
    throw e;
  }).finally(() => {
    if (interval) {
      clearInterval(interval);
    }
  });
}
async function loadDatabaseDump(event, collection) {
  return await fetchDatabase(event, collection).catch((e) => {
    console.error("Failed to fetch compressed dump", e);
    return "";
  });
}
function refineDatabaseConfig(config) {
  if (config.type === "d1") {
    return { ...config, bindingName: config.bindingName || config.binding };
  }
  if (config.type === "sqlite") {
    const _config = { ...config };
    if (config.filename === ":memory:") {
      return { name: ":memory:" };
    }
    if ("filename" in config) {
      const filename = isAbsolute(config?.filename || "") || config?.filename === ":memory:" ? config?.filename : new URL(config.filename, globalThis._importMeta_.url).pathname;
      _config.path = process.platform === "win32" && filename.startsWith("/") ? filename.slice(1) : filename;
    }
    return _config;
  }
  if (config.type === "pglite") {
    return {
      dataDir: config.dataDir,
      // Pass through any other PGlite-specific options
      ...config
    };
  }
  return config;
}

const SQL_COMMANDS = /SELECT|INSERT|UPDATE|DELETE|DROP|ALTER|\$/i;
const SQL_COUNT_REGEX = /COUNT\((DISTINCT )?([a-z_]\w+|\*)\)/i;
const SQL_SELECT_REGEX = /^SELECT (.*) FROM (\w+)( WHERE .*)? ORDER BY (["\w,\s]+) (ASC|DESC)( LIMIT \d+)?( OFFSET \d+)?$/;
function assertSafeQuery(sql, collection) {
  if (!sql) {
    throw new Error("Invalid query: Query cannot be empty");
  }
  const cleanedupQuery = cleanupQuery(sql);
  if (cleanedupQuery !== sql) {
    throw new Error("Invalid query: SQL comments are not allowed");
  }
  const match = sql.match(SQL_SELECT_REGEX);
  if (!match) {
    throw new Error("Invalid query: Query must be a valid SELECT statement with proper syntax");
  }
  const [_, select, from, where, orderBy, order, limit, offset] = match;
  const columns = select?.trim().split(", ") || [];
  if (columns.length === 1) {
    if (columns[0] !== "*" && !columns[0]?.match(SQL_COUNT_REGEX) && !columns[0]?.match(/^"[a-z_]\w+"$/i)) {
      throw new Error(`Invalid query: Column '${columns[0]}' has invalid format. Expected *, COUNT(), or a quoted column name`);
    }
  } else if (!columns.every((column) => column.match(/^"[a-z_]\w+"$/i))) {
    throw new Error("Invalid query: Multiple columns must be properly quoted and alphanumeric");
  }
  if (from !== `_content_${collection}`) {
    const collection2 = String(from || "").replace(/^_content_/, "");
    throw new Error(`Invalid query: Collection '${collection2}' does not exist`);
  }
  if (where) {
    if (!where.startsWith(" WHERE (") || !where.endsWith(")")) {
      throw new Error("Invalid query: WHERE clause must be properly enclosed in parentheses");
    }
    const noString = cleanupQuery(where, { removeString: true });
    if (noString.match(SQL_COMMANDS)) {
      throw new Error("Invalid query: WHERE clause contains unsafe SQL commands");
    }
  }
  const _order = (orderBy + " " + order).split(", ");
  if (!_order.every((column) => column.match(/^("[a-zA-Z_]+"|[a-zA-Z_]+) (ASC|DESC)$/))) {
    throw new Error("Invalid query: ORDER BY clause must contain valid column names followed by ASC or DESC");
  }
  if (limit !== void 0 && !limit.match(/^ LIMIT \d+$/)) {
    throw new Error("Invalid query: LIMIT clause must be a positive number");
  }
  if (offset !== void 0 && !offset.match(/^ OFFSET \d+$/)) {
    throw new Error("Invalid query: OFFSET clause must be a positive number");
  }
  return true;
}
function cleanupQuery(query, options = { removeString: false }) {
  let inString = false;
  let stringFence = "";
  let result = "";
  for (let i = 0; i < query.length; i++) {
    const char = query[i];
    const prevChar = query[i - 1];
    const nextChar = query[i + 1];
    if (char === "'" || char === '"') {
      if (!options?.removeString) {
        result += char;
        continue;
      }
      if (inString) {
        if (char !== stringFence || nextChar === stringFence || prevChar === stringFence) {
          continue;
        }
        inString = false;
        stringFence = "";
        continue;
      } else {
        inString = true;
        stringFence = char;
        continue;
      }
    }
    if (!inString) {
      if (char === "-" && nextChar === "-") {
        return result;
      }
      if (char === "/" && nextChar === "*") {
        i += 2;
        while (i < query.length && !(query[i] === "*" && query[i + 1] === "/")) {
          i += 1;
        }
        i += 2;
        continue;
      }
      result += char;
    }
  }
  return result;
}

function defineNitroPlugin(def) {
  return def;
}

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

const _XFPaNk = eventHandler(async (event) => {
  const { sql } = await readBody(event);
  const collection = getRouterParam(event, "collection") || event.path?.split("/")?.[2] || "";
  assertSafeQuery(sql, collection);
  const conf = useRuntimeConfig().content;
  if (conf.integrityCheck) {
    await checkAndImportDatabaseIntegrity(event, collection, conf);
  }
  return loadDatabaseAdapter(conf).all(sql);
});

const _lazy_Acdv4u = () => Promise.resolve().then(function () { return renderer; });
const _lazy_HHAlYK = () => Promise.resolve().then(function () { return debug_json$1; });
const _lazy_VReQ8I = () => Promise.resolve().then(function () { return image$1; });

const handlers = [
  { route: '', handler: _5tnCmT, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_Acdv4u, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: handler$1, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _J9na6O, lazy: false, middleware: true, method: undefined },
  { route: '/__site-config__/debug.json', handler: _FHZlRW, lazy: false, middleware: false, method: undefined },
  { route: '/_og/debug.json', handler: _lazy_HHAlYK, lazy: true, middleware: false, method: undefined },
  { route: '/_og/d/**', handler: _lazy_VReQ8I, lazy: true, middleware: false, method: undefined },
  { route: '/_og/s/**', handler: _lazy_VReQ8I, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_content/blog/sql_dump.txt', handler: _iAwXBs, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/info/sql_dump.txt', handler: _iAwXBs, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/blog/query', handler: _XFPaNk, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/info/query', handler: _XFPaNk, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_Acdv4u, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

if (!globalThis.crypto) {
  globalThis.crypto = nodeCrypto.webcrypto;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server = new Server(toNodeListener(nitroApp.h3App));
let listener;
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer || "Bun" in globalThis && process.platform === "win32"
)) {
  return new Promise((resolve, reject) => {
    try {
      listener = server.listen(useRandomPort ? 0 : getSocketAddress(), () => {
        const address = server.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join$1(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join$1(tmpdir(), socketName);
}
async function shutdown() {
  server.closeAllConnections?.();
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

const _messages = {
	"appName": "Nuxt",
	"status": 500,
	"statusText": "Internal server error",
	"description": "This page is temporarily unavailable.",
	"refresh": "Refresh this page"
};
const template$1 = (messages) => {
	messages = {
		..._messages,
		...messages
	};
	return "<!DOCTYPE html><html lang=\"en\"><head><title>" + escapeHtml(messages.status) + " - " + escapeHtml(messages.statusText) + " | " + escapeHtml(messages.appName) + "</title><meta charset=\"utf-8\"><meta content=\"width=device-width,initial-scale=1.0,minimum-scale=1.0\" name=\"viewport\"><script>!function(){const e=document.createElement(\"link\").relList;if(!(e&&e.supports&&e.supports(\"modulepreload\"))){for(const e of document.querySelectorAll('link[rel=\"modulepreload\"]'))r(e);new MutationObserver(e=>{for(const o of e)if(\"childList\"===o.type)for(const e of o.addedNodes)\"LINK\"===e.tagName&&\"modulepreload\"===e.rel&&r(e)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),\"use-credentials\"===e.crossOrigin?r.credentials=\"include\":\"anonymous\"===e.crossOrigin?r.credentials=\"omit\":r.credentials=\"same-origin\",r}(e);fetch(e.href,r)}}();<\/script><style>*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:\"\"}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1,h2{font-size:inherit;font-weight:inherit}h1,h2,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.grid{display:grid}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-2{padding-left:.5rem;padding-right:.5rem}.text-center{text-align:center}.text-\\[80px\\]{font-size:80px}.text-2xl{font-size:1.5rem;line-height:2rem}.text-\\[\\#020420\\]{--un-text-opacity:1;color:rgb(2 4 32/var(--un-text-opacity))}.text-\\[\\#64748B\\]{--un-text-opacity:1;color:rgb(100 116 139/var(--un-text-opacity))}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-wide{letter-spacing:.025em}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.tabular-nums{--un-numeric-spacing:tabular-nums;font-variant-numeric:var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media(prefers-color-scheme:dark){.dark\\:bg-\\[\\#020420\\]{--un-bg-opacity:1;background-color:rgb(2 4 32/var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media(min-width:640px){.sm\\:text-\\[110px\\]{font-size:110px}.sm\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}</style></head><body class=\"antialiased bg-white dark:bg-[#020420] dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-[#020420] tracking-wide\"><div class=\"max-w-520px text-center\"><h1 class=\"font-semibold leading-none mb-4 sm:text-[110px] tabular-nums text-[80px]\">" + escapeHtml(messages.status) + "</h1><h2 class=\"font-semibold mb-2 sm:text-3xl text-2xl\">" + escapeHtml(messages.statusText) + "</h2><p class=\"mb-4 px-2 text-[#64748B] text-md\">" + escapeHtml(messages.description) + "</p></div></body></html>";
};

const error500 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template$1
}, Symbol.toStringTag, { value: 'Module' }));

const tw4FontVars = {};
const tw4Breakpoints = {};

const compatibility = {"browser":false,"satori":"node","takumi":"node-dev","resvg":"node-dev","sharp":false};

const buildDir = "C:/Users/ASUS/Documents/anurag12-webster.github.io/.nuxt";
const rootDir = "C:/Users/ASUS/Documents/anurag12-webster.github.io";

let fontUrlMapping;
async function loadFontUrlMapping() {
  if (fontUrlMapping)
    return fontUrlMapping;
  const content = await readFile(join(buildDir, "cache", "og-image", "font-urls.json"), "utf-8").catch(() => null);
  fontUrlMapping = content ? JSON.parse(content) : {};
  return fontUrlMapping;
}
async function resolve$2(event, font) {
  const path = font.src || font.localPath;
  if (font.absolutePath) {
    const data = await readFile(font.absolutePath).catch(() => null);
    if (data?.length)
      return data;
  }
  if (path.startsWith("/_og-static-fonts/")) {
    const filename = path.slice("/_og-static-fonts/".length);
    const cached = await readFile(join(buildDir, "cache", "og-image", "fonts-ttf", filename)).catch(() => null);
    if (cached?.length)
      return cached;
  }
  if (path.startsWith("/_fonts/")) {
    const filename = path.slice("/_fonts/".length);
    const mapping = await loadFontUrlMapping();
    if (mapping[filename]) {
      const res = await fetch(mapping[filename]).catch(() => null);
      if (res?.ok)
        return Buffer.from(await res.arrayBuffer());
    }
  }
  {
    const filename = path.slice(1);
    const data = await readFile(join(rootDir, "public", filename)).catch(() => null);
    if (data?.length)
      return data;
  }
  const { app } = useRuntimeConfig();
  {
    const reqUrl = getRequestURL(event);
    const origin = `${reqUrl.protocol}//${reqUrl.host}`;
    const url = new URL(withBase(path, app.baseURL), origin).href;
    const res = await fetch(url).catch(() => null);
    if (res?.ok) {
      return Buffer.from(await res.arrayBuffer());
    }
  }
  const fullPath = withBase(path, app.baseURL);
  const arrayBuffer = await event.$fetch(fullPath, {
    responseType: "arrayBuffer"
  });
  return Buffer.from(arrayBuffer);
}

async function resolve$1(event, font) {
  const path = font.src || font.localPath;
  const { app } = useRuntimeConfig();
  const fullPath = withBase(path, app.baseURL);
  const origin = getNitroOrigin(event);
  const res = await fetch(new URL(fullPath, origin).href);
  if (res.ok) {
    return Buffer.from(await res.arrayBuffer());
  }
  throw new Error(`[Nuxt OG Image] Failed to resolve font: ${path}`);
}

const resolve = (true || false) ? resolve$2 : resolve$1;

const fontRequirements = {"weights":[400],"styles":["normal"],"families":[],"hasDynamicBindings":false};
const _mapPath = "C:/Users/ASUS/Documents/anurag12-webster.github.io/.nuxt/cache/og-image/component-font-map.json";
function getComponentFontMap() {
  try { return JSON.parse(readFileSync(_mapPath, 'utf-8')) }
  catch { return {} }
}

const resolvedFonts = [{"family":"Inter","src":"/_og-static-fonts/inter-400-latin.ttf","weight":400,"style":"normal","satoriSrc":"/_og-static-fonts/inter-400-latin.ttf","absolutePath":"C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/nuxt-og-image/dist/runtime/public/_og-fonts/inter-400-latin.ttf","fallback":true},{"family":"Inter","src":"/_og-static-fonts/inter-700-latin.ttf","weight":700,"style":"normal","satoriSrc":"/_og-static-fonts/inter-700-latin.ttf","absolutePath":"C:/Users/ASUS/Documents/anurag12-webster.github.io/node_modules/nuxt-og-image/dist/runtime/public/_og-fonts/inter-700-latin.ttf","fallback":true}];

const availableFonts = [];

const RE_UNICODE_RANGE_PART = /^U\+([0-9A-Fa-f]+)(?:-([0-9A-Fa-f]+))?$/;
function parseUnicodeRange(range) {
  const parts = range.split(",").map((s) => s.trim()).filter(Boolean);
  const result = [];
  for (const part of parts) {
    const match = part.match(RE_UNICODE_RANGE_PART);
    if (!match)
      return null;
    const start = Number.parseInt(match[1], 16);
    const end = match[2] ? Number.parseInt(match[2], 16) : start;
    result.push([start, end]);
  }
  return result.length > 0 ? result : null;
}
function codepointsIntersectRanges(codepoints, ranges) {
  for (const cp of codepoints) {
    for (const [start, end] of ranges) {
      if (cp >= start && cp <= end)
        return true;
    }
  }
  return false;
}
function addCodepointsFromString(str, codepoints) {
  for (const ch of str)
    codepoints.add(ch.codePointAt(0));
}
function extractCodepoints(node) {
  const codepoints = /* @__PURE__ */ new Set();
  const walk = (n) => {
    if (typeof n.text === "string")
      addCodepointsFromString(n.text, codepoints);
    const children = n.props?.children ?? n.children;
    if (typeof children === "string") {
      addCodepointsFromString(children, codepoints);
    } else if (Array.isArray(children)) {
      for (const child of children) {
        if (child == null)
          continue;
        if (typeof child === "string")
          addCodepointsFromString(child, codepoints);
        else
          walk(child);
      }
    }
  };
  walk(node);
  return codepoints;
}

function fontFormat(src) {
  if (src.endsWith(".woff2"))
    return "woff2";
  if (src.endsWith(".woff"))
    return "woff";
  if (src.endsWith(".otf"))
    return "otf";
  return "ttf";
}
async function loadFont(event, font, src) {
  const cacheKey = `${font.family}-${font.weight}-${font.style}-${src}`;
  const cached = fontCache.get(cacheKey);
  if (cached)
    return cached;
  const data = await resolve(event, { ...font, src }).catch((err) => {
    logger$1.warn(`Failed to load font ${font.family}: ${err.message}`);
    return null;
  });
  if (!data)
    return null;
  fontCache.set(cacheKey, data);
  return data;
}
function findClosestWeight(target, available) {
  return available.reduce(
    (closest, w) => Math.abs(w - target) < Math.abs(closest - target) ? w : closest
  );
}
function selectFontsForRequirements(allFonts, requirements) {
  if (requirements.hasDynamicBindings)
    return [...allFonts];
  const fallbackFonts = [];
  const byFamily = /* @__PURE__ */ new Map();
  const requiredFamilies = requirements.families.length > 0 ? new Set(requirements.families) : null;
  for (const f of allFonts) {
    if (f.fallback) {
      fallbackFonts.push(f);
      continue;
    }
    if (!requirements.styles.includes(f.style))
      continue;
    if (requiredFamilies && !requiredFamilies.has(f.family))
      continue;
    const arr = byFamily.get(f.family) || [];
    arr.push(f);
    byFamily.set(f.family, arr);
  }
  const selected = [];
  for (const [, familyFonts] of byFamily) {
    const availableWeights = [...new Set(familyFonts.map((f) => f.weight))].toSorted((a, b) => a - b);
    if (availableWeights.length === 0)
      continue;
    const selectedWeights = /* @__PURE__ */ new Set();
    for (const w of requirements.weights) {
      if (availableWeights.includes(w)) {
        selectedWeights.add(w);
      } else {
        selectedWeights.add(findClosestWeight(w, availableWeights));
      }
    }
    selected.push(...familyFonts.filter((f) => selectedWeights.has(f.weight)));
  }
  selected.push(...fallbackFonts);
  return selected;
}
const _warnedFontKeys = /* @__PURE__ */ new Set();
function loadAllFontsDebug(component) {
  const map = getComponentFontMap();
  const componentReqs = component ? map[component] : null;
  return {
    component,
    componentReqs: componentReqs ? { families: componentReqs.families, weights: componentReqs.weights, hasDynamicBindings: componentReqs.hasDynamicBindings } : null,
    globalReqs: { families: fontRequirements.families, weights: fontRequirements.weights },
    componentFontMapKeys: Object.keys(map),
    resolvedFontFamilies: [...new Set(resolvedFonts.map((f) => f.family))]
  };
}
async function loadAllFonts(event, options) {
  const map = getComponentFontMap();
  const componentReqs = options.component ? map[options.component] : null;
  const usingGlobalFallback = !!(componentReqs && componentReqs.hasDynamicBindings);
  const reqs = componentReqs && !componentReqs.hasDynamicBindings ? componentReqs : fontRequirements;
  const fonts = selectFontsForRequirements(resolvedFonts, reqs);
  if (options.fontFamilyOverride) {
    const loadedFamilies = new Set(fonts.map((f) => f.family));
    if (!loadedFamilies.has(options.fontFamilyOverride)) {
      const overrideFonts = availableFonts.filter((f) => f.family === options.fontFamilyOverride);
      if (overrideFonts.length > 0) {
        fonts.push(...overrideFonts);
      } else {
        const resolvedOverride = resolvedFonts.filter((f) => f.family === options.fontFamilyOverride);
        fonts.push(...resolvedOverride);
      }
    }
  }
  if (options.codepoints && options.codepoints.size > 0) {
    for (let i = fonts.length - 1; i >= 0; i--) {
      const f = fonts[i];
      if (!f.unicodeRange)
        continue;
      const ranges = parseUnicodeRange(f.unicodeRange);
      if (!ranges)
        continue;
      if (!codepointsIntersectRanges(options.codepoints, ranges))
        fonts.splice(i, 1);
    }
  }
  const results = await Promise.all(
    fonts.map(async (f) => {
      let src = f.src;
      const srcFormat = fontFormat(f.src);
      if (!options.supportedFormats.has(srcFormat)) {
        if (f.satoriSrc && options.supportedFormats.has(fontFormat(f.satoriSrc))) {
          src = f.satoriSrc;
        } else {
          return null;
        }
      }
      let data = await loadFont(event, f, src);
      if (!data && src !== f.src && options.supportedFormats.has(srcFormat)) {
        data = await loadFont(event, f, f.src);
        if (data)
          src = f.src;
      }
      if (!data)
        return null;
      return {
        ...f,
        cacheKey: `${f.family}-${f.weight}-${f.style}-${src}`,
        data
      };
    })
  );
  const loaded = results.filter((f) => f !== null);
  const fingerprint = loaded.map((f) => f.cacheKey).sort().join("|");
  const cachedArray = fontArrayCache.get(fingerprint);
  if (cachedArray)
    return cachedArray;
  fontArrayCache.set(fingerprint, loaded);
  const isCommunity = options.component && map[options.component]?.category === "community";
  if (!options.supportedFormats.has("woff2") && loaded.length === 0 && fonts.length > 0 && !isCommunity) {
    const variableFamilies = [...new Set(fonts.map((f) => f.family))];
    const warnKey = `variable-fonts-${variableFamilies.join(",")}`;
    if (!_warnedFontKeys.has(warnKey)) {
      if (_warnedFontKeys.size >= 100)
        _warnedFontKeys.clear();
      _warnedFontKeys.add(warnKey);
      logger$1.warn(`All fonts are variable fonts (${variableFamilies.join(", ")}). Variable fonts are not supported by Satori renderer. Falling back to bundled Inter font. Consider using the 'takumi' renderer for variable font support.`);
    }
  }
  if (reqs.weights.length > 0 && !isCommunity) {
    const families = reqs.families.length > 0 ? reqs.families : [...new Set(loaded.map((f) => f.family))];
    const component = options.component ? ` (${options.component})` : "";
    const fallbackNote = usingGlobalFallback ? " Note: using global font requirements because this component has dynamic font bindings." : "";
    for (const family of families) {
      const loadedWeights = [...new Set(loaded.filter((f) => f.family === family).map((f) => f.weight))].toSorted((a, b) => a - b);
      if (loadedWeights.length === 0)
        continue;
      for (const reqWeight of reqs.weights) {
        if (loadedWeights.includes(reqWeight))
          continue;
        const closest = findClosestWeight(reqWeight, loadedWeights);
        const warnKey = `${family}-${reqWeight}-${closest}-${options.component || ""}`;
        if (_warnedFontKeys.has(warnKey))
          continue;
        if (_warnedFontKeys.size >= 100)
          _warnedFontKeys.clear();
        _warnedFontKeys.add(warnKey);
        logger$1.warn(`Font "${family}" weight ${reqWeight} not configured${component}, using ${closest} instead.${fallbackNote}`);
      }
    }
  }
  return loaded;
}
async function loadDefinedFonts(event, fontDefs) {
  const results = [];
  for (const def of fontDefs) {
    if (!def || typeof def !== "object" || !def.path)
      continue;
    const name = def.name;
    const weight = def.weight || 400;
    const style = def.style === "italic" ? "italic" : "normal";
    const path = def.path;
    const fontConfig = { family: name, weight, style, src: path, localPath: path };
    const data = await resolve(event.e, fontConfig).catch(() => null);
    if (data) {
      results.push({
        ...fontConfig,
        cacheKey: `custom-${name}-${weight}-${style}-${path}`,
        data
      });
    }
  }
  return results;
}
async function loadFontsForRenderer(event, options) {
  const baseFonts = await loadAllFonts(event.e, options);
  if (!Array.isArray(options.fontDefs) || options.fontDefs.length === 0)
    return baseFonts;
  const customFonts = await loadDefinedFonts(event, options.fontDefs);
  return [...baseFonts, ...customFonts];
}
function getDefaultFontFamily$1(options) {
  const fontFamilyOverride = options.props?.fontFamily;
  const defaultFont = resolvedFonts[0]?.family;
  return { fontFamilyOverride, defaultFont };
}

const sharpInstance = { instance: void 0 };
const resvgInstance = { instance: void 0 };
const satoriInstance = { instance: void 0 };
let resvgImportPromise;
let satoriImportPromise;
async function getResvg() {
  if (!resvgImportPromise) {
    resvgImportPromise = Promise.resolve().then(function () { return nodeDev$3; }).then((m) => {
      resvgInstance.instance = m.default;
    });
  }
  await resvgImportPromise;
  await resvgInstance.instance.initWasmPromise;
  const Resvg = resvgInstance.instance.Resvg;
  if (!Resvg)
    throw new Error("[Nuxt OG Image] Resvg class is undefined after WASM initialization \u2014 the @resvg/resvg-wasm binding may have failed to load.");
  return Resvg;
}
async function getSatori() {
  if (!satoriImportPromise) {
    satoriImportPromise = Promise.resolve().then(function () { return node$1; }).then((m) => {
      satoriInstance.instance = m.default;
    });
  }
  await satoriImportPromise;
  await satoriInstance.instance.initWasmPromise;
  const { satori } = satoriInstance.instance;
  if (!satori)
    throw new Error("[Nuxt OG Image] satori is undefined after WASM initialization \u2014 the satori binding may have failed to load.");
  return satori;
}
async function getSharp() {
  sharpInstance.instance = sharpInstance.instance || await Promise.resolve().then(function () { return empty; }).then((m) => m.default);
  return sharpInstance.instance;
}

function walkTree(e, node, plugins) {
  const promises = [];
  for (const plugin of plugins.flat()) {
    if (plugin.filter(node)) {
      promises.push(plugin.transform(node, e));
    }
  }
  if (!node.props?.children || !Array.isArray(node.props.children))
    return promises;
  if (node.props.children.length === 0) {
    delete node.props.children;
    return promises;
  }
  for (const child of node.props.children || []) {
    if (child && typeof child === "object") {
      promises.push(
        ...walkTree(e, child, plugins)
      );
    }
  }
  return promises;
}
function defineTransformer(transformer) {
  return transformer;
}

const RE_QUOT = /&quot;/g;
const RE_APOS_DEC = /&#39;/g;
const RE_APOS_HEX = /&#x27;/g;
const RE_LT$1 = /&lt;/g;
const RE_GT$1 = /&gt;/g;
const RE_CENT = /&cent;/g;
const RE_POUND = /&pound;/g;
const RE_YEN = /&yen;/g;
const RE_EURO = /&euro;/g;
const RE_COPY = /&copy;/g;
const RE_REG = /&reg;/g;
const RE_SLASH_HEX = /&#x2F;/g;
const RE_DEC_ENTITY = /&#(\d+);/g;
const RE_AMP$1 = /&amp;/g;
function htmlDecodeQuotes(html) {
  return html.replace(RE_QUOT, '"').replace(RE_APOS_DEC, "'").replace(RE_APOS_HEX, "'");
}
function decodeHtml(html) {
  return html.replace(RE_LT$1, "<").replace(RE_GT$1, ">").replace(RE_CENT, "\xA2").replace(RE_POUND, "\xA3").replace(RE_YEN, "\xA5").replace(RE_EURO, "\u20AC").replace(RE_COPY, "\xA9").replace(RE_REG, "\xAE").replace(RE_QUOT, '"').replace(RE_APOS_DEC, "'").replace(RE_APOS_HEX, "'").replace(RE_SLASH_HEX, "/").replace(RE_DEC_ENTITY, (full, int) => {
    return String.fromCharCode(Number.parseInt(int));
  }).replace(RE_AMP$1, "&");
}

function splitCssDeclarations(style) {
  const declarations = [];
  let current = "";
  let parenDepth = 0;
  let inSingleQuote = false;
  let inDoubleQuote = false;
  for (let i = 0; i < style.length; i++) {
    const char = style[i];
    if (char === "'" && !inDoubleQuote) {
      inSingleQuote = !inSingleQuote;
    } else if (char === '"' && !inSingleQuote) {
      inDoubleQuote = !inDoubleQuote;
    } else if (!inSingleQuote && !inDoubleQuote) {
      if (char === "(") {
        parenDepth++;
      } else if (char === ")") {
        parenDepth = Math.max(0, parenDepth - 1);
      } else if (char === ";" && parenDepth === 0) {
        if (current.trim())
          declarations.push(current);
        current = "";
        continue;
      }
    }
    current += char;
  }
  if (current.trim())
    declarations.push(current);
  return declarations;
}

const encoding = defineTransformer([
  // clean up vue inspector data attributes
  {
    filter: (node) => node.props?.["data-v-inspector"],
    transform: (node) => {
      delete node.props["data-v-inspector"];
    }
  },
  // decode HTML entities in string children
  {
    filter: (node) => typeof node.props?.children === "string",
    transform: (node) => {
      node.props.children = decodeHtml(node.props.children);
    }
  },
  // decode HTML entities in array children (text nodes with siblings)
  {
    filter: (node) => Array.isArray(node.props?.children),
    transform: (node) => {
      node.props.children = node.props.children.map(
        (child) => typeof child === "string" ? decodeHtml(child) : child
      );
    }
  }
]);

function getImageDimensions(data) {
  if (data[0] === 137 && data[1] === 80 && data.length >= 24) {
    const width = new DataView(data.buffer, data.byteOffset + 16).getUint32(0, false);
    const height = new DataView(data.buffer, data.byteOffset + 20).getUint32(0, false);
    return { width, height };
  }
  if (data[0] === 255 && data[1] === 216) {
    let i = 2;
    while (i < data.length - 8) {
      if (data[i] === 255) {
        const marker = data[i + 1];
        if (marker >= 192 && marker <= 195 || marker === 201) {
          const height = data[i + 5] << 8 | data[i + 6];
          const width = data[i + 7] << 8 | data[i + 8];
          return { width, height };
        }
        const len = data[i + 2] << 8 | data[i + 3];
        i += len + 2;
      } else {
        i++;
      }
    }
  }
  if (data[0] === 71 && data[1] === 73 && data[2] === 70 && data.length >= 10) {
    const width = data[6] | data[7] << 8;
    const height = data[8] | data[9] << 8;
    return { width, height };
  }
  return {};
}

const RE_URL_LEADING = /^url\(['"]?/;
const RE_URL_TRAILING = /['"]?\)$/;
async function resolveLocalFilePathImage(publicStoragePath, src) {
  const normalizedSrc = withoutLeadingSlash(
    src.replace("_nuxt/@fs/", "").replace("_nuxt/", "").replace("./", "")
  ).replaceAll("/", ":");
  const key = `${publicStoragePath}:${normalizedSrc}`;
  if (await useStorage().hasItem(key))
    return await useStorage().getItemRaw(key);
}
const imageSrc = defineTransformer([
  // fix <img src="">
  {
    filter: (node) => node.type === "img" && node.props?.src,
    transform: async (node, { e, publicStoragePath, runtimeConfig }) => {
      let src = node.props.src;
      const isRelative = src.startsWith("/");
      let dimensions;
      let imageBuffer;
      if (src.endsWith(".webp")) {
        logger.warn("Using WebP images with Satori is not supported. Please consider switching image format or use the chromium renderer.", src);
      }
      if (isRelative) {
        {
          const srcWithoutBase = src.replace(runtimeConfig.app.baseURL, "");
          imageBuffer = await resolveLocalFilePathImage(publicStoragePath, srcWithoutBase);
        }
        if (!imageBuffer) {
          imageBuffer = await e.$fetch(src, { responseType: "arrayBuffer" }).catch(() => {
          });
          if (!imageBuffer && true) {
            imageBuffer = await e.$fetch(src, {
              baseURL: getNitroOrigin(e),
              responseType: "arrayBuffer"
            }).catch(() => {
            });
          }
        }
        if (imageBuffer) {
          const buffer = imageBuffer instanceof ArrayBuffer ? imageBuffer : imageBuffer.buffer;
          node.props.src = toBase64Image(buffer);
        }
      } else if (!src.startsWith("data:")) {
        src = decodeHtml(src);
        {
          node.props.src = src;
          imageBuffer = await $fetch(src, {
            responseType: "arrayBuffer"
          }).catch(() => {
          });
          if (imageBuffer) {
            const buffer = imageBuffer instanceof ArrayBuffer ? imageBuffer : imageBuffer.buffer;
            node.props.src = toBase64Image(buffer);
          }
        }
      }
      if (typeof node.props.width === "string")
        node.props.width = Number(node.props.width) || void 0;
      if (typeof node.props.height === "string")
        node.props.height = Number(node.props.height) || void 0;
      if (imageBuffer && (!node.props.width || !node.props.height)) {
        dimensions = getImageDimensions(imageBuffer);
        if (dimensions?.width && dimensions?.height) {
          const naturalAspectRatio = dimensions.width / dimensions.height;
          if (node.props.width && !node.props.height) {
            node.props.height = Math.round(node.props.width / naturalAspectRatio);
          } else if (node.props.height && !node.props.width) {
            node.props.width = Math.round(node.props.height * naturalAspectRatio);
          } else if (!node.props.width && !node.props.height) {
            node.props.width = dimensions.width;
            node.props.height = dimensions.height;
          }
        }
      }
      if (typeof node.props.src === "string" && node.props.src.startsWith("/")) {
        if (imageBuffer) {
          const buffer = imageBuffer instanceof ArrayBuffer ? imageBuffer : imageBuffer.buffer;
          node.props.src = toBase64Image(buffer);
        } else {
          node.props.src = `${withBase(src, `${getNitroOrigin(e)}`)}?${Date.now()}`;
        }
      }
    }
  },
  // fix style="background-image: url('')"
  {
    filter: (node) => node.props?.style?.backgroundImage?.includes("url("),
    transform: async (node, { e, publicStoragePath, runtimeConfig }) => {
      const backgroundImage = node.props.style.backgroundImage;
      const src = backgroundImage.replace(RE_URL_LEADING, "").replace(RE_URL_TRAILING, "");
      if (src.startsWith("data:"))
        return;
      const isRelative = src?.startsWith("/");
      let imageBuffer;
      if (isRelative) {
        {
          const srcWithoutBase = src.replace(runtimeConfig.app.baseURL, "/");
          imageBuffer = await resolveLocalFilePathImage(publicStoragePath, srcWithoutBase);
        }
        if (!imageBuffer) {
          imageBuffer = await e.$fetch(src, { responseType: "arrayBuffer" }).catch(() => {
          });
          if (!imageBuffer && true) {
            imageBuffer = await e.$fetch(src, {
              baseURL: getNitroOrigin(e),
              responseType: "arrayBuffer"
            }).catch(() => {
            });
          }
        }
      } else {
        const decodedSrc = decodeHtml(src);
        {
          imageBuffer = await $fetch(decodedSrc, {
            responseType: "arrayBuffer"
          }).catch(() => {
          });
        }
      }
      if (imageBuffer) {
        const buffer = imageBuffer instanceof ArrayBuffer ? imageBuffer : imageBuffer.buffer;
        node.props.style.backgroundImage = `url(${toBase64Image(buffer)})`;
      }
    }
  }
]);

const DEFAULT_BREAKPOINTS = {
  "sm": 640,
  "md": 768,
  "lg": 1024,
  "xl": 1280,
  "2xl": 1536
};
const BREAKPOINTS = { ...DEFAULT_BREAKPOINTS, ...tw4Breakpoints };
const RESPONSIVE_PREFIX_RE = /^(sm|md|lg|xl|2xl):(.+)$/;
const DARK_MODE_PREFIX_RE = /^dark:(.+)$/;
const GAP_CLASS_RE = /^gap(?:-(x|y))?-(\d+(?:\.\d+)?)$/;
const GAP_ARBITRARY_RE = /^gap(?:-(x|y))?-\[(.+)\]$/;
const TEXT_SIZE_RE = /^(?:xs|sm|base|lg|xl|\d+xl)$/;
const BORDER_WIDTH_RE = /^\d+$/;
const BORDER_SIDE_RE = /^[trblxy](?:-\d+)?$/;
const RING_WIDTH_RE = /^\d+$/;
const DIVIDE_SIDE_RE = /^[xy](?:-\d+)?$/;
const DIVIDE_NUMERIC_RE = /^\d+$/;
const OUTLINE_NUMERIC_RE = /^\d+$/;
const OUTLINE_STYLE_RE = /^(?:none|dashed|dotted|double)$/;
function resolveGapToStyle(cls, style) {
  const match = cls.match(GAP_CLASS_RE);
  if (match) {
    const axis = match[1];
    const value = Number(match[2]);
    if (axis === "x")
      style.columnGap = value;
    else if (axis === "y")
      style.rowGap = value;
    else style.gap = value;
    return true;
  }
  const arbMatch = cls.match(GAP_ARBITRARY_RE);
  if (arbMatch) {
    const axis = arbMatch[1];
    const value = arbMatch[2];
    if (axis === "x")
      style.columnGap = value;
    else if (axis === "y")
      style.rowGap = value;
    else style.gap = value;
    return true;
  }
  return false;
}
const DISPLAY_CLASSES = /* @__PURE__ */ new Set([
  "hidden",
  "block",
  "flex",
  "grid",
  "inline",
  "inline-flex",
  "inline-block",
  "inline-grid",
  "contents",
  "table",
  "flow-root",
  "list-item"
]);
const OVERLOADED_GROUPS = [
  ["text-", (v) => TEXT_SIZE_RE.test(v) ? "text-size" : "text-color"],
  ["border-", (v) => BORDER_WIDTH_RE.test(v) || BORDER_SIDE_RE.test(v) ? "border-width" : "border-color"],
  ["ring-", (v) => RING_WIDTH_RE.test(v) ? "ring-width" : "ring-color"],
  ["divide-", (v) => DIVIDE_SIDE_RE.test(v) || DIVIDE_NUMERIC_RE.test(v) || v === "reverse" ? "divide-width" : "divide-color"],
  ["outline-", (v) => OUTLINE_NUMERIC_RE.test(v) || OUTLINE_STYLE_RE.test(v) ? "outline-style" : "outline-color"]
];
function getUtilityGroup(cls) {
  if (DISPLAY_CLASSES.has(cls))
    return "display";
  if (cls.includes("["))
    return `${cls.slice(0, cls.indexOf("["))}-arbitrary`;
  for (const [prefix, resolver] of OVERLOADED_GROUPS) {
    if (cls === prefix.slice(0, -1) || cls.startsWith(prefix)) {
      return resolver(cls.slice(prefix.length));
    }
  }
  const dashIdx = cls.indexOf("-");
  return dashIdx === -1 ? cls : cls.slice(0, dashIdx);
}
function resolveDarkToken(baseClass, renderWidth) {
  const respMatch = baseClass.match(RESPONSIVE_PREFIX_RE);
  if (respMatch) {
    const bp = respMatch[1];
    const finalClass = respMatch[2];
    const breakpointWidth = BREAKPOINTS[bp];
    return breakpointWidth && renderWidth >= breakpointWidth ? finalClass : null;
  }
  return baseClass;
}
const styleDirectives = defineTransformer({
  filter: (node) => !!node.props?.class,
  transform: (node, ctx) => {
    const classes = node.props.class || "";
    const renderWidth = Number(ctx.options.width) || 1200;
    const isDarkMode = ctx.options.props?.colorMode === "dark";
    const tokens = classes.split(" ").filter((c) => c.trim());
    const darkOverrideGroups = /* @__PURE__ */ new Set();
    const responsiveOverrideGroups = /* @__PURE__ */ new Set();
    for (const token of tokens) {
      if (isDarkMode) {
        const darkMatch = token.match(DARK_MODE_PREFIX_RE);
        if (darkMatch) {
          const resolved = resolveDarkToken(darkMatch[1], renderWidth);
          if (resolved)
            darkOverrideGroups.add(getUtilityGroup(resolved));
          continue;
        }
      }
      const respMatch = token.match(RESPONSIVE_PREFIX_RE);
      if (respMatch) {
        const bp = respMatch[1];
        const baseClass = respMatch[2];
        const breakpointWidth = BREAKPOINTS[bp];
        if (breakpointWidth && renderWidth >= breakpointWidth)
          responsiveOverrideGroups.add(getUtilityGroup(baseClass));
      }
    }
    const processedClasses = [];
    const gapStyles = {};
    for (const token of tokens) {
      const darkMatch = token.match(DARK_MODE_PREFIX_RE);
      if (darkMatch) {
        if (isDarkMode) {
          const resolved = resolveDarkToken(darkMatch[1], renderWidth);
          if (resolved) {
            if (!resolveGapToStyle(resolved, gapStyles))
              processedClasses.push(resolved);
          }
        }
        continue;
      }
      const respMatch = token.match(RESPONSIVE_PREFIX_RE);
      if (respMatch) {
        const bp = respMatch[1];
        const baseClass = respMatch[2];
        const breakpointWidth = BREAKPOINTS[bp];
        if (breakpointWidth && renderWidth >= breakpointWidth) {
          if (isDarkMode && darkOverrideGroups.has(getUtilityGroup(baseClass)))
            continue;
          if (!resolveGapToStyle(baseClass, gapStyles))
            processedClasses.push(baseClass);
        }
      } else {
        const group = getUtilityGroup(token);
        if (isDarkMode && darkOverrideGroups.has(group) || responsiveOverrideGroups.has(group))
          continue;
        if (!resolveGapToStyle(token, gapStyles))
          processedClasses.push(token);
      }
    }
    if (Object.keys(gapStyles).length > 0) {
      node.props.style = { ...node.props.style, ...gapStyles };
    }
    node.props.class = processedClasses.join(" ");
  }
});

const EMOJI_CODEPOINT_TO_NAME = {
  // Faces - most popular
  "1f600": "grinning-face",
  "1f603": "grinning-face-with-big-eyes",
  "1f604": "grinning-face-with-smiling-eyes",
  "1f601": "beaming-face-with-smiling-eyes",
  "1f606": "grinning-squinting-face",
  "1f605": "grinning-face-with-sweat",
  "1f602": "face-with-tears-of-joy",
  "1f923": "rolling-on-the-floor-laughing",
  "1f60a": "smiling-face-with-smiling-eyes",
  "1f607": "smiling-face-with-halo",
  "1f970": "smiling-face-with-hearts",
  "1f60d": "smiling-face-with-heart-eyes",
  "1f929": "star-struck",
  "1f618": "face-blowing-a-kiss",
  "1f617": "kissing-face",
  "1f619": "kissing-face-with-smiling-eyes",
  "1f61a": "kissing-face-with-closed-eyes",
  "1f60b": "face-savoring-food",
  "1f61b": "face-with-tongue",
  "1f61c": "winking-face-with-tongue",
  "1f92a": "zany-face",
  "1f61d": "squinting-face-with-tongue",
  "1f911": "money-mouth-face",
  "1f917": "smiling-face-with-open-hands",
  "1f92d": "face-with-hand-over-mouth",
  "1f92b": "shushing-face",
  "1f914": "thinking-face",
  "1f910": "zipper-mouth-face",
  "1f928": "face-with-raised-eyebrow",
  "1f610": "neutral-face",
  "1f611": "expressionless-face",
  "1f636": "face-without-mouth",
  "1f60f": "smirking-face",
  "1f612": "unamused-face",
  "1f644": "face-with-rolling-eyes",
  "1f62c": "grimacing-face",
  "1f925": "lying-face",
  "1f60c": "relieved-face",
  "1f614": "pensive-face",
  "1f62a": "sleepy-face",
  "1f924": "drooling-face",
  "1f634": "sleeping-face",
  "1f637": "face-with-medical-mask",
  "1f912": "face-with-thermometer",
  "1f915": "face-with-head-bandage",
  "1f922": "nauseated-face",
  "1f92e": "face-vomiting",
  "1f927": "sneezing-face",
  "1f975": "hot-face",
  "1f976": "cold-face",
  "1f974": "woozy-face",
  "1f635": "knocked-out-face",
  "1f92f": "exploding-head",
  "1f920": "cowboy-hat-face",
  "1f973": "partying-face",
  "1f60e": "smiling-face-with-sunglasses",
  "1f913": "nerd-face",
  "1f9d0": "face-with-monocle",
  // Gestures
  "1f44b": "waving-hand",
  "1f44d": "thumbs-up",
  "1f44e": "thumbs-down",
  "1f44f": "clapping-hands",
  "1f64c": "raising-hands",
  "1f64f": "folded-hands",
  "1f4aa": "flexed-biceps",
  "270c": "victory-hand",
  "1f91e": "crossed-fingers",
  "1f918": "sign-of-the-horns",
  "1f919": "call-me-hand",
  "1f448": "backhand-index-pointing-left",
  "1f449": "backhand-index-pointing-right",
  "1f446": "backhand-index-pointing-up",
  "1f447": "backhand-index-pointing-down",
  "261d": "index-pointing-up",
  "270b": "raised-hand",
  "1f91a": "raised-back-of-hand",
  "1f590": "hand-with-fingers-splayed",
  "1f596": "vulcan-salute",
  "1f44c": "ok-hand",
  // Hearts & Symbols
  "2764": "red-heart",
  "1f9e1": "orange-heart",
  "1f49b": "yellow-heart",
  "1f49a": "green-heart",
  "1f499": "blue-heart",
  "1f49c": "purple-heart",
  "1f5a4": "black-heart",
  "1f90d": "white-heart",
  "1f90e": "brown-heart",
  "1f494": "broken-heart",
  "1f495": "two-hearts",
  "1f496": "sparkling-heart",
  "1f497": "growing-heart",
  "1f498": "heart-with-arrow",
  "1f49d": "heart-with-ribbon",
  "1f49e": "revolving-hearts",
  "1f49f": "heart-decoration",
  // Popular Objects & Symbols
  "1f680": "rocket",
  "26a1": "high-voltage",
  "1f525": "fire",
  "2728": "sparkles",
  "1f31f": "glowing-star",
  "2b50": "star",
  "1f4a5": "collision",
  "1f4a1": "light-bulb",
  "1f389": "party-popper",
  "1f38a": "confetti-ball",
  "1f381": "wrapped-gift",
  "1f3c6": "trophy",
  "1f3c5": "1st-place-medal",
  "1f947": "1st-place-medal",
  "1f4af": "hundred-points",
  "2705": "check-mark-button",
  "274c": "cross-mark",
  "2714": "check-mark",
  "2795": "plus",
  "2796": "minus",
  "2716": "multiply",
  "27a1": "right-arrow",
  "2b05": "left-arrow",
  "2b06": "up-arrow",
  "2b07": "down-arrow",
  // Tech & Work
  "1f4bb": "laptop",
  "1f4f1": "mobile-phone",
  "2699": "gear",
  "1f527": "wrench",
  "1f528": "hammer",
  "1f529": "nut-and-bolt",
  "1f6e0": "hammer-and-wrench",
  "1f4e6": "package",
  "1f4dd": "memo",
  "1f4c8": "chart-increasing",
  "1f4c9": "chart-decreasing",
  "1f4ca": "bar-chart",
  "1f4cb": "clipboard",
  "1f4cc": "pushpin",
  "1f4cd": "round-pushpin",
  "1f4ce": "paperclip",
  "1f4cf": "straight-ruler",
  "1f4d0": "triangular-ruler",
  "1f50d": "magnifying-glass-tilted-left",
  "1f50e": "magnifying-glass-tilted-right",
  "1f512": "locked",
  "1f513": "unlocked",
  // Nature & Weather
  "2600": "sun",
  "1f31e": "sun-with-face",
  "1f319": "crescent-moon",
  "1f308": "rainbow",
  "2601": "cloud",
  "26c5": "sun-behind-cloud",
  "1f327": "cloud-with-rain",
  "26c8": "cloud-with-lightning-and-rain",
  "1f329": "cloud-with-lightning",
  "2744": "snowflake",
  "1f4a7": "droplet",
  "1f30a": "water-wave",
  // Animals
  "1f436": "dog-face",
  "1f431": "cat-face",
  "1f42d": "mouse-face",
  "1f430": "rabbit-face",
  "1f43b": "bear",
  "1f43c": "panda",
  "1f428": "koala",
  "1f42f": "tiger-face",
  "1f981": "lion",
  "1f984": "unicorn",
  "1f98b": "butterfly",
  "1f41d": "honeybee",
  "1f577": "spider",
  "1f427": "penguin",
  "1f426": "bird",
  "1f985": "eagle",
  "1f419": "octopus",
  "1f422": "turtle",
  "1f40d": "snake",
  "1f409": "dragon",
  "1f432": "dragon-face",
  // Food
  "1f34e": "red-apple",
  "1f34a": "tangerine",
  "1f34b": "lemon",
  "1f34c": "banana",
  "1f34d": "pineapple",
  "1f347": "grapes",
  "1f353": "strawberry",
  "1f352": "cherries",
  "1f351": "peach",
  "1f349": "watermelon",
  "1f96d": "mango",
  "1f951": "avocado",
  "1f955": "carrot",
  "1f33d": "ear-of-corn",
  "1f336": "hot-pepper",
  "1f355": "pizza",
  "1f354": "hamburger",
  "1f35f": "french-fries",
  "1f32d": "hot-dog",
  "1f32e": "taco",
  "1f32f": "burrito",
  "1f37f": "popcorn",
  "1f36a": "cookie",
  "1f382": "birthday-cake",
  "1f370": "shortcake",
  "1f36b": "chocolate-bar",
  "1f36c": "candy",
  "1f36d": "lollipop",
  "1f369": "doughnut",
  "1f366": "soft-ice-cream",
  "1f36f": "honey-pot",
  "2615": "hot-beverage",
  "1f375": "teacup-without-handle",
  "1f37a": "beer-mug",
  "1f37b": "clinking-beer-mugs",
  "1f377": "wine-glass",
  "1f378": "cocktail-glass"
};

const RE_VARIATION_SELECTOR = /-fe0f$/i;
const RE_MATCH_EMOJIS = /(?:\p{Extended_Pictographic}|[\d#*]\uFE0F\u20E3|\p{Regional_Indicator}{2})(?:\p{Emoji_Modifier}|\uFE0F|\u200D[\p{Extended_Pictographic}\p{Emoji}])*/gu;
function getEmojiIconNames(codePoint, _emojiSet) {
  const baseCodePoint = codePoint.replace(RE_VARIATION_SELECTOR, "");
  const knownName = EMOJI_CODEPOINT_TO_NAME[codePoint] || EMOJI_CODEPOINT_TO_NAME[baseCodePoint];
  if (knownName) {
    return [knownName];
  }
  return [codePoint, baseCodePoint, `u${baseCodePoint}`].filter((v, i, a) => a.indexOf(v) === i);
}
function getEmojiCodePoint(emoji) {
  return Array.from(emoji, (char) => char.codePointAt(0).toString(16)).join("-");
}

async function getEmojiSvg(ctx, emojiChar) {
  const emojiSet = ctx.options.emojis;
  const codePoint = getEmojiCodePoint(emojiChar);
  const possibleNames = getEmojiIconNames(codePoint);
  let svg = null;
  for (const iconName of possibleNames) {
    const key = ["1", emojiSet, iconName].join("|");
    if (await emojiCache.hasItem(key)) {
      svg = await emojiCache.getItem(key);
      if (svg)
        break;
    }
  }
  if (!svg) {
    for (const iconName of possibleNames) {
      try {
        svg = await $fetch$1(`https://api.iconify.design/${emojiSet}/${iconName}.svg`, {
          responseType: "text",
          retry: 2,
          retryDelay: 500
        });
        if (svg && svg !== "404") {
          const key = ["1", emojiSet, iconName].join("|");
          await emojiCache.setItem(key, svg);
          break;
        }
      } catch {
        svg = null;
      }
    }
  }
  if (svg) {
    return svg.replace("<svg ", '<svg data-emoji style="margin: 0 .05em 0 .15em; vertical-align: -0.1em;" ');
  }
  return null;
}

const RE_SVG_ID_ATTR = /\bid="([^"]+)"/g;
const RE_HTML_TEXT_CONTENT = />([^<]*)</g;
const RE_REGEX_SPECIAL_CHARS = /[.*+?^${}()|[\]\\]/g;
let emojiCounter = 0;
function wrapDefsElements(svg) {
  const defsElements = ["linearGradient", "radialGradient", "filter", "clipPath", "mask", "pattern"];
  const defsRegex = new RegExp(`<(${defsElements.join("|")})[\\s\\S]*?<\\/\\1>`, "g");
  if (svg.includes("<defs>") || svg.includes("<defs ")) {
    return svg;
  }
  const foundDefs = [];
  let result = svg.replace(defsRegex, (match) => {
    foundDefs.push(match);
    return "";
  });
  if (foundDefs.length > 0) {
    const svgTagEnd = result.indexOf(">") + 1;
    result = `${result.slice(0, svgTagEnd)}<defs>${foundDefs.join("")}</defs>${result.slice(svgTagEnd)}`;
  }
  return result;
}
function makeIdsUnique(svg) {
  const prefix = `e${emojiCounter++}_`;
  const ids = /* @__PURE__ */ new Set();
  svg.replace(RE_SVG_ID_ATTR, (_, id) => {
    ids.add(id);
    return "";
  });
  let result = svg;
  for (const id of ids) {
    result = result.replace(new RegExp(`id="${id}"`, "g"), `id="${prefix}${id}"`).replace(new RegExp(`url\\(#${id}\\)`, "g"), `url(#${prefix}${id})`).replace(new RegExp(`href="#${id}"`, "g"), `href="#${prefix}${id}"`);
  }
  return result;
}
async function applyEmojis(ctx, island) {
  if (!island.html || !ctx.options.emojis)
    return;
  const matches = [...island.html.matchAll(RE_MATCH_EMOJIS)];
  if (!matches.length)
    return;
  const emojiToSvg = /* @__PURE__ */ new Map();
  const uniqueEmojis = [...new Set(matches.map((m) => m[0]))];
  await Promise.all(uniqueEmojis.map(async (emoji) => {
    let svg = await getEmojiSvg(ctx, emoji);
    if (svg) {
      svg = makeIdsUnique(svg);
      svg = wrapDefsElements(svg);
    }
    emojiToSvg.set(emoji, svg ?? null);
  }));
  let html = island.html;
  html = html.replace(RE_HTML_TEXT_CONTENT, (fullMatch, textContent) => {
    if (!textContent)
      return fullMatch;
    let newTextContent = textContent;
    for (const [emoji, svg] of emojiToSvg) {
      if (svg) {
        const escaped = emoji.replace(RE_REGEX_SPECIAL_CHARS, "\\$&");
        newTextContent = newTextContent.replace(new RegExp(escaped, "g"), svg);
      }
    }
    return `>${newTextContent}<`;
  });
  island.html = html;
}

const RE_KEBAB_SEGMENT = /-([a-z])/g;
const RE_AMP_ENTITY = /&amp;/g;
const RE_CSS_QUOTES = /^['"](.+)['"]$/;
const RE_IMPORTANT = /\s*!important\s*$/;
const RE_BODY_CONTENT = /<body>([\s\S]*)<\/body>/;
function camelCase(str) {
  return str.replace(RE_KEBAB_SEGMENT, (_, c) => c.toUpperCase());
}
const SVG_CAMEL_ATTRS = {
  viewbox: "viewBox",
  preserveaspectratio: "preserveAspectRatio",
  basefrequency: "baseFrequency",
  baseprofile: "baseProfile",
  clippathunits: "clipPathUnits",
  diffuseconstant: "diffuseConstant",
  edgemode: "edgeMode",
  filterunits: "filterUnits",
  glyphref: "glyphRef",
  gradienttransform: "gradientTransform",
  gradientunits: "gradientUnits",
  kernelmatrix: "kernelMatrix",
  kernelunitlength: "kernelUnitLength",
  keypoints: "keyPoints",
  keysplines: "keySplines",
  keytimes: "keyTimes",
  lengthadjust: "lengthAdjust",
  limitingconeangle: "limitingConeAngle",
  markerheight: "markerHeight",
  markerunits: "markerUnits",
  markerwidth: "markerWidth",
  maskcontentunits: "maskContentUnits",
  maskunits: "maskUnits",
  numoctaves: "numOctaves",
  pathlength: "pathLength",
  patterncontentunits: "patternContentUnits",
  patterntransform: "patternTransform",
  patternunits: "patternUnits",
  pointsatx: "pointsAtX",
  pointsaty: "pointsAtY",
  pointsatz: "pointsAtZ",
  repeatcount: "repeatCount",
  repeatdur: "repeatDur",
  requiredextensions: "requiredExtensions",
  specularconstant: "specularConstant",
  specularexponent: "specularExponent",
  spreadmethod: "spreadMethod",
  startoffset: "startOffset",
  stddeviation: "stdDeviation",
  stitchtiles: "stitchTiles",
  surfacescale: "surfaceScale",
  systemlanguage: "systemLanguage",
  tablevalues: "tableValues",
  targetx: "targetX",
  targety: "targetY",
  textlength: "textLength",
  xchannelselector: "xChannelSelector",
  ychannelselector: "yChannelSelector",
  zoomandpan: "zoomAndPan"
};
const SVG_CAMEL_ATTR_VALUES = new Set(Object.values(SVG_CAMEL_ATTRS));
const RE_PERCENT$1 = /^\d+%$/;
const RE_VIEWBOX_SEP = /[\s,]+/;
function resolveSvgDimension(props, style, key) {
  const attr = props[key];
  if (attr != null && !RE_PERCENT$1.test(String(attr))) {
    const n = Number(attr);
    if (!Number.isNaN(n))
      return n;
  }
  const sv = style?.[key];
  if (sv != null) {
    const n = typeof sv === "number" ? sv : Number.parseInt(String(sv));
    if (!Number.isNaN(n))
      return n;
  }
  const vb = props.viewBox || props.viewbox;
  if (typeof vb === "string") {
    const parts = vb.split(RE_VIEWBOX_SEP);
    if (parts.length === 4) {
      const n = Number(parts[key === "width" ? 2 : 3]);
      if (!Number.isNaN(n))
        return n;
    }
  }
}
function parseStyleAttr(style) {
  if (!style)
    return void 0;
  const result = {};
  for (const decl of splitCssDeclarations(style.replace(RE_AMP_ENTITY, "&"))) {
    const colonIdx = decl.indexOf(":");
    if (colonIdx === -1)
      continue;
    const prop = decl.slice(0, colonIdx).trim();
    const val = decl.slice(colonIdx + 1).trim();
    if (prop && val) {
      const cleanVal = val.replace(RE_IMPORTANT, "");
      result[camelCase(prop)] = prop === "font-family" ? cleanVal.replace(RE_CSS_QUOTES, "$1") : cleanVal;
    }
  }
  return Object.keys(result).length ? result : void 0;
}
function elementToVNode(el) {
  const props = {};
  const { style, ...attrs } = el.attributes;
  const parsedStyle = parseStyleAttr(style);
  if (parsedStyle)
    props.style = parsedStyle;
  for (const [name, value] of Object.entries(attrs)) {
    const key = SVG_CAMEL_ATTRS[name] || name;
    props[key] = typeof value === "string" ? decodeHtml(value) : value;
  }
  const children = [];
  for (const child of el.children) {
    if (child.type === ELEMENT_NODE) {
      children.push(elementToVNode(child));
    } else if (child.type === TEXT_NODE) {
      const text = child.value;
      if (text.trim())
        children.push(text);
    }
  }
  if (children.length)
    props.children = children;
  return { type: el.name, props };
}
function htmlToVNode(html) {
  const doc = parse(html);
  const root = querySelector(doc, "div");
  if (!root)
    throw new Error("Failed to parse HTML - no root div found");
  return elementToVNode(root);
}
const UNSUPPORTED_SVG_ELEMENTS = /* @__PURE__ */ new Set(["text", "tspan", "textPath", "foreignObject", "switch", "a"]);
function warnUnsupportedSvgElements(vnode, component) {
  const unsupported = /* @__PURE__ */ new Set();
  const collectUnsupported = (node) => {
    if (UNSUPPORTED_SVG_ELEMENTS.has(node.type))
      unsupported.add(`<${node.type}>`);
    if (Array.isArray(node.props?.children)) {
      for (const child of node.props.children) {
        if (child && typeof child === "object")
          collectUnsupported(child);
      }
    }
  };
  const walk = (node) => {
    if (node.type === "svg") {
      collectUnsupported(node);
    } else if (Array.isArray(node.props?.children)) {
      for (const child of node.props.children) {
        if (child && typeof child === "object")
          walk(child);
      }
    }
  };
  walk(vnode);
  if (unsupported.size) {
    const elements = [...unsupported].join(", ");
    const source = component ? ` in "${component}"` : "";
    logger.warn(`SVG ${elements} elements${source} are not supported by image renderers and will not be displayed. Convert text to <path> elements instead.`);
  }
}
async function createVNodes$1(ctx, options) {
  let html = ctx.options.html;
  if (html) {
    logger.warn("The `html` option is deprecated and will be removed in the next major version. Use a Vue component instead.");
  }
  if (!html) {
    const island = await fetchIsland(ctx.e, ctx.options.component, typeof ctx.options.props !== "undefined" ? ctx.options.props : ctx.options);
    island.html = htmlDecodeQuotes(island.html);
    await applyEmojis(ctx, island);
    html = island.html;
    if (html?.includes("<body>")) {
      html = html.match(RE_BODY_CONTENT)?.[1] || "";
    }
  }
  const baseStyle = `position: relative; display: flex; margin: 0 auto; width: ${ctx.options.width}px; height: ${ctx.options.height}px; overflow: hidden;`;
  const fullStyle = options?.wrapperStyle ? `${baseStyle} ${options.wrapperStyle}` : baseStyle;
  const template = `<div style="${fullStyle}">${html}</div>`;
  const vnodeTree = htmlToVNode(template);
  const rootChild = vnodeTree.props.children?.[0];
  if (rootChild && typeof rootChild === "object") {
    rootChild.props.style = { width: "100%", height: "100%", ...rootChild.props.style };
  }
  warnUnsupportedSvgElements(vnodeTree, ctx.options.component);
  await Promise.all(walkTree(ctx, vnodeTree, [encoding, styleDirectives, imageSrc]));
  return vnodeTree;
}

const RE_ICON_CLASSES = /icon|inline-style/g;
const classes = defineTransformer([
  {
    filter: (node) => !!node.props?.class && !node.props?.tw,
    transform(node) {
      node.props.tw = node.props.class;
      node.props.tw = node.props.tw.replace(RE_ICON_CLASSES, "");
    }
  },
  {
    filter: (node) => !!node.props?.style?.display,
    transform(node) {
      if (["inline-block", "inline"].includes(node.props.style.display))
        delete node.props.style.display;
    }
  }
]);

function svgToVNode(svg) {
  const doc = parse(svg);
  const svgEl = querySelector(doc, "svg");
  if (!svgEl)
    return null;
  return elementToVNode(svgEl);
}
function isEmojiSvg(node) {
  return node.type === "svg" && typeof node.props?.["data-emoji"] !== "undefined";
}
const emojis = defineTransformer([
  // Transform text nodes that contain emojis to replace them with SVG nodes
  {
    filter: (node) => {
      if (typeof node.props?.children !== "string")
        return false;
      RE_MATCH_EMOJIS.lastIndex = 0;
      return RE_MATCH_EMOJIS.test(node.props.children);
    },
    transform: async (node, ctx) => {
      const text = node.props.children;
      RE_MATCH_EMOJIS.lastIndex = 0;
      const matches = [...text.matchAll(RE_MATCH_EMOJIS)];
      if (!matches.length)
        return;
      const children = [];
      let lastIndex = 0;
      for (const match of matches) {
        const emoji = match[0];
        const emojiIndex = match.index;
        if (emojiIndex > lastIndex) {
          const beforeText = text.slice(lastIndex, emojiIndex);
          if (beforeText)
            children.push(beforeText);
        }
        const svg = await getEmojiSvg(ctx, emoji);
        if (svg) {
          const svgNode = svgToVNode(svg);
          if (svgNode) {
            svgNode.props["data-emoji"] = true;
            const existingStyle = svgNode.props.style || {};
            if (existingStyle.display === "inline-block")
              delete existingStyle.display;
            svgNode.props.style = {
              ...existingStyle,
              width: "1em",
              height: "1em"
            };
            children.push(svgNode);
          } else {
            children.push(emoji);
          }
        } else {
          children.push(emoji);
        }
        lastIndex = emojiIndex + emoji.length;
      }
      if (lastIndex < text.length) {
        const afterText = text.slice(lastIndex);
        if (afterText)
          children.push(afterText);
      }
      if (children.length >= 1) {
        const vnodeChildren = children.map((child) => {
          if (typeof child === "string") {
            return {
              type: "div",
              props: {
                children: child
              }
            };
          }
          return child;
        });
        node.props.children = vnodeChildren;
        node.props.style = node.props.style || {};
        node.props.style.display = "flex";
        node.props.style.alignItems = "center";
      }
    }
  },
  // Keep the existing logic for styling containers with emoji SVGs
  {
    filter: (node) => ["div", "p"].includes(node.type) && Array.isArray(node.props?.children) && node.props.children.some(
      (child) => child.type === "svg" && child.props?.["data-emoji"] || isEmojiSvg(child)
    ),
    transform: (node) => {
      node.props.style = node.props.style || {};
      node.props.style.display = "flex";
      node.props.style.alignItems = "center";
      node.props.children = node.props.children.map((child) => {
        if (typeof child === "string") {
          return {
            type: "div",
            props: {
              children: child
            }
          };
        }
        if (child.props?.class?.includes("emoji"))
          delete child.props.class;
        return child;
      });
    }
  }
]);

const RE_FLEX_CLASS = /\bflex\b/;
const INLINE_ELEMENTS = [
  "span",
  "a",
  "b",
  "i",
  "u",
  "em",
  "strong",
  "code",
  "abbr",
  "del",
  "ins",
  "mark",
  "sub",
  "sup",
  "small",
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5"
];
const flex = defineTransformer({
  filter: (node) => [...INLINE_ELEMENTS, "div"].includes(node.type) && (Array.isArray(node.props?.children) && node.props?.children.length >= 1) && !node.props?.class?.includes("hidden"),
  transform: (node) => {
    node.props.style = node.props.style || {};
    if (node.props.style.display) {
      return;
    }
    if (node.type === "div") {
      node.props.style.display = "flex";
      if (!node.props.style.flexDirection && !RE_FLEX_CLASS.test(node.props?.class || "")) {
        node.props.style.flexDirection = "column";
      }
      return;
    }
    node.props.style.display = "flex";
    if (!node.props.style.flexWrap) {
      node.props.style.flexWrap = "wrap";
    }
    if (node.props.style.flexWrap === "wrap" && !node.props.style.gap) {
      node.props.style.gap = "0.2em";
    }
  }
});

const nuxtIcon = defineTransformer([
  // need to make sure parent div has flex for the emoji to render inline
  {
    filter: (node) => node.type === "span" && node.props?.class?.includes("iconify"),
    transform: (node, e) => {
      {
        logger.warn(`When using the Nuxt Icon components in \`${e.options.component}\` you must provide \`mode="svg"\` to ensure correct rendering.`);
      }
    }
  },
  // need to make sure parent div has flex for the emoji to render inline
  {
    filter: (node) => node.type === "svg" && node.props?.class?.includes("iconify"),
    transform: (node) => {
      node.props.class = String(node.props.class).split(" ").filter((c) => !c.startsWith("iconify")).join(" ");
    }
  }
]);

function getDefaultFontFamily() {
  const fonts = resolvedFonts;
  const firstFont = fonts[0];
  if (firstFont)
    return `'${firstFont.family}', sans-serif`;
  return "sans-serif";
}
const RE_PX = /^(\d+(?:\.\d+)?)px$/;
function findAncestorPxDim(ancestors, prop) {
  for (let i = ancestors.length - 1; i >= 0; i--) {
    const s = ancestors[i].props?.style;
    if (s) {
      const v = typeof s[prop] === "string" ? s[prop].match(RE_PX)?.[1] : void 0;
      if (v)
        return Number(v);
    }
  }
}
const RE_PERCENT = /^\d+%$/;
function resolveSvgPercentDimensions(node, ancestors = []) {
  if (node.type === "svg") {
    for (const dim of ["width", "height"]) {
      const val = String(node.props?.[dim] || "");
      const isPercent = RE_PERCENT.test(val);
      if (isPercent) {
        const resolved = findAncestorPxDim(ancestors, dim) ?? resolveSvgDimension(node.props, node.props?.style, dim);
        if (resolved)
          node.props[dim] = resolved;
      }
    }
  }
  if (Array.isArray(node.props?.children)) {
    ancestors.push(node);
    for (const child of node.props.children) {
      if (child && typeof child === "object")
        resolveSvgPercentDimensions(child, ancestors);
    }
    ancestors.pop();
  }
}
async function createVNodes(ctx) {
  const fontFamilyOverride = ctx.options.props?.fontFamily;
  const font = fontFamilyOverride ? `'${fontFamilyOverride}', sans-serif` : getDefaultFontFamily();
  const vnodes = await createVNodes$1(ctx, { wrapperStyle: `font-family: ${font};` });
  walkTree(ctx, vnodes, [classes, flex, nuxtIcon]);
  await Promise.all(walkTree(ctx, vnodes, [emojis]));
  resolveSvgPercentDimensions(vnodes);
  return vnodes;
}

const _satoriFontCache = /* @__PURE__ */ new WeakMap();
const RE_SATORI_WARN_PREFIX = /^\s*WARN\s*/;
const RE_FONT_QUOTES = /^['"]|['"]$/g;
const RE_ALPHA_CHAR = /[a-z]/i;
function withWarningCapture(fn) {
  const warnings = [];
  const originalWarn = console.warn;
  console.warn = (...args) => {
    const msg = args.map((a) => typeof a === "string" ? a : JSON.stringify(a)).join(" ");
    if (msg.includes("WARN") || msg.includes("not supported") || msg.includes("Expected style"))
      warnings.push(msg.replace(RE_SATORI_WARN_PREFIX, ""));
    originalWarn.apply(console, args);
  };
  return fn().then((result) => ({ result, warnings })).finally(() => {
    console.warn = originalWarn;
  });
}
async function createSvg(event) {
  const { options } = event;
  const { satoriOptions: _satoriOptions } = useOgImageRuntimeConfig();
  const { fontFamilyOverride, defaultFont } = getDefaultFontFamily$1(options);
  const [satori, vnodes] = await Promise.all([
    getSatori(),
    createVNodes(event)
  ]);
  const codepoints = extractCodepoints(vnodes);
  const hasCustomFonts = Array.isArray(options.fonts) && options.fonts.length > 0;
  const fonts = await loadFontsForRenderer(event, {
    supportedFormats: /* @__PURE__ */ new Set(["ttf", "otf", "woff"]),
    component: options.component,
    fontFamilyOverride: fontFamilyOverride || defaultFont,
    codepoints,
    fontDefs: options.fonts
  });
  await event._nitro.hooks.callHook("nuxt-og-image:satori:vnodes", vnodes, event);
  const satoriFonts = !hasCustomFonts && _satoriFontCache.get(fonts) || fonts.map((f) => ({ ...f, name: f.family }));
  if (!hasCustomFonts)
    _satoriFontCache.set(fonts, satoriFonts);
  const loadedFamilies = new Set(satoriFonts.map((f) => f.name));
  const defaultFamily = satoriFonts[0]?.name;
  function resolveAvailableFamily(cssValue) {
    const families = cssValue.split(",").map((f) => f.trim().replace(RE_FONT_QUOTES, ""));
    const available = families.filter((f) => loadedFamilies.has(f));
    if (available.length > 0)
      return available.join(", ");
    return defaultFamily;
  }
  const fontFamily = {};
  for (const [key, val] of Object.entries(tw4FontVars)) {
    if (!key.startsWith("font-") || !val || !RE_ALPHA_CHAR.test(val))
      continue;
    const slot = key.slice(5);
    const resolved = resolveAvailableFamily(val);
    if (resolved)
      fontFamily[slot] = resolved;
  }
  const satoriOptions = defu$1(options.satori, _satoriOptions, {
    fonts: satoriFonts,
    tailwindConfig: Object.keys(fontFamily).length ? { theme: { fontFamily } } : void 0,
    embedFont: true,
    width: options.width,
    height: options.height
  });
  const { result, warnings } = await withWarningCapture(
    () => satori(vnodes, satoriOptions)
  );
  return { svg: result, warnings, fonts };
}
async function createPng(event) {
  const { resvgOptions } = useOgImageRuntimeConfig();
  const { svg } = await createSvg(event);
  if (!svg)
    throw new Error("Failed to create SVG");
  const options = defu$1(event.options.resvg, resvgOptions);
  const Resvg = await getResvg();
  const resvg = new Resvg(svg, options);
  const pngData = resvg.render();
  const png = pngData.asPng();
  if (typeof pngData.free === "function")
    pngData.free();
  if (typeof resvg.free === "function")
    resvg.free();
  return png;
}
async function createJpeg(event) {
  const { sharpOptions } = useOgImageRuntimeConfig();
  if (compatibility.sharp === false) {
    throw new Error("Sharp dependency is not accessible. Please check you have it installed and are using a compatible runtime.");
  }
  const { svg } = await createSvg(event);
  if (!svg) {
    throw new Error("Failed to create SVG for JPEG rendering.");
  }
  const svgBuffer = Buffer.from(svg);
  const sharp = await getSharp().catch(() => {
    throw new Error("Sharp dependency could not be loaded. Please check you have it installed and are using a compatible runtime.");
  });
  const options = defu$1(event.options.sharp, sharpOptions);
  return sharp(svgBuffer, options).jpeg(options).toBuffer();
}
const SatoriRenderer = {
  name: "satori",
  supportedFormats: ["png", "jpeg", "jpg", "json"],
  async createImage(e) {
    switch (e.extension) {
      case "png":
        return createPng(e);
      case "jpeg":
      case "jpg":
        return createJpeg(e);
    }
  },
  async debug(e) {
    const [vnodes, svgResult] = await Promise.all([
      createVNodes(e),
      createSvg(e)
    ]);
    return {
      vnodes,
      svg: svgResult.svg,
      warnings: svgResult.warnings,
      fontDebug: {
        ...loadAllFontsDebug(e.options.component),
        fonts: svgResult.fonts.map(({ data: _, ...f }) => ({
          ...f,
          size: _.byteLength
        }))
      }
    };
  }
};

const renderer$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  createSvg: createSvg,
  default: SatoriRenderer
}, Symbol.toStringTag, { value: 'Module' }));

const empty$1 = Object.freeze(
  Object.create(null, {
    __mock__: { get: () => true },
  }),
);

const empty = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: empty$1
}, Symbol.toStringTag, { value: 'Module' }));

const takumiInstance = { instance: void 0 };
async function ensureInstance() {
  takumiInstance.instance = takumiInstance.instance || await Promise.resolve().then(function () { return nodeDev$1; }).then((m) => m.default);
  await takumiInstance.instance.initWasmPromise;
  return takumiInstance.instance;
}
async function getTakumi() {
  return (await ensureInstance()).Renderer;
}
async function getExtractResourceUrls() {
  return (await ensureInstance()).extractResourceUrls;
}

const RE_RELATIVE_UNIT = /^([\d.]+)(em|rem)$/;
const RE_TW_TEXT_ARBITRARY = /(?:^|\s)text-\[(\d+(?:\.\d+)?)(px|rem|em)\]/;
const RE_FONT_SIZE_PX = /^(\d+(?:\.\d+)?)(px)?$/;
const DEFAULT_FONT_SIZE = 16;
const RE_UPPERCASE = /[A-Z]/g;
const RE_DQUOTE = /"/g;
const RE_AMP = /&/g;
const RE_LT = /</g;
const RE_GT = />/g;
async function createTakumiNodes(ctx) {
  const vnodeTree = await createVNodes$1(ctx);
  return await vnodeToTakumiNode(vnodeTree, DEFAULT_FONT_SIZE);
}
function pickNumericDimension(props, key) {
  const v = props[key];
  if (v == null)
    return void 0;
  const n = Number(v);
  return Number.isNaN(n) ? void 0 : n;
}
function resolveRelativeUnit(value, inheritedFontSize) {
  if (value == null)
    return void 0;
  const match = String(value).match(RE_RELATIVE_UNIT);
  if (!match)
    return void 0;
  const n = Number.parseFloat(match[1]);
  return match[2] === "rem" ? n * DEFAULT_FONT_SIZE : n * inheritedFontSize;
}
function extractFontSize(props, style) {
  if (style?.fontSize != null) {
    const m = String(style.fontSize).match(RE_FONT_SIZE_PX);
    if (m)
      return Number.parseFloat(m[1]);
  }
  const twStr = props.tw || props.class || "";
  const twMatch = twStr.match(RE_TW_TEXT_ARBITRARY);
  if (twMatch) {
    const val = Number.parseFloat(twMatch[1]);
    if (twMatch[2] === "px")
      return val;
  }
  return void 0;
}
async function vnodeToTakumiNode(vnode, inheritedFontSize) {
  const { style, children, class: cls, tw, src, ...rest } = vnode.props;
  const baseMetadata = {
    tw: tw || cls || void 0,
    style
  };
  if (vnode.type === "svg") {
    const hasExplicitFontSize = inheritedFontSize !== DEFAULT_FONT_SIZE;
    const isRelativeW = RE_RELATIVE_UNIT.test(String(rest.width ?? ""));
    const isRelativeH = RE_RELATIVE_UNIT.test(String(rest.height ?? ""));
    return {
      ...baseMetadata,
      type: "image",
      src: vnodeToHtmlString(vnode),
      // When em/rem + explicit parent font size → resolve to px.
      // When em/rem + default font size → leave undefined (takumi handles natively).
      // Otherwise → use standard resolution chain (numeric attrs → style → viewBox).
      width: isRelativeW ? hasExplicitFontSize ? resolveRelativeUnit(rest.width, inheritedFontSize) : void 0 : resolveSvgDimension(rest, style, "width"),
      height: isRelativeH ? hasExplicitFontSize ? resolveRelativeUnit(rest.height, inheritedFontSize) : void 0 : resolveSvgDimension(rest, style, "height")
    };
  }
  if (vnode.type === "img") {
    return {
      ...baseMetadata,
      type: "image",
      src: src || rest.href || "",
      width: pickNumericDimension(rest, "width"),
      height: pickNumericDimension(rest, "height")
    };
  }
  const nodeFontSize = extractFontSize(vnode.props, style);
  const childFontSize = nodeFontSize ?? inheritedFontSize;
  const containerStyle = { ...style };
  const w = pickNumericDimension(rest, "width");
  const h = pickNumericDimension(rest, "height");
  if (w != null && !containerStyle.width)
    containerStyle.width = w;
  if (h != null && !containerStyle.height)
    containerStyle.height = h;
  const hasStyle = Object.keys(containerStyle).length > 0;
  const containerMetadata = {
    tw: baseMetadata.tw,
    style: hasStyle ? containerStyle : void 0
  };
  const textContent = typeof children === "string" ? children : Array.isArray(children) && children.length >= 1 && children.every((c) => typeof c === "string") ? children.join("") : void 0;
  if (textContent !== void 0) {
    return {
      ...containerMetadata,
      type: "text",
      text: textContent
    };
  }
  if (Array.isArray(children)) {
    const takumiChildren = [];
    for (const child of children) {
      if (child && typeof child === "object")
        takumiChildren.push(await vnodeToTakumiNode(child, childFontSize));
      else if (typeof child === "string" && child.trim())
        takumiChildren.push({ type: "text", text: child.trim() });
    }
    return {
      ...containerMetadata,
      type: "container",
      children: takumiChildren.length ? takumiChildren : void 0
    };
  }
  return {
    ...containerMetadata,
    type: "container"
  };
}
function vnodeToHtmlString(vnode) {
  const { style, children, ...attrs } = vnode.props;
  const attrParts = [];
  const kebabCase = (str) => str.replace(RE_UPPERCASE, (m) => `-${m.toLowerCase()}`);
  if (vnode.type === "svg") {
    if (!attrs.xmlns)
      attrParts.push('xmlns="http://www.w3.org/2000/svg"');
    if (!attrs.width && vnode.props.width)
      attrParts.push(`width="${vnode.props.width}"`);
    if (!attrs.height && vnode.props.height)
      attrParts.push(`height="${vnode.props.height}"`);
  }
  const resolveValue = (val) => {
    if (typeof val === "string") {
      if (val.includes("calc("))
        return val;
      if (val.endsWith("em") || val.endsWith("rem")) {
        const num = Number.parseFloat(val);
        return !Number.isNaN(num) ? `${num * 16}px` : val;
      }
    }
    return val;
  };
  if (style && typeof style === "object") {
    const styleStr = Object.entries(style).filter(([_, v]) => v !== void 0 && v !== null && v !== "").map(([k, v]) => `${kebabCase(k)}:${resolveValue(v)}`).join(";");
    if (styleStr)
      attrParts.push(`style="${styleStr.replace(RE_DQUOTE, "&quot;")}"`);
  } else if (typeof style === "string") {
    attrParts.push(`style="${style.replace(RE_DQUOTE, "&quot;")}"`);
  }
  for (const [key, val] of Object.entries(attrs)) {
    if (key === "tw" || key === "class" || val == null)
      continue;
    const finalKey = SVG_CAMEL_ATTR_VALUES.has(key) ? key : kebabCase(key);
    attrParts.push(`${finalKey}="${String(resolveValue(val)).replace(RE_DQUOTE, "&quot;")}"`);
  }
  const open = attrParts.length ? `<${vnode.type} ${attrParts.join(" ")}>` : `<${vnode.type}>`;
  const inner = Array.isArray(children) ? children.map((c) => {
    if (typeof c === "string")
      return c.replace(RE_AMP, "&amp;").replace(RE_LT, "&lt;").replace(RE_GT, "&gt;");
    if (c && typeof c === "object")
      return vnodeToHtmlString(c);
    return "";
  }).join("") : typeof children === "string" ? children.replace(RE_AMP, "&amp;").replace(RE_LT, "&lt;").replace(RE_GT, "&gt;") : "";
  return `${open}${inner}</${vnode.type}>`;
}

const RE_QUOTES = /['"]/g;
async function getTakumiState(event) {
  const nitro = event._nitro;
  if (nitro._takumiState)
    return nitro._takumiState;
  const Renderer = await getTakumi();
  nitro._takumiState = {
    renderer: new Renderer(),
    loadedFontKeys: /* @__PURE__ */ new Set(),
    loadedFamilies: /* @__PURE__ */ new Set()
  };
  return nitro._takumiState;
}
async function loadFontsIntoRenderer(state, fonts) {
  for (const font of fonts) {
    if (!font.data)
      continue;
    const uniqueKey = font.cacheKey || `${font.family}-${font.weight}-${font.style}`;
    if (state.loadedFontKeys.has(uniqueKey))
      continue;
    const fontData = font.data instanceof ArrayBuffer ? new Uint8Array(font.data) : Uint8Array.from(font.data);
    try {
      await state.renderer.loadFont({
        name: font.family,
        data: fontData,
        weight: font.weight,
        style: font.style
      });
      state.loadedFamilies.add(font.family);
    } catch (err) {
      logger$1.warn(`Failed to load font "${font.family}" (weight: ${font.weight}) into takumi renderer: ${err.message}`);
    }
    state.loadedFontKeys.add(uniqueKey);
  }
}
function lookupFontFamily(family, loadedFamilies) {
  if (loadedFamilies.has(family))
    return family;
  for (const loaded of loadedFamilies) {
    if (loaded.toLowerCase() === family.toLowerCase())
      return loaded;
  }
}
function rewriteFontFamilies(node, loadedFamilies) {
  if (node.style?.fontFamily) {
    const families = node.style.fontFamily.split(",").map((f) => f.trim().replace(RE_QUOTES, ""));
    const resolved = families.map((f) => lookupFontFamily(f, loadedFamilies) || f);
    const seen = new Set(resolved.map((f) => f.toLowerCase()));
    for (const family of loadedFamilies) {
      if (!seen.has(family.toLowerCase())) {
        resolved.push(family);
        seen.add(family.toLowerCase());
      }
    }
    node.style.fontFamily = resolved.map((f) => `"${f}"`).join(", ");
  }
  if ("children" in node && node.children) {
    for (const child of node.children)
      rewriteFontFamilies(child, loadedFamilies);
  }
}
async function createImage(event, format) {
  const { options } = event;
  const { fontFamilyOverride, defaultFont } = getDefaultFontFamily$1(options);
  const nodes = await createTakumiNodes(event);
  const codepoints = extractCodepoints(nodes);
  const fonts = await loadFontsForRenderer(event, { supportedFormats: /* @__PURE__ */ new Set(["ttf", "woff2"]), component: options.component, fontFamilyOverride: fontFamilyOverride || defaultFont, codepoints });
  await event._nitro.hooks.callHook("nuxt-og-image:takumi:nodes", nodes, event);
  const state = await getTakumiState(event);
  await loadFontsIntoRenderer(state, fonts);
  const rootStyle = nodes.style ?? {};
  if (fontFamilyOverride && state.loadedFamilies.has(fontFamilyOverride)) {
    rootStyle.fontFamily = fontFamilyOverride;
  }
  nodes.style = rootStyle;
  rewriteFontFamilies(nodes, state.loadedFamilies);
  const extractResourceUrls = await getExtractResourceUrls();
  const resourceUrls = await extractResourceUrls(nodes);
  const origin = getNitroOrigin(event.e);
  const baseURL = event.runtimeConfig.app.baseURL;
  const fetchedResources = [];
  await Promise.all(resourceUrls.map(async (src) => {
    const urlsToTry = [src];
    if (src.startsWith("/")) {
      urlsToTry.push(withBase(src, origin));
      if (baseURL && baseURL !== "/" && !src.startsWith(baseURL)) {
        urlsToTry.push(withBase(withBase(src, baseURL), origin));
      }
    }
    for (const url of urlsToTry) {
      const data = await $fetch(url, { responseType: "arrayBuffer" }).catch(() => null);
      if (data) {
        fetchedResources.push({ src, data: new Uint8Array(data) });
        break;
      }
    }
  }));
  const maxDpr = event.runtimeConfig.security?.maxDpr || 2;
  const maxDim = event.runtimeConfig.security?.maxDimension || 2048;
  const dpr = Math.min(Math.max(1, options.takumi?.devicePixelRatio ?? 1), maxDpr);
  const renderOptions = defu$1(options.takumi, {
    width: Math.min(Number(options.width) * dpr, maxDim),
    height: Math.min(Number(options.height) * dpr, maxDim),
    format,
    fetchedResources,
    devicePixelRatio: dpr
  });
  return await state.renderer.render(nodes, renderOptions);
}
const TakumiRenderer = {
  name: "takumi",
  supportedFormats: ["png", "jpeg", "jpg", "webp", "json"],
  async createImage(e) {
    switch (e.extension) {
      case "png":
        return createImage(e, "png");
      case "jpeg":
      case "jpg":
        return createImage(e, "jpeg");
      case "webp":
        return createImage(e, "webp");
    }
  },
  async debug(e) {
    const [vnodes, fonts] = await Promise.all([
      createTakumiNodes(e),
      loadFontsForRenderer(e, { supportedFormats: /* @__PURE__ */ new Set(["ttf", "woff2"]), component: e.options.component })
    ]);
    return {
      vnodes,
      fonts: fonts.map(({ data: _, ...f }) => ({
        ...f,
        size: _.byteLength
      }))
    };
  }
};

const renderer$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: TakumiRenderer
}, Symbol.toStringTag, { value: 'Module' }));

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template
}, Symbol.toStringTag, { value: 'Module' }));

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: styles
}, Symbol.toStringTag, { value: 'Module' }));

function renderPayloadResponse(ssrContext) {
	return {
		body: encodeForwardSlashes(stringify(splitPayload(ssrContext).payload, ssrContext["~payloadReducers"])) ,
		statusCode: getResponseStatus(ssrContext.event),
		statusMessage: getResponseStatusText(ssrContext.event),
		headers: {
			"content-type": "application/json;charset=utf-8" ,
			"x-powered-by": "Nuxt"
		}
	};
}
function renderPayloadJsonScript(opts) {
	const contents = opts.data ? encodeForwardSlashes(stringify(opts.data, opts.ssrContext["~payloadReducers"])) : "";
	const payload = {
		"type": "application/json",
		"innerHTML": contents,
		"data-nuxt-data": appId,
		"data-ssr": !(opts.ssrContext.noSSR)
	};
	{
		payload.id = "__NUXT_DATA__";
	}
	if (opts.src) {
		payload["data-src"] = opts.src;
	}
	const config = uneval(opts.ssrContext.config);
	return [payload, { innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}` }];
}
/**
* Encode forward slashes as unicode escape sequences to prevent
* Google from treating them as internal links and trying to crawl them.
* @see https://github.com/nuxt/nuxt/issues/24175
*/
function encodeForwardSlashes(str) {
	return str.replaceAll("/", "\\u002F");
}
function splitPayload(ssrContext) {
	const { data, prerenderedAt, ...initial } = ssrContext.payload;
	return {
		initial: {
			...initial,
			prerenderedAt
		},
		payload: {
			data,
			prerenderedAt
		}
	};
}

const renderSSRHeadOptions = {"omitLineBreaks":true};

// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__buildAssetsURL = buildAssetsURL;
// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__publicAssetsURL = publicAssetsURL;
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const PAYLOAD_FILENAME = "_payload.json" ;
const handler = defineRenderHandler(async (event) => {
	const nitroApp = useNitroApp();
	// Whether we're rendering an error page
	const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
	if (ssrError && !("__unenv__" in event.node.req)) {
		throw createError({
			status: 404,
			statusText: "Page Not Found: /__nuxt_error",
			message: "Page Not Found: /__nuxt_error"
		});
	}
	// Initialize ssr context
	const ssrContext = createSSRContext(event);
	// needed for hash hydration plugin to work
	const headEntryOptions = { mode: "server" };
	ssrContext.head.push(appHead, headEntryOptions);
	if (ssrError) {
		// eslint-disable-next-line @typescript-eslint/no-deprecated
		const status = ssrError.status || ssrError.statusCode;
		if (status) {
			// eslint-disable-next-line @typescript-eslint/no-deprecated
			ssrError.status = ssrError.statusCode = Number.parseInt(status);
		}
		if (typeof ssrError.data === "string") {
			try {
				ssrError.data = destr(ssrError.data);
			} catch {}
		}
		setSSRError(ssrContext, ssrError);
	}
	// Get route options (for `ssr: false`, `isr`, `cache` and `noScripts`)
	const routeOptions = getRouteRules(event);
	// Whether we are prerendering route or using ISR/SWR caching
	const _PAYLOAD_EXTRACTION = !ssrContext.noSSR && (NUXT_RUNTIME_PAYLOAD_EXTRACTION);
	// When NUXT_PAYLOAD_INLINE is true (payloadExtraction: 'client'), we inline the full payload
	// in the HTML to avoid a separate _payload.json fetch on initial load (which would trigger a
	// second render or lambda invocation). The _payload.json endpoint still works for client-side nav.
	const _PAYLOAD_INLINE = !_PAYLOAD_EXTRACTION || NUXT_PAYLOAD_INLINE;
	const isRenderingPayload = (_PAYLOAD_EXTRACTION || routeOptions.prerender) && PAYLOAD_URL_RE.test(ssrContext.url);
	if (isRenderingPayload) {
		const url = ssrContext.url.substring(0, ssrContext.url.lastIndexOf("/")) || "/";
		ssrContext.url = url;
		event._path = event.node.req.url = url;
	}
	if (routeOptions.ssr === false) {
		ssrContext.noSSR = true;
	}
	const payloadURL = _PAYLOAD_EXTRACTION ? joinURL(ssrContext.runtimeConfig.app.cdnURL || ssrContext.runtimeConfig.app.baseURL, ssrContext.url.replace(/\?.*$/, ""), PAYLOAD_FILENAME) + "?" + ssrContext.runtimeConfig.app.buildId : undefined;
	// Render app
	const renderer = await getRenderer(ssrContext);
	const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
		// We use error to bypass full render if we have an early response we can make
		// TODO: remove _renderResponse in nuxt v5
		if ((ssrContext["~renderResponse"] || ssrContext._renderResponse) && error.message === "skipping render") {
			return {};
		}
		// Use explicitly thrown error in preference to subsequent rendering errors
		const _err = !ssrError && ssrContext.payload?.error || error;
		await ssrContext.nuxt?.hooks.callHook("app:error", _err);
		throw _err;
	});
	// Render inline styles
	// TODO: remove _renderResponse in nuxt v5
	const inlinedStyles = [];
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult: _rendered
	});
	if (ssrContext["~renderResponse"] || ssrContext._renderResponse) {
		// TODO: remove _renderResponse in nuxt v5
		return ssrContext["~renderResponse"] || ssrContext._renderResponse;
	}
	// Handle errors
	if (ssrContext.payload?.error && !ssrError) {
		throw ssrContext.payload.error;
	}
	// Directly render payload routes
	if (isRenderingPayload) {
		const response = renderPayloadResponse(ssrContext);
		return response;
	}
	const NO_SCRIPTS = routeOptions.noScripts;
	// Setup head
	const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
	// 1. Preload payloads and app manifest
	// Skip preload when inlining full payload in HTML (no separate fetch needed for initial load)
	if (_PAYLOAD_EXTRACTION && !_PAYLOAD_INLINE && !NO_SCRIPTS) {
		ssrContext.head.push({ link: [{
			rel: "preload",
			as: "fetch",
			crossorigin: "anonymous",
			href: payloadURL
		} ] }, headEntryOptions);
	}
	// 2. Styles
	if (inlinedStyles.length) {
		ssrContext.head.push({ style: inlinedStyles });
	}
	const link = [];
	for (const resource of Object.values(styles)) {
		// Do not add links to resources that are inlined (vite v5+)
		if ("inline" in getQuery(resource.file)) {
			continue;
		}
		// Add CSS links in <head> for CSS files
		// - in production
		// - in dev mode when not rendering an island
		link.push({
			rel: "stylesheet",
			href: renderer.rendererContext.buildAssetsURL(resource.file),
			crossorigin: ""
		});
	}
	if (link.length) {
		ssrContext.head.push({ link }, headEntryOptions);
	}
	if (!NO_SCRIPTS) {
		// 4. Resource Hints
		// Remove lazy hydrated modules from ssrContext.modules so they don't get preloaded
		// (CSS links are already added above, this only affects JS preloads)
		if (ssrContext["~lazyHydratedModules"]) {
			for (const id of ssrContext["~lazyHydratedModules"]) {
				ssrContext.modules?.delete(id);
			}
		}
		ssrContext.head.push({ link: getPreloadLinks(ssrContext, renderer.rendererContext) }, headEntryOptions);
		ssrContext.head.push({ link: getPrefetchLinks(ssrContext, renderer.rendererContext) }, headEntryOptions);
		// 5. Payloads
		ssrContext.head.push({ script: _PAYLOAD_INLINE ? renderPayloadJsonScript({
			ssrContext,
			data: ssrContext.payload
		})  : renderPayloadJsonScript({
			ssrContext,
			data: splitPayload(ssrContext).initial,
			src: payloadURL
		})  }, {
			...headEntryOptions,
			tagPosition: "bodyClose",
			tagPriority: "high"
		});
	}
	// 6. Scripts
	if (!routeOptions.noScripts) {
		const tagPosition = "head";
		ssrContext.head.push({ script: Object.values(scripts).map((resource) => ({
			type: resource.module ? "module" : null,
			src: renderer.rendererContext.buildAssetsURL(resource.file),
			defer: resource.module ? null : true,
			tagPosition,
			crossorigin: ""
		})) }, headEntryOptions);
	}
	const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(ssrContext.head, renderSSRHeadOptions);
	// Create render context
	const htmlContext = {
		htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
		head: normalizeChunks([headTags]),
		bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
		bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
		body: [replaceIslandTeleports(ssrContext, _rendered.html) , APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG],
		bodyAppend: [bodyTags]
	};
	// Allow hooking into the rendered result
	await nitroApp.hooks.callHook("render:html", htmlContext, { event });
	// Construct HTML response
	return {
		body: renderHTMLDocument(htmlContext),
		statusCode: getResponseStatus(event),
		statusMessage: getResponseStatusText(event),
		headers: {
			"content-type": "text/html;charset=utf-8",
			"x-powered-by": "Nuxt"
		}
	};
});
function normalizeChunks(chunks) {
	const result = [];
	for (const _chunk of chunks) {
		const chunk = _chunk?.trim();
		if (chunk) {
			result.push(chunk);
		}
	}
	return result;
}
function joinTags(tags) {
	return tags.join("");
}
function joinAttrs(chunks) {
	if (chunks.length === 0) {
		return "";
	}
	return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
	return "<!DOCTYPE html>" + `<html${joinAttrs(html.htmlAttrs)}>` + `<head>${joinTags(html.head)}</head>` + `<body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>` + "</html>";
}

const renderer = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: handler
}, Symbol.toStringTag, { value: 'Module' }));

const debug_json = defineEventHandler(async (e) => {
  setHeader(e, "Content-Type", "application/json");
  const runtimeConfig = useOgImageRuntimeConfig();
  return {
    siteConfigUrl: getSiteConfig(e).url,
    origin: getNitroOrigin(e),
    componentNames,
    runtimeConfig,
    compatibility,
    resolvedFonts,
    availableFonts,
    fontRequirements
  };
});

const debug_json$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: debug_json
}, Symbol.toStringTag, { value: 'Module' }));

const PAYLOAD_REGEX = /<script.+id="nuxt-og-image-options"[^>]*>(.+?)<\/script>/;
function extractOptionsFromHtml(html) {
  const match = String(html).match(PAYLOAD_REGEX);
  if (!match?.[1])
    return [];
  return parse$1(match[1]);
}
async function doFetchWithErrorHandling(fetch, path) {
  const res = await fetch(path, {
    redirect: "follow",
    headers: {
      accept: "text/html"
    }
  }).catch((err) => {
    return err;
  });
  let errorDescription;
  if (res.status >= 300 && res.status < 400) {
    if (res.headers.has("location")) {
      return await doFetchWithErrorHandling(fetch, res.headers.get("location") || "");
    }
    errorDescription = `${res.status} redirected to ${res.headers.get("location") || "unknown"}`;
  } else if (res.status >= 400) {
    errorDescription = `${res.status} error: ${res.statusText}`;
  }
  if (errorDescription) {
    return [null, createError({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] Failed to parse \`${path}\` for og-image extraction. ${errorDescription}`
    })];
  }
  return [res._data || await res.text(), null];
}
async function fetchPathHtmlAndExtractOptions(e, path, cacheKey) {
  await htmlPayloadCache.getItem(cacheKey);
  let [html, err] = await doFetchWithErrorHandling(e.fetch, path);
  if (err) {
    logger.warn(err);
  }
  if (!html) {
    const [fallbackHtml, err2] = await doFetchWithErrorHandling(globalThis.$fetch.raw, path);
    if (err2) {
      return err2;
    }
    html = fallbackHtml;
  }
  if (!html) {
    return createError({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] Failed to read the path ${path} for og-image extraction, returning no HTML.`
    });
  }
  const [root, images] = extractSocialPreviewTags(html);
  const options = extractOptionsFromHtml(html);
  const payload = {
    options,
    socialPreview: { root, images }
  };
  return payload;
}

const RE_SCRIPT_TAG = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
async function html(ctx) {
  const { options } = ctx;
  const fonts = resolvedFonts;
  if (!options.component) {
    throw createError({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] Rendering an invalid component. Received options: ${JSON.stringify(options)}.`
    });
  }
  const island = await fetchIsland(ctx.e, ctx.options.component, typeof ctx.options.props !== "undefined" ? ctx.options.props : ctx.options);
  const head = createHeadCore();
  head.push(island.head);
  let defaultFontFamily = "sans-serif";
  const firstFont = fonts[0];
  if (firstFont)
    defaultFontFamily = firstFont.family.replaceAll("+", " ");
  await applyEmojis(ctx, island);
  let html2 = island.html;
  const scale = options.props?.scale || 1;
  const scaledWidth = Math.round(Number(options.width) * scale);
  const scaledHeight = Math.round(Number(options.height) * scale);
  const fontFaces = fonts.map((font) => {
    const ext = font.src.split(".").pop()?.toLowerCase();
    const format = ext === "woff2" ? "woff2" : ext === "woff" ? "woff" : "truetype";
    return `@font-face {
  font-family: '${font.family.replaceAll("+", " ")}';
  font-style: ${font.style};
  font-weight: ${font.weight};
  src: url('${font.src}') format('${format}');
}`;
  }).join("\n");
  const bgColor = options.props?.colorMode === "dark" ? "#1b1b1b" : "#fff";
  head.push({
    style: [
      {
        innerHTML: `/* reset */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
img, svg { display: block; max-width: 100%; }

/* viewport */
html, body {
  width: ${scaledWidth}px;
  height: ${scaledHeight}px;
  overflow: hidden;
  font-family: '${defaultFontFamily}', sans-serif;
  background-color: ${bgColor};
}

/* scale wrapper */
.og-scale-wrapper {
  transform: scale(${scale});
  transform-origin: top left;
  width: ${options.width}px;
  height: ${options.height}px;
}
.og-scale-wrapper > :first-child {
  width: 100%;
  height: 100%;
}

/* match satori flex defaults for divs */
div { display: flex; }
div:has(div, p, ul, ol, li, blockquote, pre, hr, table, dl) {
  flex-direction: column;
}
div:not(:has(div, p, ul, ol, li, blockquote, pre, hr, table, dl)) {
  flex-wrap: wrap;
  gap: 12px;
}

svg[data-emoji] { display: inline-block; }

/* fonts */
${fontFaces}`
      }
    ],
    meta: [
      { charset: "utf-8" }
    ]
  });
  RE_SCRIPT_TAG.lastIndex = 0;
  html2 = html2.replaceAll(RE_SCRIPT_TAG, "");
  const headChunk = await renderSSRHead(head);
  return `<!DOCTYPE html>
<html ${headChunk.htmlAttrs}>
<head>${headChunk.headTags}</head>
<body ${headChunk.bodyAttrs}>${headChunk.bodyTagsOpen}<div class="og-scale-wrapper" data-v-inspector-ignore="true">${html2}</div>${headChunk.bodyTags}</body>
</html>`;
}

async function useOgImageBufferCache(ctx, options) {
  let enabled = false;
  prefixStorage(useStorage(), withTrailingSlash(options.baseCacheKey || "/"));
  ctx.key;
  let cachedItem = false;
  {
    setHeader(ctx.e, "Cache-Control", "no-cache, no-store, must-revalidate");
    setHeader(ctx.e, "Pragma", "no-cache");
    setHeader(ctx.e, "Expires", "0");
  }
  return {
    enabled,
    cachedItem,
    async update(item) {
      return;
    }
  };
}

async function imageEventHandler(e) {
  const ctx = await resolveContext(e).catch((err) => {
    logger$1.error(`resolveContext error for ${e.path}:`, err?.message || err);
    throw err;
  });
  if (ctx instanceof H3Error)
    return ctx;
  const { isDevToolsContextRequest, extension, renderer } = ctx;
  const { debug, baseCacheKey, security } = useOgImageRuntimeConfig();
  if (isDevToolsContextRequest) {
    setHeader(e, "Content-Type", "application/json");
    const [extract, rendererDebug] = await Promise.all([
      fetchPathHtmlAndExtractOptions(e, ctx.basePath, ctx.key),
      renderer.debug ? renderer.debug(ctx).catch((err) => {
        logger$1.debug(`renderer.debug failed for ${ctx.options.component}: ${err?.message || err}`);
        return {};
      }) : {}
    ]);
    return {
      extract,
      siteUrl: getSiteConfig(e).url,
      ...rendererDebug
    };
  }
  switch (extension) {
    case "html":
      setHeader(e, "Content-Type", `text/html`);
      return html(ctx);
    case "svg": {
      if (ctx.renderer.name !== "satori") {
        return createError({
          statusCode: 400,
          statusMessage: `[Nuxt OG Image] Generating ${extension}'s with ${renderer.name} is not supported.`
        });
      }
      setHeader(e, "Content-Type", `image/svg+xml`);
      const debugResult = await ctx.renderer.debug(ctx);
      return debugResult.svg;
    }
    case "png":
    case "jpeg":
    case "jpg":
      if (!renderer.supportedFormats.includes(extension)) {
        return createError({
          statusCode: 400,
          statusMessage: `[Nuxt OG Image] Generating ${extension}'s with ${renderer.name} is not supported.`
        });
      }
      setHeader(e, "Content-Type", `image/${extension === "jpg" ? "jpeg" : extension}`);
      break;
    default:
      return createError({
        statusCode: 400,
        statusMessage: `[Nuxt OG Image] Invalid request for og.${extension}.`
      });
  }
  const cacheApi = await useOgImageBufferCache(ctx, {
    cacheMaxAgeSeconds: ctx.options.cacheMaxAgeSeconds,
    baseCacheKey
  });
  if (typeof cacheApi === "undefined")
    return;
  if (cacheApi instanceof H3Error)
    return cacheApi;
  let image = cacheApi.cachedItem;
  if (!image) {
    const { security: security2 } = useOgImageRuntimeConfig();
    const timeout = security2?.renderTimeout || 15e3;
    let timer;
    image = await Promise.race([
      renderer.createImage(ctx),
      new Promise((_, reject) => {
        timer = setTimeout(() => reject(new Error(`OG image render timed out after ${timeout}ms`)), timeout);
      })
    ]).catch((err) => {
      if (err?.message?.includes("timed out")) {
        logger$1.error(`renderer.createImage timeout for ${e.path}`);
        return createError({ statusCode: 408, statusMessage: `[Nuxt OG Image] Request timed out while waiting for OG image render.` });
      }
      logger$1.error(`renderer.createImage error for ${e.path}:`, err?.stack || err?.message || err);
      throw err;
    }).finally(() => {
      clearTimeout(timer);
    });
    if (image instanceof H3Error)
      return image;
    if (!image) {
      return createError({
        statusCode: 500,
        statusMessage: `Failed to generate og.${extension}.`
      });
    }
    await cacheApi.update(image);
  }
  return image;
}

const image = defineEventHandler(imageEventHandler);

const image$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: image
}, Symbol.toStringTag, { value: 'Module' }));

const workerCode$1 = `
const { createRequire } = require('node:module')
const _require = createRequire(process.cwd() + '/')
const { parentPort } = require('node:worker_threads')
const { Resvg } = _require('@resvg/resvg-js')

parentPort.on('message', ({ id, svg, options }) => {
  try {
    const resvg = new Resvg(svg, options)
    const png = resvg.render().asPng()
    // Always slice to create a standard ArrayBuffer \u2014 native addon buffers
    // use external memory that can't be transferred via postMessage
    const ab = png.buffer.slice(png.byteOffset, png.byteOffset + png.byteLength)
    parentPort.postMessage({ id, png: ab }, [ab])
  } catch (err) {
    parentPort.postMessage({ id, error: err?.message || String(err) })
  }
})
`;
let worker$1 = null;
let requestId$1 = 0;
const pending$1 = /* @__PURE__ */ new Map();
function killWorker$1() {
  if (!worker$1)
    return;
  worker$1.terminate();
  worker$1 = null;
  for (const [id, p] of pending$1) {
    clearTimeout(p.timer);
    pending$1.delete(id);
    p.reject(new Error("Resvg worker terminated"));
  }
}
const signalKey$1 = Symbol.for("og-image:resvg-worker-cleanup");
if (!globalThis[signalKey$1]) {
  globalThis[signalKey$1] = true;
  process.on("exit", killWorker$1);
}
function createWorker$1() {
  const w = new Worker(workerCode$1, { eval: true });
  w.on("message", ({ id, png, error }) => {
    const p = pending$1.get(id);
    if (p) {
      clearTimeout(p.timer);
      pending$1.delete(id);
      if (error)
        p.reject(new Error(error));
      else
        p.resolve(Buffer.from(png));
    }
  });
  w.on("error", (err) => {
    for (const [id, p] of pending$1) {
      clearTimeout(p.timer);
      pending$1.delete(id);
      p.reject(err);
    }
    worker$1 = null;
  });
  w.on("exit", (code) => {
    if (code !== 0) {
      for (const [id, p] of pending$1) {
        clearTimeout(p.timer);
        pending$1.delete(id);
        p.reject(new Error(`Resvg worker exited with code ${code}`));
      }
    }
    worker$1 = null;
  });
  w.unref();
  return w;
}
function renderPng(svg, options) {
  return new Promise((resolve, reject) => {
    if (!worker$1)
      worker$1 = createWorker$1();
    const id = ++requestId$1;
    const timer = setTimeout(() => {
      pending$1.delete(id);
      reject(new Error("resvg worker timed out \u2014 killing worker"));
      killWorker$1();
    }, 3e4);
    pending$1.set(id, { resolve, reject, timer });
    worker$1.postMessage({ id, svg, options });
  });
}
class ResvgWorkerProxy {
  svg;
  options;
  pngPromise = null;
  constructor(svg, options) {
    this.svg = svg;
    this.options = options;
  }
  render() {
    if (!this.pngPromise)
      this.pngPromise = renderPng(this.svg, this.options);
    return {
      asPng: () => this.pngPromise
    };
  }
}
const nodeDev$2 = {
  initWasmPromise: Promise.resolve(),
  Resvg: ResvgWorkerProxy
};

const nodeDev$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: nodeDev$2
}, Symbol.toStringTag, { value: 'Module' }));

const node = {
  initWasmPromise: Promise.resolve(),
  satori: _satori
};

const node$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: node
}, Symbol.toStringTag, { value: 'Module' }));

const workerCode = `
const { createRequire } = require('node:module')
const _require = createRequire(process.cwd() + '/')
const { parentPort } = require('node:worker_threads')
const { Renderer, extractResourceUrls } = _require('@takumi-rs/core')

let renderer = new Renderer()

parentPort.on('message', async ({ id, type, newFonts, nodes, options }) => {
  try {
    if (type === 'extractResourceUrls') {
      const urls = extractResourceUrls(nodes)
      parentPort.postMessage({ id, urls })
      return
    }
    const fontWarnings = []
    for (const font of (newFonts || [])) {
      try {
        await renderer.loadFont({
          name: font.name,
          data: font.data,
          weight: font.weight,
          style: font.style,
        })
      } catch (e) {
        fontWarnings.push({ name: font.name, weight: font.weight, error: e?.message || String(e) })
      }
    }
    const image = await renderer.render(nodes, options)
    // Always slice to create a standard ArrayBuffer \u2014 native addon buffers
    // use external memory that can't be transferred via postMessage
    const ab = image.buffer.slice(image.byteOffset, image.byteOffset + image.byteLength)
    parentPort.postMessage({ id, image: ab, fontWarnings }, [ab])
  } catch (err) {
    parentPort.postMessage({ id, error: err?.message || String(err) })
  }
})
`;
let worker = null;
let workerGeneration = 0;
let requestId = 0;
const pending = /* @__PURE__ */ new Map();
function killWorker() {
  if (!worker)
    return;
  worker.terminate();
  worker = null;
  for (const [id, p] of pending) {
    clearTimeout(p.timer);
    pending.delete(id);
    p.reject(new Error("Takumi worker terminated"));
  }
}
const signalKey = Symbol.for("og-image:takumi-worker-cleanup");
if (!globalThis[signalKey]) {
  globalThis[signalKey] = true;
  process.on("exit", killWorker);
}
function createWorker() {
  workerGeneration++;
  const w = new Worker(workerCode, { eval: true });
  w.on("message", ({ id, image, urls, error, fontWarnings }) => {
    const p = pending.get(id);
    if (p) {
      clearTimeout(p.timer);
      pending.delete(id);
      if (error)
        p.reject(new Error(error));
      else if (urls !== void 0)
        p.resolve(urls);
      else
        p.resolve({ image: Buffer.from(image), fontWarnings });
    }
  });
  w.on("error", (err) => {
    for (const [id, p] of pending) {
      clearTimeout(p.timer);
      pending.delete(id);
      p.reject(err);
    }
    worker = null;
  });
  w.on("exit", (code) => {
    if (code !== 0) {
      for (const [id, p] of pending) {
        clearTimeout(p.timer);
        pending.delete(id);
        p.reject(new Error(`Takumi worker exited with code ${code}`));
      }
    }
    worker = null;
  });
  w.unref();
  return w;
}
function ensureWorker() {
  if (!worker)
    worker = createWorker();
}
function postToWorker(msg, timeoutMs = 3e4) {
  return new Promise((resolve, reject) => {
    ensureWorker();
    const id = ++requestId;
    const timer = setTimeout(() => {
      pending.delete(id);
      reject(new Error("takumi worker timed out \u2014 killing worker"));
      killWorker();
    }, timeoutMs);
    pending.set(id, { resolve, reject, timer });
    worker.postMessage({ id, ...msg });
  });
}
function extractResourceUrls(nodes) {
  return postToWorker({ type: "extractResourceUrls", nodes });
}
class RendererWorkerProxy {
  allFonts = [];
  allFontKeys = /* @__PURE__ */ new Set();
  pendingFonts = [];
  syncedGeneration = -1;
  loadFont(font) {
    const key = `${font.name}|${font.weight || 400}|${font.style || "normal"}`;
    if (this.allFontKeys.has(key))
      return;
    this.allFontKeys.add(key);
    this.allFonts.push(font);
    this.pendingFonts.push(font);
  }
  render(nodes, options) {
    ensureWorker();
    let fontsToSend;
    if (this.syncedGeneration !== workerGeneration) {
      fontsToSend = [...this.allFonts];
      this.pendingFonts = [];
    } else {
      fontsToSend = this.pendingFonts.splice(0);
    }
    this.syncedGeneration = workerGeneration;
    return postToWorker({ type: "render", newFonts: fontsToSend, nodes, options }).then((result) => {
      if (result.fontWarnings?.length) {
        for (const w of result.fontWarnings)
          console.warn(`[nuxt-og-image] Failed to load font "${w.name}" (weight: ${w.weight}) into takumi renderer: ${w.error}`);
      }
      return result.image;
    });
  }
}
const nodeDev = {
  initWasmPromise: Promise.resolve(),
  Renderer: RendererWorkerProxy,
  extractResourceUrls
};

const nodeDev$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: nodeDev
}, Symbol.toStringTag, { value: 'Module' }));
//# sourceMappingURL=index.mjs.map
