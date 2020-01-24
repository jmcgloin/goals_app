class BaseAdapter {
	constructor(baseURL) {
		this.baseURL = baseURL
		this.token = null
		this.userId = null
	}

	get headers() {
		const baseHeaders = {
			"Accept": "application/json",
			"Content-Type": "application/json"
		}
		return this.token ? {...baseHeaders, "Authorization": this.token} : baseHeaders
	}

	checkStatus(res) {
		if(res.status < 200 || res.status > 299) throw new Error(res.status, res.message)
	}
}