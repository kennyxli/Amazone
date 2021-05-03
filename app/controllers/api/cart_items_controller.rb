class Api::CartItemsController < ApplicationController
    def index
        @cartitems = current_user.cartitems
        render :index
    end
    def create 
        @cartitem = CartItem.new(cart_params)
        @cartitem.user_id = current_user.id
        # @cartitem.product_id = :product_id
        if @cartitem.save!
            render :new
        else
            render json: @cartitem.errors.full_messages, status: 422
        end
    end
    def update
        @cartitem = current_user.cartitems.find_by(id: params[:id])
        if @cartitem && @cartitem.update(cart_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end
    def destroy
        @cartitem = current_user.cartitems.find_by(id: params[:id])
        if @cartitem 
            @cartitem.destroy 
            render json: @cartitem.id 
        else
            render json:["Can't delete cart"], status: 404
        end
    end
    # def destroy_item
    #     @cartitem = current_user.cartitems.find_by(product_id: params[:product_id])
    #     if @cartitem
    #         @cartitem.destroy 
    #         render json: @cartitem.id 
    #     else 
    #         render json:["Can't find item"], status: 404
    #     end
    # end

    private
    def cart_params
        params.require(:cartitem).permit(:product_id, :quantity)
    end
end
