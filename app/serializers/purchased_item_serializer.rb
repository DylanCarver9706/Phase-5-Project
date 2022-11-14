class PurchasedItemSerializer < ActiveModel::Serializer
  attributes :id, :buyer, :item, :purchase_date
end
