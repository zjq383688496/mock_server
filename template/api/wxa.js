module.exports = {
	'/miniprog-manager-gateway/utility': {
		name: '公用工具',
		type: 'application/x-www-form-urlencoded',
		parentKey: 'result',
		parent: {
			meta: {
				errno: 200,
				msg:  '操作成功'
			},
			result: {
				page: null,
				data: ''
			}
		},
		child: {
			'/uploadImage': {
				name: '上传图片',
				// type: 'multipart/form-data',
				method: 'post',
				json: {
					page: null,
					data: 'http://img.weiye.me/zcimgdir/headimg/32d7529d24439f8c4a22f753c918326e_o.jpg'
				}
			},
		}
	},
	'/manage/admin': {
		name: '小程序相关',
		type: 'application/x-www-form-urlencoded',
		parentKey: 'result',
		parent: {
			meta: {
				errno:  0,
				msg:  '操作成功',
				status: 0,
			},
			result: ''
		},
		child: {
			'/reservation/getReservationList': {
				name: '预约列表',
				// type: 'multipart/form-data',
				method: 'get',
				json: {
					'data|1-10': [{
						'count': 1,
						'end_time': 1,
						'peopleOut': 1,
						'start_time': 1,
						'address|1': ['上海', '北京', '广州', '深圳', '香港', '福建', '成都', '吉林', '南京', '杭州'],
						'back_point': 0,
						'content': 'erwerw',
						'create_time': 1489664102,
						'id|+1': 29,
						'mall_id': '54f403eae4b002000cf63762',
						'name|1': ['测试预约名称', '猜猜我是谁', '庄家琪好帅', '哇哈哈', '那个人好帅'],
						'pay_point': 2,
						'pic': 'serwss333333er',
						'prepaid_type': 2,
						'sign_content': '',
						'sign_time': 0,
						'sign_type': 0,
						'status': 2,
						'tel': '021-123456',
						'template_code': 'reservation_service',
						'template_id': 32,
						'update_time': 1489664102,
						'user_info': 'r324134qwedw'
					}],
					page: 1,
					page_size: 10,
					total: 488,
					total_page: 1,
					type: 1,
				}
			},
		}
	}
}