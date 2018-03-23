module.exports = {
	'/java': {
		name: '中石化',
		type: 'application/x-www-form-urlencoded',
		parentKey: 'data',
		parent: {
			code: '0000',
			data: '',
		},
		child: {
			'/upload': {
				name: '上传图片',
				type: 'multipart/form-data',
				method: 'post',
				json: 'http://img.weiye.me/zcimgdir/headimg/32d7529d24439f8c4a22f753c918326e_o.jpg'
			},
		}
	}
}