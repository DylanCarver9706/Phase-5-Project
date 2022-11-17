class ItemSerializer < ActiveModel::Serializer
  attributes :id, :seller_id, :item_name, :price, :img_url, :description, :category, :cart_status, :sold_status, :manufacturer, :clock_speed, :capacity
end