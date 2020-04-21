if @posts.present? # @new_messageに中身があれば
  json.array! @posts do |post| # 配列かつjson形式で@new_messageを返す
  json.nickname post.user.nickname
  json.created_at post.created_at
  json.post post.post
  json.image post.image.url
  json.id post.id
  end
end