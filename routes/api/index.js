// const proj   = require('../../template/index')
const router = require('koa-router')()
const Mock   = require('mockjs')
const config = require('../../config')
const Tree   = require('require-folder-tree')

const proj   = Tree(config.root + '/template/api')

// console.log(proj)

router.prefix('/api')

// 返回数据格式
function result(node, parent, pk) {
	return (ctx) => {
		var data = node.json
		parent[pk] = Mock.mock(data)
		ctx.body = parent
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
				if (!RP.test(ct)) {
					ctx.status = 400
					return ctx.body = 'Content-Type Error!'
				}
				await next()
				// console.log(ct)
			})

			route[method](q, result(node, parent, pk))
		}

		router.use(route.routes(), route.allowedMethods())
	}
}

module.exports = router
