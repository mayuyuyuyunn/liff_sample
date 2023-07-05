Rails.application.routes.draw do
  resource :user, only: %i[new create]
  root 'static_pages#top'
  get '/after_login', to: 'static_pages#after_login'
end
