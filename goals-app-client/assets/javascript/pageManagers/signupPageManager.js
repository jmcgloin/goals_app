class SignupPageManager extends BasePageManager {
	constructor(container, baseAdapter){
		super(container, baseAdapter)
		this.content = new SignupForm()
		this.adapter = new SignupAdapter(baseAdapter)
	}

	bindDOMElements() {
		this.form = document.getElementById('signup-form')//add a button to switch to login
	}

	bindEventListeners() {
		this.form.addEventListener('submit', this.handleSubmit.bind(this))
	}

	handleSubmit() {
		event.preventDefault()
		const data = new FormData(event.target)
		const res = this.adapter.signup(
			{user:
				{username: data.get("username"), email: data.get("email"), password: data.get("password")}
			}
		)
		.then(res => res.json())
		.then(resj => {
				if(res) new HomePageManager(this.container, this.baseAdapter)
			}
		)
		
	} 
}