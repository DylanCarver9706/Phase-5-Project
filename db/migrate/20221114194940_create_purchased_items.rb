class CreatePurchasedItems < ActiveRecord::Migration[6.1]
  def change
    create_table :purchased_items do |t|
      t.integer :buyer_id
      t.integer :item_id
      t.datetime :purchase_date

      t.timestamps
    end
  end
end
