@cartitems.each do |cartitem|
    json.set! cartitem.id do 
        json.partial! 'api/cart_items/cart_items', cartitem: cartitem
    end
end