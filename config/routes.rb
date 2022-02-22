Rails.application.routes.draw do
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
    delete 'cart_items/destroy_items', to: 'cart_items#destroy_items', as: 'destroy_items'
    resources :cart_items, only:[:destroy, :create, :index, :update]
  end
end
