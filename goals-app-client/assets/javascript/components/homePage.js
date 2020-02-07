class HomePage {
	constructor(user) {
		this.username = user.username
		this.goals = user.goals
	}
	
	get pageHTML() {
		return `
			<div class="flex flex-col w-full h-full mt-12">
				<div class="flex mb-4">
				  <div class="w-1/5 h-12"></div>
				  <div class="w-2/5 h-12 text-3xl">Welcome, ${this.username}</div>
				  <div class="w-1/5 h-12"></div>
				  <div class="w-1/5 h-12"></div>
				</div>
				<div class="flex">
				  <div class="w-1/6 h-12"></div>
				  <div class="w-1/6 h-12"></div>
				  <div class="w-1/6 h-12"></div>
				  <div class="w-2/6 h-12"><h2 class="mb-5 text-2xl">Here are your goals</h2></div>
				  <div class="w-1/6 h-12"></div>
				</div>
				<div id="goal-display" class="flex flex-col h-auto w-full items-center justify-center">
						${this.listGoals()}
				</div>
				
			</div>
		`
	}

	listGoals(sorted = false) {
		if(this.goals.length == 0) this.goals.push({goalname: "Add a new goal", deadline: this.dateToday(), id: "test"});
		if(sorted) this.goals.sort((g1,g2) => -g1.importance + g2.importance)
		return `<div class="flex pt-2 w-5/6" ><button id="sort-button">Sort by importance</button></div>` + 
			this.goals.map((goal, i) => {
			const shade = (i%2 + 3) * 100
			return `
							<div class="flex pt-2 w-5/6 bg-gray-${shade} ">
							  
							  <div class="w-2/4 h-8 text-right align-middle  goal" data-goal-id=${goal.id}>${goal.goalname}</div>
							  <div class="w-1/4 h-8 text-center bg-gray-${shade}">${goal.deadline}</div>
							  <div class="w-1/4 h-8 text-center bg-gray-${shade}">
							  	<button data-goal-id=${goal.id} class="mark-complete border border-gray-600 text-gray-600 hover:border-transparent hover:bg-gray-700 hover:text-white font-bold px-4 rounded-full">Complete</button>
							  </div>
							  
							</div>`
		}).join('') + `
							<div id="goals-buttons" class="my-8 flex justify-around">
								<button id="new-goal-button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Add a New Goal</button>
							</div>`
	}

	get newGoalForm() {
		const goalPlaceholders = ['Learn to ...', 'Make a ...', 'Start writing ....', 'Finish doing ...']
		const goalPlaceholder = goalPlaceholders[Math.floor(Math.random() * goalPlaceholders.length)]
		console.log(goalPlaceholder)
		return `
			<div class="flex w-full justify-center">
				<div class="w-3/5">
		      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" id="new-goal-form">
		        <h2 class="block text-gray-700 text-md font-bold text-center">Whats your goal?</h2>
		        <div class="mb-4">
		          <label class="block text-gray-700 text-sm font-bold mb-2" for="goalname">
		            Goal Name
		          </label>
		          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="goalname" name="goalname" type="text" placeholder=${goalPlaceholder} autofocus required autocomplete='off'>
		        </div>
		        <div class="mb-4">
		          <label class="block text-gray-700 text-sm font-bold mb-2" for="deadline">
		            Deadline
		          </label>
		          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="deadline" name="deadline" type="text" value=${this.dateToday()} required autocomplete='off'>
		        </div>
		        <div class="mb-6">
		          <label class="block text-gray-700 text-sm font-bold mb-2" for="importance">
		            Importance
		          </label>
		          ${this.importanceOptionList()}
		        </div>
		        <div class="flex items-center justify-between">
		          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="submit">
		            Add It
		          </button>
		          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="button" id="new-goal-cancel-button">
		            Cancel
		          </button>
		        </div>
		      </form>
	    </div>
    </div>`

	}

	importanceOptionList() {
		const options = [...Array(10).keys()].map(num => `<option value="${num + 1}">${num + 1}</option>`).join('')
		return `<select name="importance" id="importance">
							${options}
						</select>`
	}

	dateToday() {
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();

		return `${yyyy}-${mm}-${dd}`
	}
}