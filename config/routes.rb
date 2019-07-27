Rails.application.routes.draw do
  get '/', to: "hikes#index", as: 'root'
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  resources :users, :only => [:show, :index]
  authenticated :user do
    root 'home#index', as: 'authenticated_root'
  end
  devise_scope :user do
    root 'devise/sessions#new'
  end
  resources :hikes do 
    resources :reviews
  end
  resources :reviews, :only =>[:create]
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
