class Api::ProductsController < ApplicationController
  protect_from_forgery :except => ["new"]
  def new
    post = Post.all
    post_id = params[:id]
    @posts = post.includes(:user).where("id > ?", post_id)
      
    respond_to do |format|
      format.html
      format.json
    end
  end
end