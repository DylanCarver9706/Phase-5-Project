class Item < ApplicationRecord
    has_many :purchased_items
    has_many :buyers, through: :purchased_items
end
