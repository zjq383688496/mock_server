const Koa        = require('koa')
const app        = new Koa()
const views      = require('koa-views')
const json       = require('koa-json')
const onerror    = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger     = require('koa-logger')
const swig       = require('swig')

const config     = require('./config')

// swig默认配置
swig.setDefaults({
	varControls: ['[[', ']]']
})

// 错误处理
onerror(app)

// 中间件
app.use(bodyparser({
	enableTypes:['json', 'form', 'text'],
	formLimit: '5mb',
	jsonLimit: '5mb',
	textLimit: '5mb',
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
	map: { html: 'swig' },
	extension: 'html',
}))

// 路由
require('./config.routes')(app)

// error-handling
app.on('error', (err, ctx) => {
	console.error('server error', err, ctx)
})

module.exports = app
