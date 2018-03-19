const config = {
	root: __dirname,
	redis: {
		host: '127.0.0.1',
		port: 6382,
		db: 1,
		ttl: 3600,
	},
	mysql: {
		database: 'mock',
		user: 'root',
		pass: '000000',
		opts: {
			host: 'localhost',
			port: 3306,
			dialect: 'mysql'
		}
	}
}

module.exports = config