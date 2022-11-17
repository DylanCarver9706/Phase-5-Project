class BuyerSerializer < ActiveModel::Serializer
  attributes :id, :seller_id, :full_name, :username, :email, :password_digest, :address
  has_many :purchased_items
end