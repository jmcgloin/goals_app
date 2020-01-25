class HomeAdapter extends BaseAdapter {
	constructor(baseAdapter) {
		super(baseAdapter.baseURL)
		this.baseAdapter = baseAdapter
		this.profileURL = this.baseURL + '/home/user_profile'
		this.goalURL = this.baseURL + '/goals'
	}

	async getUserProfile() {
		const res = await fetch(this.profileURL, {
			headers: this.baseAdapter.headers
		})
		this.checkStatus(res)
		return await res
	}

	async createNewGoal(goal) {
		const res = await fetch(this.goalURL, {
			method: 'POST',
			headers: this.baseAdapter.headers,
			body: JSON.stringify(goal)
		})
		this.checkStatus(res)
		return await res
	}
}

// const res = await fetch(this.loginURL, {
// 			method: 'POST',
// 			headers: this.headers,
// 			body: JSON.stringify(params)
// 		})
// 		this.checkStatus(res)
// 		this.baseAdapter.token = res.headers.get("authorization")
// 		return await res