class WelcomeAdapter extends BaseAdapter {
	constructor(BaseAdapter) {
		super(BaseAdapter.baseURL)
		this.BaseAdapter = BaseAdapter
		this.usersURL = this.baseURL + '/users'
	}

	async alreadyLoggedIn() {
		return await fetch(this.usersURL)
	}
}