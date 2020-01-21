require 'rails_helper'

RSpec.describe 'POST /signup', type: :request do
	let(:url) {'/signup'}
	let(:params) do
		{
			user: {
				username: 'Jason',
				email: 'j@son.com',
				password: 'password'
			}
		}
	end

	context 'when user is unauthenticated' do
		before { post url, params: params}
		it 'returns 200' do
			expect(response.status).to eq 200
		end

		it 'returns a token' do
			expect(response.headers["Authorization"]).to be_present
		end
	end

	context 'when user already exists' do
		before do
			Fabricate :user, email: params[:user][:email]
			post url, params: params
		end

		it 'returns a bad request status' do
			# binding.pry()
			expect(response.status).to eq 400
		end



	end

end