class PurchasedItem < ApplicationRecord
    belongs_to :buyer
    belongs_to :item
end