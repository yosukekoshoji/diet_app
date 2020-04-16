Rails.application.routes.draw do
  devise_for :users
  root "products#top"
  
  resources :products,except: :show do
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
  namespace :api do
    resources :products, only: :new, defaults: { format: 'json' }
    end
  end
end
