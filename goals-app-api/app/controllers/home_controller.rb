class HomeController < ApplicationController
	def index
		render json: { message: 'Reach you goals'}
	end
end