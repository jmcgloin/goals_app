Rails.application.routes.draw do
  resources :goals do
    resources :steps
  end

  root to: "home#index"
  get '/home/user_profile', to: 'home#user_profile'
  devise_for :users,
  						path: '',
  						path_names: {
  							sign_in: 'login',
  							sign_out: 'logout',
  							registration: 'signup'
  						},
  						controllers: {
  							sessions: 'sessions',
  							registrations: 'registrations'
  						}

  resources :users do
    resources :goals
  end
end
