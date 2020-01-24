class GoalsController < ApplicationController

		before_action :set_goal, only: [:show, :edit, :update, :destroy]
		
		def index
			goals = Goal.all
			render json: goals
		end
	
		def create
			goal = Goal.create(goal_params)
			render json: goal
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