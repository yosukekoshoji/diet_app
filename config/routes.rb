Rails.application.routes.draw do
  root "products#top"

  resources :products,only:[:index] do
    collection do
      get 'top'
      get 'find_videos'
      get 'week_one'
      get 'week_two'
      get 'week_three'
      get 'week_four'
      get 'month_one'
      get 'month_two'
    end
  end
end
