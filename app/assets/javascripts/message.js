$(function(){ 
  function buildHTML(post){
   if ( post.image) {
     var html =
     `<div class="show__messages">
        <div class="show__messages__namebox">
          <div class="show__messages__namebox__number">
            ${post.id}
          </div>
          <div class="show__messages__namebox__name">
            ${post.nickname}
          </div>
          <div class="show__messages__namebox__time">
            ${post.created_at}
          </div>
        </div>
        <div class="show__messages__message">
          ${post.post}
        </div>
        <div class="show__messages__image">
        <img src= ${post.image}>
        </div>
      </div>`
    return html;
  } else {
    var html =
    `<div class="show__messages">
        <div class="show__messages__namebox">
          <div class="show__messages__namebox__number">
            ${post.id}
          </div>
          <div class="show__messages__namebox__name">
            ${post.nickname}
          </div>
          <div class="show__messages__namebox__time">
            ${post.created_at}
          </div>
        </div>
        <div class="show__messages__message">
          ${post.post}
        </div>
      </div>`
    return html;
  };
}


$(function(){
  $('#new_form').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){ //非同期通信の結果として返ってくるデータは、done(function(data) { 処理 })の関数の引数で受け取る
      var html = buildHTML(data);
      $('.show__messages').append(html) //htmlに追加
      $('.show__messages').animate({ scrollTop: $('.show__messages')[0].scrollHeight});
      $('.footer__comment_box__text').val('') //なんかエラー出るなーと思ったらvarと書き間違えていた（ここでは'submit'を押した後テキストボックスに空の要素を付与してる）
      $('form')[0].reset();
    })
    .fail(function(){ //エラーが置きた際
      alert('投稿できませんでした')
      $('form')[0].reset();
    })
    .always(function(){ //この記述を書いてないと連続で投稿できない
      $(".footer__comment_box__btn").removeAttr("disabled")
    })
  });
  });
});
