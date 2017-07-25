class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.integer :group_id, null: false
      t.integer :host_id, null: false
      t.string :title, null: false
      t.datetime :datetime, null: false
      t.string :location, null: false
      t.text :description
      t.string :image_url
      t.timestamps
    end

    add_index :events, [:group_id, :host_id], unique: true
  end
end
