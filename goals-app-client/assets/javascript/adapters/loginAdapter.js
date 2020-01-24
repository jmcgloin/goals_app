class LoginAdapter extends BaseAdapter {
	constructor(baseAdapter) {
		super(baseAdapter.baseURL)
		this.baseAdapter = baseAdapter
		this.URL = this.baseURL + '/login'
	}

	// get token() {
	// 	return this.baseAdapter.token
	// }

	async login(params) {
		const res = await fetch(this.URL, {
			method: 'POST',
			headers: this.headers,
			body: JSON.stringify(params)
		})
		this.checkStatus(res)
		this.baseAdapter.token = res.headers.get("authorization")
		// console.log(this.baseAdapter.token)
		// console.log(res)
		return await res
	}
}