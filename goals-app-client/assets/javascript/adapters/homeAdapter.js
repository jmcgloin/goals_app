class HomeAdapter extends BaseAdapter {
	constructor(baseAdapter) {
		super(baseAdapter.baseURL)
		this.baseAdapter = baseAdapter
		this.profileURL = this.baseURL + '/home/user_profile'
		this.goalsURL = this.baseURL + '/goals'
	}

	async getUserProfile() {
		const res = await fetch(this.profileURL, {
			headers: this.baseAdapter.headers
		})
		this.checkStatus(res)
		return await res
	}

	async createNewGoal(goal) {
		const res = await fetch(this.goalsURL, {
			method: 'POST',
			headers: this.baseAdapter.headers,
			body: JSON.stringify(goal)
		})
		this.checkStatus(res)
		return await res
	}

	async deleteGoal(goalId) {
		const res = await fetch(`${this.goalsURL}/${goalId}` , {
			method: 'DELETE',
			headers: this.baseAdapter.headers
		})
		this.checkStatus(res)
		return await res
	}
}