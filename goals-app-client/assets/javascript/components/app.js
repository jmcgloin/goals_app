class App {
	constructor() {
		this.bindDOMElements()
		this.bindEventListeners()
		this.adapter = new BaseAdapter('http://localhost:3000')
		this.renderPage(new WelcomePageManager(this.pageContainer, this.adapter))
		// this.renderPage(new SignupPage(this.pageContainer, this.adapter))
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