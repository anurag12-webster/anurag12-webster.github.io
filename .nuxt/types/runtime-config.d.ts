import { RuntimeConfig as UserRuntimeConfig, PublicRuntimeConfig as UserPublicRuntimeConfig } from 'nuxt/schema'
  interface SharedRuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },

   content: {
      databaseVersion: string,

      version: string,

      database: {
         type: string,

         filename: string,
      },

      localDatabase: {
         type: string,

         filename: string,
      },

      integrityCheck: boolean,
   },

   "nuxt-site-config": {
      stack: Array<{

      }>,

      version: string,

      debug: boolean,

      multiTenancy: Array<any>,
   },

   "nuxt-og-image": {
      version: string,

      satoriOptions: any,

      resvgOptions: any,

      sharpOptions: any,

      publicStoragePath: string,

      defaults: {
         emojis: string,

         extension: string,

         width: number,

         height: number,

         cacheMaxAgeSeconds: number,
      },

      debug: boolean,

      baseCacheKey: string,

      buildCacheDir: any,

      hasNuxtIcon: boolean,

      colorPreference: string,

      isNuxtContentDocumentDriven: boolean,

      cacheQueryParams: boolean,

      cssFramework: string,

      browser: any,

      security: {
         strict: boolean,

         maxDimension: number,

         maxDpr: number,

         renderTimeout: number,

         maxQueryParamSize: any,

         restrictRuntimeImagesToOrigin: boolean,

         secret: string,
      },

      componentDirs: Array<string>,

      srcDir: string,

      rootDir: string,

      communityTemplatesDir: string,
   },
  }
  interface SharedPublicRuntimeConfig {
   mdc: {
      components: {
         prose: boolean,

         map: any,

         customElements: Array<any>,
      },

      headings: {
         anchorLinks: {
            h1: boolean,

            h2: boolean,

            h3: boolean,

            h4: boolean,

            h5: boolean,

            h6: boolean,
         },
      },

      highlight: {
         noApiRoute: boolean,

         highlighter: string,

         theme: {
            default: string,

            dark: string,
         },

         shikiEngine: string,

         langs: Array<string>,
      },
   },

   content: {
      wsUrl: string,
   },
  }
declare module '@nuxt/schema' {
  interface RuntimeConfig extends UserRuntimeConfig {}
  interface PublicRuntimeConfig extends UserPublicRuntimeConfig {}
}
declare module 'nuxt/schema' {
  interface RuntimeConfig extends SharedRuntimeConfig {}
  interface PublicRuntimeConfig extends SharedPublicRuntimeConfig {}
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: UserRuntimeConfig
        }
      }