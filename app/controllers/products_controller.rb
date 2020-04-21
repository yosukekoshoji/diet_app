class ProductsController < ApplicationController
  protect_from_forgery :except => ["create","update"]
  def top
  end

  def index
  end

  def exchange
    @posts = Post.includes(:user).order("created_at ASC")
  end

  def new
    @post = Post.new
    @posts = Post.includes(:user).order("created_at ASC")
  end

  def create
    @post = Post.create(post_params)
    @post.save
  end

  def edit
    @post = Post.find(params[:id])
    @posts = Post.includes(:user)
  end

  def update
    @post = Post.find(params[:id])
    respond_to do |format|
    format.json{
    if @post.update!(post_params)
       render json: @post
    else
      head :bad_request
    end
    }
  end
  end

  def destroy
  @post = Post.find(params[:id])
  @post.destroy
  redirect_to new_product_path
  end
  private
  def post_params
    params.require(:post).permit(:post,:image).merge(user_id: current_user.id)
  end
  
end
