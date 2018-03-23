const index = require('./routes/index')
const api   = require('./routes/api')

module.exports = (app) => {
	// 添加请求处理时间(ms)
	app.use(async (ctx, next) => {
		ctx.set('Access-Control-Allow-Credentials', true)
		ctx.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type')
		ctx.set('Access-Control-Allow-Origin',  '*')
		ctx.set('Access-Control-Allow-Methods', 'POST')
		ctx.set('Access-Control-Max-Age', 3600)
		if (ctx.method === 'OPTIONS') {
			ctx.body = ''
			return
		}
		const start = Date.now()
		await next()
		const ms = Date.now() - start
		ctx.set('Z-Execution-Time', `${ctx.method} ${ctx.url} - ${ms}ms`)
	})

	// app.use(index.routes(), index.allowedMethods())
	app.use(api.routes(), api.allowedMethods())
}