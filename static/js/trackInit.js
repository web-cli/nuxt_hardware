export function trackInit() {
  window._agl = window._agl || []
  console.log('99999')
  ;(function () {
    window._agl.push(['production', '_f7L2XwGXjyszb4d1e2oxPybgD'])
    ;(function () {
      const agl = document.createElement('script')
      agl.type = 'text/javascript'
      agl.async = true
      agl.src =
        'https://fxgate.baidu.com/angelia/fcagl.js?production=_f7L2XwGXjyszb4d1e2oxPybgD'
      const s = document.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(agl, s)
    })()
  })()
}
trackInit()
