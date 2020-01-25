class LogoutAdapter extends BaseAdapter {
	constructor(baseAdapter) {
		super(baseAdapter.baseURL)
		this.baseAdapter = baseAdapter
		this.logoutURL = this.baseURL + '/logout'
	}

	async logout() {
		const res = await fetch(this.logoutURL, {
			method: 'DELETE',
			headers: this.headers
		})

		this.checkStatus(res)
		this.baseAdapter.token = ''
		return await res
	}
}