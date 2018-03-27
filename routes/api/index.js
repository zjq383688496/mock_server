// const proj   = require('../../template/index')
const router = require('koa-router')()
const Mock   = require('mockjs')
const config = require('../../config')
const Tree   = require('require-folder-tree')

const proj   = Tree(config.root + '/template/api')

// console.log(proj)

router.prefix('/api')

var delayRes = (ctx, data) => {
	ctx.body = data
}

// 返回数据格式
function result(node, parent, pk, pj) {
	return async (ctx) => {
		let data  = node.json,
			array = node.array
		if (array) {
			parent[`${pk}${array}`] = data
			delete parent[pk]
			data = Mock.mock(parent)
		} else {
			parent[pk] = Mock.mock(data)
			data = parent
		}
		async function delay(time) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve()
				}, time)
			})
		}
		await delay(Math.floor(Math.random()*1000))
		await delayRes(ctx, data)
	}
}

for (let p in proj) {
	let project = proj[p]
	RouteCreate(`/${p}`, project)
}

function RouteCreate(path, project) {
	for (let p in project) {
		let route  = require('koa-router')(),
			pj     = project[p],
			type   = pj.type,
			parent = pj.parent,
			pk     = pj.parentKey

		route.prefix(path + p)

		// console.log(p)
		for (let q in pj.child) {
			console.log(q)
			let node   = pj.child[q],
				method = node.method,
				RP     = new RegExp(node.type || type)

			route.use(async (ctx, next) => {
				var ct = ctx.header['content-type']
				console.log(method)
				if (method === 'post' && !RP.test(ct)) {
					ctx.status = 400
					return ctx.body = 'Content-Type Error!'
				}
				await next()
			})

			route[method](q, result(node, parent, pk, pj))
		}

		router.use(route.routes(), route.allowedMethods())
	}
}

module.exports = router
