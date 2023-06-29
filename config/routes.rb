Rails.application.routes.draw do
  resource :user, only: %i[new create]
  root 'static_pages#top'
end
