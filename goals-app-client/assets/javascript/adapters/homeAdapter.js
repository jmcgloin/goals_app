class HomeAdapter extends BaseAdapter {
	constructor(baseAdapter) {
		super(baseAdapter.baseURL)
		this.baseAdapter = baseAdapter
		this.profileURL = baseURL + 'user/profile'
	}

	async getUserProfile(params) {
		const res = await fetch(this.profileURL, {
			headers: this.headers
		})
		this.checkStatus(res)
		this.baseAdapter.user = res.json()
	}
}