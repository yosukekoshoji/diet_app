class ProductsController < ApplicationController
  protect_from_forgery :except => ["create","update"]
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
    @post = Post.create(post_params)

    if @post.save
      respond_to do |format|
        format.html {redirect_to new_product_path, notice: 'メッセージが送信されました'}
        format.json　
    end
    else
      flash.now[:alert] = 'メッセージを入力してください'
      render :new
    end
  end

  def edit
    @post = Post.find(params[:id])
    @posts = Post.includes(:user)
  end

  def update
    @post = Post.find(params[:id])
    if @post.update!(post_params)
       render json: @post
    else
      head :bad_request
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
