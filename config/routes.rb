Rails.application.routes.draw do
  get 'users/new'
  get 'users/create'
  root 'static_pages#top'
end
