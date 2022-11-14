class ItemsController < ApplicationController
    skip_before_action :authenticate_user, only: :index

    def index
        render json: Item.all, status: :ok
    end

    def show
        item = Item.find(params[:id])
        render json: item, status: :ok
    end

    def create
        item = Item.create(item_params)
        render json: item, status: :created
    end

    def destroy
        item = Item.find(params[:id])
        item.destroy
        head :no_content 
    end

    def update 
        item = Item.find(params[:id])
        item.update(item_params)
        render json: item, status: :accepted
     end

    private
    def item_params
        params.permit(:item_name, :price, :img_url, :description, :category, :cart_status, :sold_status, :manufacturer, :clock_speed, :capacity)
    end
end
