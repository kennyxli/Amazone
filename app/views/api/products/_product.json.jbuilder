json.extract! product, :id, :title, :description, :category, :price, :quantity
json.image_url asset_path("product/#{product.image_url}")