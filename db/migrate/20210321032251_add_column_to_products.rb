class AddColumnToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :quantity, :integer
    change_column_null :products, :quantity, false
  end
end
