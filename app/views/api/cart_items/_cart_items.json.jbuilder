json.extract! cartitem, :product_id, :user_id, :quantity 
json.extract! cartitem.product, :title, :description, :price, :category
json.image_url asset_path("product/#{cartitem.product.image_url}")