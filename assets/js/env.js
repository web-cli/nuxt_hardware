const HOST = window.location.host
const IS_PROD = /northfull/.test(HOST)
const IS_DEV = !IS_PROD
export { IS_DEV, IS_PROD }
