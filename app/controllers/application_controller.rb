class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authenticate_user

  private

  def authenticate_user
      @current_user ||= Buyer.find_by(id: session[:buyer_id])
      render json: { error: "Please log in or sign up to view"}, status: :unauthorized unless @current_user 
  end

  def invalid(invalid)
      render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
end
