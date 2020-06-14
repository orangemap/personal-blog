'use strict'

const ApiREG = /^\/api/i

module.exports = app => {
  return async (ctx, next) => {
    if (ApiREG.test(ctx.url)) {
      ctx.url = ctx.url.replace(ApiREG, '')
      await next()
    } else {
      await next()
    }
  }
}
