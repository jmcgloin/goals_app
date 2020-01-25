class LogoutPageManager extends BasePageManager {
	constructor(container, baseAdapter) {
		super(container, baseAdapter)
		this.welcomeContent = null
		this.adapter = new LogoutAdapter(baseAdapter)
		this.inOutLink = document.getElementById('in-out-link')
	}

	render() {
		this.handleLogout()
	}

	get content() {
		return this.welcomeContent.pageHTML
	}

	handleLogout() {
		this.adapter.logout()
		.then(r => {
			BasePageManager.loginPageManager.render()
		})
	}
}