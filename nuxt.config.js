export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title:
      'mcmaster-carr中国代理-berg定位销-helicoil螺套-工业高精密紧固件-北富联机电有限公司',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '深圳市北富联机电有限公司(northfull.com)是一家工业高精密紧固件的供应商,主营mcmaster-carr中国代理,helicoil螺套,mcmaster代理,recoil螺纹螺套,mcmastercarr亚洲代理,helicoil螺纹护套，berg定位销,berg代理销售.',
      },
      {
        hid: 'title',
        name: 'title',
        content:
          'mcmaster-carr中国代理-berg定位销-helicoil螺套-工业高精密紧固件-北富联机电有限公司',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'Helicoil螺套,helicoil螺纹护套,钢丝螺套,螺纹护套,自攻螺套，插销螺套,螺纹护套，mcmaster-carr,1084-6EN090,mcmastercarr中国,mcmastercarr代理,mcmastercarr,mcmastercarr经销商,mcmastercarr一级代理商,mcmastercarr官网,mcmaster中国官网,mcmaster-carr 中国总代理,mcmaster-carr标准件，berg定位销，berg中国代理,mcmastercarr螺栓，northfull,northfull.com,北富联机电,深圳北富联机电,深圳市北富联机电有限公司,北富联机电有限公司，McMaster亚洲代理',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['ant-design-vue/dist/antd.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/antd-ui'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module', 开启eslint
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    less: ['./assets/css/global.less'],
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
