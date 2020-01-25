class HomePageManager extends BasePageManager {
	constructor(container, baseAdapter) {
		super(container, baseAdapter)
		this.userProfile = null
		this.content = 
		this.adapter = new HomeAdapter(baseAdapter)
		this.handleGetUserProfile()
	}

	bindDOMElements() {
		this.goals = document.getElementsByClassName('goal')
		this.newGoalButton = document.getElementById('new-goal-button')
		this.markCompletedChecks = document.getElementsByClassName('completed-check')
		this.newGoalForm = document.getElementById('new-goal-form')
		this.showAllGoals = document.getElementById('show-all-goals')
	}

	bindEventListeners() {
		Array.from(this.goals).forEach(goal => goal.addEventListener('click', handleViewGoal))
		Array.from(this.markCompletedChecks).forEach(check => check.addEventListener('click', handleMarkStepCompleted))
		// this.newGoalButton.addEventListener('click', handleShowNewGoalForm)
		// this.newGoalForm.addEventListener('submit', handleCreateNewGoal)
		// this.showAllGoals.addEventListener('click', handleShowAllGoals)
	}

	handleCreateNewGoal() {
		//will POST new goal 
	}

	handleShowNewGoalForm() {

	}

	handleShowNextStep() { //in handleGetUserProfile as .then or await if current user has goals and steps

	}

	handleViewGoal() {

	}

	handleShowAllGoals() {

	}

	handleMarkStepCompleted() {

	}

	handleGetUserProfile() {
		const res = this.adapter.getUserProfile()
			.then(res => {
				this.baseAdapter.userProfile = res
				this.content = new HomePage(this.baseAdapter.userProfile)
				this.render()
			})
		// this.username = this.baseAdapter.userProfile.username
		// this.goals = this.baseAdapter.userProfile.goals

	}
}