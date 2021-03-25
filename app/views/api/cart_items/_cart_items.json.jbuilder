json.extract! cartitem, :id, :user_id, :product_id, :quantity 
json.extract! cartitem.product, :title, :description, :price, :category