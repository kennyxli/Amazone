class Api::ProductsController < ApplicationController

    def index
        @products = products.all 
        render :index
    end
    def show 
        @product = Product.find_by(id: params[:id])
    end
end
