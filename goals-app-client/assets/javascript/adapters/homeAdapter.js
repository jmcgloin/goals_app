class HomeAdapter extends BaseAdapter {
	constructor(baseAdapter) {
		super(baseAdapter.baseURL)
		this.baseAdapter = baseAdapter
		this.profileURL = this.baseURL + '/home/user_profile'
	}

	async getUserProfile() {
		const res = await fetch(this.profileURL, {
			headers: this.baseAdapter.headers
		})
		this.checkStatus(res)
		// this.baseAdapter.userProfile = await res.json()
		return res.json()
	}
}