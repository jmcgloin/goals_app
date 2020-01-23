class App {
	constructor() {
		this.bindDOMElements()
		this.bindEventListeners()
		this.renderPage(new SignupPage(this.pageContainer))
		// this.renderInfo('Testing', )//'no content')
	}

	bindDOMElements() {
		this.infoContainer = document.getElementById('info-container')
		this.signInLogIn = document.getElementById('sign-log-in')
		this.pageContainer = document.getElementById('page-container')
	}

	bindEventListeners() {

	}

	renderPage(page) {
		page.render()
	}

	renderInfo(message, type) {
		const renderInfo = new InfoDisplay(message, type)
		renderInfo.render()
	}
}