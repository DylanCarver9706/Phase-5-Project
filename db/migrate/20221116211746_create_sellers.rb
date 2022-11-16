class CreateSellers < ActiveRecord::Migration[6.1]
  def change
    create_table :sellers do |t|
      t.string :full_name
      t.string :username
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end
