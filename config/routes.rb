Rails.application.routes.draw do
  devise_for :users
  root "products#top"
  # post 'products/create' => 'products#create'
  resources :products,only:[:index,:new,:create] do
    collection do
      get 'top'
      get 'find_videos'
      get 'week_one'
      get 'week_two'
      get 'week_three'
      get 'week_four'
      get 'month_one'
      get 'month_two'
      get 'exchange'
    end
  end
end
