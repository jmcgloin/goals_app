class GoalsController < ApplicationController

		before_action :authenticate_user!
		
		def index
			goals = current_user.goal
			render json: goals
		end
	
		def create
			goal = Goal.new(goal_params)
			goal.user = current_user
			if goal.save
				render json: current_user.goals
			end
		end

		def update
			@goal.update(goal_params)
			render json: goal
		end
	
		def destroy
			goal = Goal.find_by_id(params[:id])
			if goal.destroy
				goals = current_user.goals
				render json: goals
			end
		end
	
		private
	
		def goal_params
			params.require(:goal).permit(:goalname, :deadline, :importance)
		end
	
end