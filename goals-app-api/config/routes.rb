Rails.application.routes.draw do
  resources :goals do
    resources :steps
  end

  root to: "home#index"
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
