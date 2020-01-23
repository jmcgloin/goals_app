class App {
	constructor() {
		this.bindDOMElements()
		this.bindEventListeners()
		this.renderPage(new SignupPage(this.pageContent))
		this.renderPage(new InfoDisplay(this.infoContainer))
	}

	bindDOMElements() {
		this.infoContainer = document.getElementById('info-container')
		this.signInLogIn = document.getElementById('sign-log-in')
		this.pageContent = document.getElementById('page-content')
	}

	bindEventListeners() {

	}

	renderPage(page) {
		page.render()
	}
}