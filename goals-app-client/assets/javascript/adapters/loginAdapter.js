class LoginAdapter extends BaseAdapter {
	constructor(baseAdapter) {
		super(baseAdapter.baseURL)
		this.baseAdapter = baseAdapter
		this.loginURL = this.baseURL + '/login'
	}

	async login(params) {
		try {
		const res = await fetch(this.loginURL, {
			method: 'POST',
			headers: this.headers,
			body: JSON.stringify(params)
		})
		this.checkStatus(res)
		this.baseAdapter.token = res.headers.get("authorization")
		return await res
		}
		catch(err) {
			this.checkStatus(err)
		}
	}
}