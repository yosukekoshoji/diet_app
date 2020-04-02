class ProductsController < ApplicationController

  def top
  end

  def index
  end

  def exchange
    # @user = User.all
    @posts = Post.includes(:user).order("created_at ASC")
  end

  def new
    @post = Post.new
    @posts = Post.includes(:user).order("created_at ASC")
  end

  def create
    Post.create(post_params)
    redirect_to new_product_path
  end

  private
  def post_params
    params.require(:post).permit(:post,:image).merge(user_id: current_user.id)
  end
  
end
