class RemoveNullToCart < ActiveRecord::Migration[5.2]
  def change
    change_column_null :cart_items, :product_id, true
  end
end
