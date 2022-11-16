class BuyerCartSerializer < ActiveModel::Serializer
  attributes :id, :item_id, :item, :buyer_id, :buyer
end
