class GoalsController < ApplicationController

		before_action :authenticate_user!
		
		def index
			goals = Goal.all
			render json: goals
		end
	
		def create
			goal = Goal.new(goal_params)
			goal.user = current_user
			# binding.pry()
			if goal.save
				# binding.pry()
				render json: current_user.goals
			end
		end

		def update
			@goal.update(goal_params)
			render json: goal
		end
	
		def show
			render json: @goal		
		end
	
		def destroy
			@goal.destroy
			render json: {message: 'destroyed'}
		end
	
		private
	
		def goal_params
			params.require(:goal).permit(:goalname, :deadline, :importance)
		end
	
		def set_goal
			@goal = Goal.find_by_id(params[:id])
		end
	
end