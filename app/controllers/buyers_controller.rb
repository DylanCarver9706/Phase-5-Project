class BuyersController < ApplicationController
    skip_before_action :authenticate_user, only: :create

    def show
        render json: @current_user, status: :ok
    end

    def create
        user = Buyer.create!(buyer_params)
        session[:buyer_id] = user.id 
        render json: user, status: :created 
    end

    private

    def buyer_params
        params.permit(:seller_id, :username, :full_name, :email, :password, :address)
    end

end
