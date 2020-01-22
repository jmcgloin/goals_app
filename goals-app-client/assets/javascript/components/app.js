class App {
	constructor() {
		console.log('app loaded')
		this.initializeBindingsAndListeners()
	}

	initializeBindingsAndListeners() {
		this.infoContainer = document.getElementById('info-container')
		this.signInLogIn = document.getElementById('sign-log-in')
		this.navLinks = document.getElementById('nav-links')
		this.pageContent = document.getElementById('page-content')
	}
}