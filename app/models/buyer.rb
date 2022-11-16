class Buyer < ApplicationRecord
    has_many :purchased_items
    has_many :items, through: :purchased_items
    has_many :buyer_carts
    has_many :items, through: :buyer_carts

    has_secure_password
end
