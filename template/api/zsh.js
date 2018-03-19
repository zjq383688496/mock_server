module.exports = {
	'/easy-bi-dc/sinopec': {
		name: '中石化',
		type: 'application/json',
		parentKey: 'result',
		parent: {
			status: { code: '0', message: '请求数据成功!' },
			result: '',
		},
		child: {
			'/getTerminalCounting': {
				name: '获取终端数',
				method: 'post',
				json: {
					'terminalCounting|2-50': 4
				}
			},
			'/getESSummaryData': {
				name: '获取电子货架概要数据',
				method: 'post',
				json: {
					'totalPopulation|10000-300000': 0,
					'clickPopulation|10000-300000': 0,
					'scanPopulation|2000-50000':    0,
					'orderNum|200-5000':            0,
					'orderAmount|200000-5000000':   0,
					'averageStayTime|2-50':         0,
				}
			},
			'/getESWeeklyClickData': {
				name: '获取电子货架周点击数据',
				method: 'post',
				json: {
					'dataList|7': [{
						'dt': {
							'firstDayOfWeek|+1': ['2017-11-29', '2018-01-29', '2018-01-21'],
							'lastDayOfWeek|+1':  ['2018-03-04', '2018-02-04', '2018-03-10']
						},
						'clickPopulation|500-2000': 100
					}]
				}
			},
			'/getESWeeklyData': {
				name: '获取电子货架周点击、扫码、订单数据',
				method: 'post',
				json: {
					'dataList|7': [{
						'dt': {
							'firstDayOfWeek|+1': ['2017-11-29', '2018-01-29', '2018-01-21'],
							'lastDayOfWeek|+1':  ['2018-03-04', '2018-02-04', '2018-03-10']
						},
						'clickPopulation|500-2000': 100,
						'scanPopulation|50-500': 100,
						'orderNum|20-100': 10
					}]
				}
			},
			'/getESUserGenderPopulation': {
				name: '获取电子货架人群画像（性别）汇总数据',
				method: 'post',
				json: {
					'dataList|2': [{
						'gender|+1': [1, 2],
						'genderDesc|+1': ['男', '女'],
						'population|3000-100000': 10000,
						'ratio|20-80': 20
					}]
				}
			},
			'/getESUserAgePopulation': {
				name: '获取电子货架人群画像（年龄段）汇总数据',
				method: 'post',
				json: {
					'dataList|9': [{
						'age|+1': 0,
						'ageDesc|+1': ['未知', '0-17岁', '18-24岁', '25-29岁', '30-34岁', '35-39岁', '40-49岁', '50-59岁', '60岁及以上',],
						'population|2000-15000': 1000,
						'ratio|5-50': 20
					}],
					'totalPopulation|50000-100000': 2000
				}
			},
			'/getESUserSceneTagPopulation': {
				name: '获取电子货架人群画像（场景标签）汇总数据',
				method: 'post',
				json: {
					'dataList|5': [{
						'sceneTag|+1': ['养身', '女装', '户外运动', '母婴', '汽车', ],
						'population|2000-15000': 1000,
						'ratio|5-50': 20
					}],
					'totalPopulation|50000-100000': 2000
				}
			},
			'/getESOperationSummaryData': {
				name: '获取电子货架运营汇总数据',
				method: 'post',
				json: {
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
				}
			},
		}
	}
}