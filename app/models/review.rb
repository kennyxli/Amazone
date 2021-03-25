class Review < ApplicationRecord
    validates :title, :body, :stars, presence:true
    validates :user_id, :product_id, presence:true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
    belongs_to :product
end
