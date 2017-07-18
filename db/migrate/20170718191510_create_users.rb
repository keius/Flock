class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :session_token
      t.string :full_name
      t.string :image_url

      t.timestamps
    end
  end
end
