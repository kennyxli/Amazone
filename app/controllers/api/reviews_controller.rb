class Api::ReviewsController < ApplicationController
     def index
        @reviews = Review.select("*").where("product_id = '#{params[:product_id]}'")
        render :index
    end

    def create
        @review = Review.new(review_params)
        @review.product_id = params[:product_id]
        @review.user_id = current_user.id
        if @review.save!
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update 
        @review = current_user.reviews.find(params[:id])
        if @review && @review.update(review_params)
            render :new
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = current_user.reviews.find_by(id: params[:id])
        if @review
            @review.destroy
            render json: @review.id
        else
            render json:["No review"], status:404
        end
    end
    
    private
    def review_params
        params.require(:review).permit(:title, :body, :stars)
    end
end

