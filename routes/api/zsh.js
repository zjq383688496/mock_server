const router = require('koa-router')()
const Mock   = require('mockjs')

router.prefix('/easy-bi-dc/sinopec')

// 返回数据格式
function result(data) {
	return (ctx) => {
		ctx.body = {
			status: { code: '0', message: '请求数据成功!' },
			result: Mock.mock(data)
		}
	}
}

router.use(async (ctx, next) => {
	var ct = ctx.header['content-type']
	if (!/application\/json/.test(ct)) {
		ctx.status = 400
		return ctx.body = {
			status: { code: '400', message: 'Content-Type Error!' },
		}
	}
	await next()
	console.log(ct)
})

// 1. 获取终端数
router.post('/getTerminalCounting', result({
	'terminalCounting|2-50': 4
}))

// 2. 获取电子货架概要数据
router.post('/getESSummaryData', result({
	'totalPopulation|10000-300000': 20000,
	'clickPopulation|10000-300000': 20000,
	'scanPopulation|2000-50000':    10000,
	'orderNum|200-5000':            1000,
	'orderAmount|200000-5000000':   10000,
	'averageStayTime|2-50':         4,
}))

// 3. 获取电子货架周点击数据
router.post('/getESWeeklyClickData', result({
	'dataList|7': [{
		'dt': {
			'firstDayOfWeek|+1': ['2017-11-29', '2018-01-29', '2018-01-21'],
			'lastDayOfWeek|+1':  ['2018-03-04', '2018-02-04', '2018-03-10']
		},
		'clickPopulation|500-2000': 100
	}]
}))

// 4. 获取电子货架周点击、扫码、订单数据
router.post('/getESWeeklyData', result({
	'dataList|7': [{
		'dt': {
			'firstDayOfWeek|+1': ['2017-11-29', '2018-01-29', '2018-01-21'],
			'lastDayOfWeek|+1':  ['2018-03-04', '2018-02-04', '2018-03-10']
		},
		'clickPopulation|500-2000': 100,
		'scanPopulation|50-500': 100,
		'orderNum|20-100': 10
	}]
}))

// 5. 获取电子货架人群画像（性别）汇总数据
router.post('/getESUserGenderPopulation', result({
	'dataList|2': [{
		'gender|+1': [1, 2],
		'genderDesc|+1': ['男', '女'],
		'population|3000-100000': 10000,
		'ratio|20-80': 20
	}]
}))

// 6. 获取电子货架人群画像（年龄段）汇总数据
router.post('/getESUserAgePopulation', result({
	'dataList|9': [{
		'age|+1': 0,
		'ageDesc|+1': ['未知', '0-17岁', '18-24岁', '25-29岁', '30-34岁', '35-39岁', '40-49岁', '50-59岁', '60岁及以上',],
		'population|2000-15000': 1000,
		'ratio|5-50': 20
	}],
	'totalPopulation|50000-100000': 2000
}))

// 7. 获取电子货架人群画像（场景标签）汇总数据
router.post('/getESUserSceneTagPopulation', result({
	'dataList|5': [{
		'sceneTag|+1': ['养身', '女装', '户外运动', '母婴', '汽车', ],
		'population|2000-15000': 1000,
		'ratio|5-50': 20
	}],
	'totalPopulation|50000-100000': 2000
}))

// 8. 获取电子货架运营汇总数据
router.post('/getESOperationSummaryData', result({
	'operationSummary': {
		'startDate': '2018-02-04',
		'endDate': '2018-02-28',
		'mall': '中石化',
		'terminalNum': 1,
		'totalPopulation|20000-500000': 251282,
		'stayPopulation': 71210,
		'averageStayTime': 4,
		'clickPopulation': 29061,
		'scanPopulation': 11607,
		'orderNum': 1136,
		'orderRatio': 9.79,
		'orderAmount': 3697349
	},
	'topOperationSummery': '@/operationSummary'
}))


module.exports = router
