json.array! @posts do |post|
  json.post post.post
  json.image post.image.url
  json.created_at post.created_at
  json.nickname post.user.nickname
  json.id post.id
end