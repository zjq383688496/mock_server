const index = require('./routes/index')
const api   = require('./routes/api')

module.exports = (app) => {
	// 添加请求处理时间(ms)
	app.use(async (ctx, next) => {
		// ctx.request.mod = mod
		const start = Date.now()
		await next()
		const ms = Date.now() - start
		ctx.set('Z-Execution-Time', `${ctx.method} ${ctx.url} - ${ms}ms`)
	})

	// app.use(index.routes(), index.allowedMethods())
	app.use(api.routes(), api.allowedMethods())
}