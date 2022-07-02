export default {
  server: {
    // 配置Nuxt服务器
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
    timing: false,
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title:
      'mcmaster中国代理 _berg定位销_helicoil螺套_keensert插销螺套_mcmaster carr官网_深圳市北富联机电有限公司',
    script: [
      { src: '//js.users.51.la/21052033.js' },
      {
        src: '//sdk.51.la/js-sdk-pro.min.js',
        charset: 'UTF-8',
        id: 'LA_COLLECT" ',
      },
      {
        src: '/js/trackInit.js',
      },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'mcmaster中国代理 ,berg定位销,helicoil螺套,keensert插销螺套，mcmastercarr螺丝,深圳市北富联机电有限公司,北富联,mcmaster,mcmaster carr官网,helicoil钢丝螺套,mcmaster内六角螺钉,麦克马斯特mcmaster, 高端五金件,kato自攻螺套,mcmaster亚洲代理,helicoil螺纹护套',
      },
      {
        hid: 'title',
        name: 'title',
        content:
          'mcmaster中国代理 _Keensert插销螺套_berg定位销_helicoil螺套_keensert螺纹护套_mcmastercarr螺丝_深圳市北富联机电有限公司',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'mcmaster中国代理 ,berg定位销,helicoil螺套,keensert插销螺套，mcmastercarr螺丝,深圳市北富联机电有限公司,北富联,mcmaster,mcmaster carr官网,helicoil钢丝螺套,mcmaster内六角螺钉,麦克马斯特mcmaster, 高端五金件,kato自攻螺套,mcmaster亚洲代理,helicoil螺纹护套',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/nf.png' },
      {
        rel: 'stylesheet',
        href: '/bootstrap.min.css',
      },
    ],
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
  // rootDir: __dirname,
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
