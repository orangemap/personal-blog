module.exports = app => {
  return async function errorHandler(ctx, next) {
    try {
      await next()
    } catch (err) {
      ctx.logger.error('request error', err)
      const errCode = err.status || 500
      ctx.body = err.result || err

      ctx.status = errCode
    }
  }
}
