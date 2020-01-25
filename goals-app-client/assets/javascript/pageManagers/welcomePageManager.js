class WelcomePageManager extends BasePageManager {
	constructor(container, baseAdapter) {
		super(container, baseAdapter)
		this.content = new WelcomePage()
		this.loginPageManager = new LoginPageManager(this.container, this.baseAdapter)
		this.signupPageManager = new SignupPageManager(this.container, this.baseAdapter)
		this.logoutPageManager = new LogoutPageManager(this.container, this.baseAdapter)
		BasePageManager.loginPageManager = this.loginPageManager
		BasePageManager.signupPageManager = this.signupPageManager
		BasePageManager.logoutPageManager = this.logoutPageManager
		this.logoutPageManager.welcomeContent = this.content
	}

	bindDOMElements() {
		this.buttons = document.getElementsByTagName('button')
		this.inOutLink = document.getElementById('in-out-link')
	}

	bindEventListeners() {
		// document.getElementById('signup-button').addEventListener('click', this.handleSignup.bind(this))
		// document.getElementById('login-button').addEventListener('click', this.handleLogin.bind(this))
		['signup-button', 'login-button'].forEach( button => {
			document.getElementById(button).addEventListener('click', this.handleButton.bind(this))
		})
	}

	handleButton() {
		this.inOutLink.innerHTML = {'Log In': 'Sign Up', 'Sign Up': 'Log In'}[this.inOutLink.innerHTML]
		event.target.id == 'signup-button' ? this.signupPageManager.render() : this.loginPageManager.render()
	}

}