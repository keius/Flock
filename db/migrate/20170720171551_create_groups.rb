class CreateGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :groups do |t|
      t.string :owner_id, null: false
      t.string :category_id
      t.string :title, null: false
      t.string :description
      t.string :location
      t.string :image_url

      t.timestamps
    end

    add_index :groups, :owner_id
  end
end
