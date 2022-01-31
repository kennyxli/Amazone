json.extract! product, :id, :title, :description, :category, :price, :quantity, :avg_rating
json.image_url asset_path("product/#{product.image_url}")
json.photo url_for(product.photo)