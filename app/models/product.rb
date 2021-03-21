class Product < ApplicationRecord
    validates :title, :description, :category, :price, :user_id, presence:true
    
end
