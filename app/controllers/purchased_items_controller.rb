class PurchasedItemsController < ApplicationController
    skip_before_action :authenticate_user, only: :index

    def index
        render json: PurchasedItem.all, status: :ok
    end
    
    def show
        purchased_item = PurchasedItem.find(params[:id])
        render json: purchased_item, status: :ok
    end

    def create
        purchased_item = PurchasedItem.create(purchased_item_params)
        render json: purchased_item, status: :created
    end

    private
    def purchased_item_params
        params.permit(:buyer_id, :item_id, :purchase_date)
    end
end
