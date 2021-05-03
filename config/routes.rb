Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only:[:create, :destroy]
    resources :products, only:[:index]
    resources :products, only:[:show] do
      resources :reviews, only:[:index, :create]
    end
    resources :reviews, only:[:destroy, :update, :show]
    
    post 'product/:product_id/cart_items', to: 'cartitem#create', as: 'create_cart'
    # delete 'cart_items/:product_id', to: 'cartitem#destroy_item', as: 'delete_cart'
    # patch 'cart_items/:product_id', to: 'cartitem#update', as: 'update_cart'
    resources :cart_items, only:[:destroy, :create, :index, :update]
  end
end
