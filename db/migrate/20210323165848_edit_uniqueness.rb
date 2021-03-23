class EditUniqueness < ActiveRecord::Migration[5.2]
  def change
    remove_index :reviews, :user_id
    remove_index :reviews, :product_id
  add_index :reviews, :user_id
  add_index :reviews, :product_id
  end
end
