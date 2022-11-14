class SessionsController < ApplicationController
    skip_before_action :authenticate_user, only: :create

      def create
        user = Buyer.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:buyer_id] = user.id
            render json: user 
        else
            render json: { error: "Login credentials are incorrect" }, status: :unauthorized
        end 
    end

    def destroy
        session.delete :buyer_id
        head :no_content
    end
end

