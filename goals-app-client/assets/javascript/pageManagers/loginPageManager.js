class LoginPage extends BasePageManager {
	constructor(container, baseAdapter){
		super(container, baseAdapter)
		this.content = new LoginForm()
		this.adapter = new LoginAdapter(baseAdapter)
	}

	bindDOMElements() {
		this.form = document.getElementById('login-form')
		this.loginLink = document.getElementById('login-link')

	}

	bindEventListeners() {
		this.form.addEventListener('submit', this.handleSubmit.bind(this))
	}

	handleSubmit() {
		event.preventDefault()
		const data = new FormData(event.target)
		const res = this.adapter.login(
			{user:
				{email: data.get("email"), password: data.get("password")}
			}
		)
			.then(res => res.json())
			.then(resj => {
				// console.log('lpm:', res)
				// this.loginLink
				if(res) (new HomePageManager(this.container, this.baseAdapter))
		})
	} 
}