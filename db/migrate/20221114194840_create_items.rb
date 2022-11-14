class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :item_name
      t.float :price
      t.string :img_url
      t.text :description
      t.string :category
      t.boolean :cart_status
      t.boolean :sold_status
      t.string :manufacturer
      t.integer :clock_speed
      t.integer :capacity

      t.timestamps
    end
  end
end
