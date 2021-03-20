json.extract! product, :id, :title, :description, :category, :price
json.image_url asset_path("product/#{product.image_url}")