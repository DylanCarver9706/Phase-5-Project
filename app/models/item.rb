class Item < ApplicationRecord
    has_many :purchased_items
    has_many :buyers, through: :purchased_items
    has_many :buyer_carts
    has_many :buyers, through: :buyer_carts
end
