class CreateBuyers < ActiveRecord::Migration[6.1]
  def change
    create_table :buyers do |t|
      t.integer :seller_id
      t.string :full_name
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :address

      t.timestamps
    end
  end
end
