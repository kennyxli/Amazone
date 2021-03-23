class EditProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :avg_rating, :float
  end
end
