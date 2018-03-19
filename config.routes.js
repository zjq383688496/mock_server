const index = require('./routes/index')
const users = require('./routes/users')


module.exports = (app) => {
	// 添加请求处理时间(ms)
	app.use(async (ctx, next) => {
		const start = Date.now()
		await next()
		const ms = Date.now() - start
		ctx.set('Z-Execution-Time', `${ctx.method} ${ctx.url} - ${ms}ms`)
		console.log(`${ctx.method} ${ctx.url} ${ms}ms`)
	})

	app.use(index.routes(), index.allowedMethods())
	app.use(users.routes(), users.allowedMethods())
}