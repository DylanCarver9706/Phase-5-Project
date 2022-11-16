class BuyerCartsController < ApplicationController
    skip_before_action :authenticate_user, only: :index

    def index
        render json: BuyerCart.all, status: :ok
    end

    def create
        buyer_cart = BuyerCart.create(buyer_cart_params)
        render json: buyer_cart, status: :created
    end

    def destroy
        buyer_cart = BuyerCart.find(params[:id])
        buyer_cart.destroy
        head :no_content 
    end

    private
    def buyer_cart_params
        params.permit(:buyer_id, :item_id)
    end
end
