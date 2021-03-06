class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :first_name
      t.string :last_name
      t.string :location
      t.text :about
      t.string :image_url

      t.timestamps
    end

    add_index :users, [:first_name, :image_url, :session_token], unique: true
  end
end
