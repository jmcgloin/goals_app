class SignupAdapter extends BaseAdapter {
	constructor(baseAdapter) {
		super(baseAdapter.baseURL)
		this.baseAdapter = baseAdapter
		this.URL = this.baseURL + '/signup'
	}

	async signup(params) {
		const res = await fetch(this.URL, {
			method: 'POST',
			headers: this.headers,
			body: JSON.stringify(params)
		})
			this.checkStatus(res)
			this.baseAdapter.token = res.headers.get("authorization")
			return await res
	}


}