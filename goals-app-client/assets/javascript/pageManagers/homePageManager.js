class HomePageManager extends BasePageManager {
	constructor(container, baseAdapter) {
		super(container, baseAdapter)
		this.content = new HomePage()
		this.adapter = new HomePageAdapter(baseAdapter)
		this.user = null
		this.userGoals = null
		this.goalSteps = null
		handleGetUserProfile()
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
		this.newGoalButton.addEventListener('click', handleShowNewGoalForm)
		this.newGoalForm.addEventListener('submit', handleCreateNewGoal)
		this.showAllGoals.addEventListener('click', handleShowAllGoals)
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

	}
}