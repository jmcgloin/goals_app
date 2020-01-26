class BaseAdapter {
	constructor(baseURL) {
		this.baseURL = baseURL
		this.token = null
		this.userProfile = null
	}

	get headers() {
		const baseHeaders = {
			"Accept": "application/json",
			"Content-Type": "application/json"
		}
		return this.token ? {...baseHeaders, "Authorization": this.token} : baseHeaders
	}

	checkStatus(res) {
		if(res.status < 200 || res.status > 299) {
			switch(res.status) {
				case 400:
					this.renderInfo("An account with that email already exists.  Try loggin in instead.", "failure")
					break;
				case 401:
					this.renderInfo("That username/password doesn't match any account on file.  Try again or sign up.", "failure")
					break;
				case 422:
					this.renderInfo("Please choose another username.", "failure")
					break;
				case 500:
					this.renderInfo("The server is not responding", "failure")
				default:
					throw("other ", res.status)
			}
		} 
	}

	renderInfo(message, type) {
		const renderInfo = new InfoDisplay(message, type)
		renderInfo.render()
	}

	noCurrentUser() {
		// welcome = new Welcome()
	}
}