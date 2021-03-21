class EditTable < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :username, :email
    add_column :users, :name, :string
  end
end
