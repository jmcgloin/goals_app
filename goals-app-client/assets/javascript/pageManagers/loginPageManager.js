class LoginPage extends BasePageManager {
	constructor(container, baseAdapter){
		super(container, baseAdapter)
		this.content = new LoginForm()
		this.adapter = new LoginAdapter(baseAdapter)
	}

	bindDOMElements() {
		this.form = document.getElementById('login-form') //add a button to switch to signup
	}

	bindEventListeners() {
		this.form.addEventListener('submit', this.handleSubmit.bind(this))
	}

	handleSubmit() {
		event.preventDefault()
		const data = new FormData(event.target)
		this.adapter.login(
			{user:
				{email: data.get("email"), password: data.get("password")}
			}
		)
	} //take a return of a promise and use it to call next page manager (userPage?)
}