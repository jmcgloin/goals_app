class HomePageManager extends BasePageManager {
	constructor(container, baseAdapter) {
		super(container, baseAdapter)
		this.content = null
		this.adapter = new HomeAdapter(baseAdapter)
		this.handleGetUserProfile()
	}

	bindDOMElements() {

	}
	bindEventListeners() {
		this.bindDOMElementsAndListeners()
	}

	bindDOMElementsAndListeners() {
		this.goalDisplay = document.getElementById("goal-display")
		Array.from(document.getElementsByClassName('mark-complete')).forEach(button => {
			if(button) button.addEventListener('click', this.handleMarkGoalComplete.bind(this))
		})
		this.newGoalForm = document.getElementById('new-goal-form')
		if(!!this.newGoalForm) {
			this.newGoalForm.addEventListener('submit', this.handleCreateNewGoal.bind(this))
		}
		this.newGoalButton = document.getElementById('new-goal-button')
		if(!!this.newGoalButton) {
			this.newGoalButton.addEventListener('click', this.handleShowNewGoalForm.bind(this))
		}
		if(!!document.getElementById('new-goal-cancel-button')) {
			document.getElementById('new-goal-cancel-button').addEventListener('click', this.render.bind(this))
		}
		if(!!document.getElementById('sort-button')) {
			document.getElementById('sort-button').addEventListener('click', this.handleSortGoals.bind(this))
		}
	}

	handleSortGoals() {
		this.goalDisplay.innerHTML = this.content.listGoals(true)
		// console.log(this.goalDisplay.innerHTML)
		this.handleDelayedBindings()
	}

	handleCreateNewGoal() {
		event.preventDefault()
		const data = new FormData(event.target)
		event.target.reset()
		const res = this.adapter.createNewGoal({
			goal: {
				goalname: data.get("goalname"),
				deadline: data.get("deadline"),
				importance: data.get("importance")
			}
		})
		.then(res => res.json())
		.then(resj => {
			this.baseAdapter.userProfile.goals = resj
			this.content.goals = resj
			this.container.innerHTML = this.content.pageHTML
			this.handleDelayedBindings()
		})
	}

	handleShowNewGoalForm() {
		console.log('new goal form')
		this.goalDisplay.innerHTML = this.content.newGoalForm
		this.handleDelayedBindings()
	}

	handleMarkGoalComplete() {
		if(event.target.dataset.goalId == "test"){
			this.handleShowNewGoalForm()
			return
		}
		console.log('complete')
		const res = this.adapter.deleteGoal(event.target.dataset.goalId)
		.then(res => res.json())
		.then(resj => {
			this.baseAdapter.userProfile.goals = resj
			this.content.goals = resj
			this.container.innerHTML = this.content.pageHTML
			this.handleDelayedBindings()
		})
	}

	handleGetUserProfile() {
		const res = this.adapter.getUserProfile()
			.then(res => res.json())
			.then(rj => {
				this.baseAdapter.userProfile = rj
				this.content = new HomePage(this.baseAdapter.userProfile)
				this.render()
			})
	}

	handleDelayedBindings() {
		setTimeout(this.bindDOMElementsAndListeners.bind(this), 500)
	}
}