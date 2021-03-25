class Product < ApplicationRecord
    validates :title, :description, :category, :price, :user_id, presence:true
    after_initialize :average_rating

    has_many :reviews

    def average_rating()
        avg_review = 0
        
             self.reviews.each do |review|
             avg_review += review.stars
            end
        self.avg_rating = (self.reviews.length > 0 ? avg_review/(self.reviews.length * 1.0) : avg_review)
        return avg_review
    end
end
