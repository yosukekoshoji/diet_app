if @posts.present? # @new_messageに中身があれば
  json.array! @posts # 配列かつjson形式で@new_messageを返す
end