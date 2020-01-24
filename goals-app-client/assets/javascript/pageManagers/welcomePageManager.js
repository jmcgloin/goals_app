class WelcomePageManager extends BasePageManager {
	constructor(container, baseAdapter) {
		super(container, baseAdapter)
		this.content = new WelcomePage() //this will be a component w/ options to signup or login
	}

	bindDOMElements() {
		this.buttons = document.getElementsByTagName('button')
	}

	bindEventListeners() {
		Array.from(this.buttons).forEach(button => {
			if(button.id == "login-button" || button.id == "signup-button") {
				button.addEventListener('click', this.loadNextPage.bind(this))
			}
		})
	}

	loadNextPage() {
		const nextPage = event.target.id == "signup-button" ? new SignupPage(this.container, this.baseAdapter) : new LoginPage(this.container, this.baseAdapter)
		nextPage.render()		
	}
}