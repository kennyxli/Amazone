class Review < ApplicationRecord
    validates :title, :body, :stars, presence:true
    validates :user_id, :product_id, presence:true

    belongs_to :user
    belongs_to :product
end
