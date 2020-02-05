const BASEURL = 'http://localhost:3000'

class App {
	constructor() {
		this.bindDOMElements()
		this.bindEventListeners()
		this.adapter = new BaseAdapter(BASEURL)
		this.welcomePageManager = new WelcomePageManager(this.pageContainer, this.adapter)
		this.renderPage(this.welcomePageManager)
	}

	bindDOMElements() {
		this.infoContainer = document.getElementById('info-container')
		this.signInLogIn = document.getElementById('sign-log-in')
		this.pageContainer = document.getElementById('page-container')
		this.inOutLink = document.getElementById('in-out-link')
	}

	bindEventListeners() {
		this.inOutLink.addEventListener('click', this.handleInOutLink.bind(this))
		this.infoContainer.addEventListener('click', this.clearInfoContainer.bind(this))
	}

	renderPage(page) {
		page.render()
	}

	clearInfoContainer() {
		this.infoContainer.innerHTML = ''
	}

	handleInOutLink(bool) {
		console.log(bool)
		let pageManagers = {
			'Log In': [this.welcomePageManager.loginPageManager, 'Sign Up'],
			'Sign Up': [this.welcomePageManager.signupPageManager, 'Log In'],
			'Log Out': [this.welcomePageManager.logoutPageManager, 'Sign Up']
		}
		if(bool) pageManagers[event.target.innerHTML][0].render();
		this.inOutLink.innerHTML  = pageManagers[event.target.innerHTML][1]
	}
}