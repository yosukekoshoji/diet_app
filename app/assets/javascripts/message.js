$(function(){
  function buildHTML(post){
   if ( post.image) {
     var html =
     `<div class="show__messages" data-post-id=${post.id}>
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
  } else {
    var html =
    `<div class="show__messages" data-post-id=${post.id}>
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
    }
    return html
}



  $('#new_form').on('submit', function(e){
    e.preventDefault()
    console.log(this)
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){ 
      var html = buildHTML(data);
      $('.show__messages').append(html);
      $('html, body').animate({ scrollTop: 50000000000});
      $('.footer__comment_box__text').val('') 
      $('.footer__comment_box__btn').prop('disabled',false);
      $('form')[0].reset();
    })
    .fail(function(){
      alert('投稿できませんでした')
    })
    return false
  });
  
    //自動更新
    // var reloadMessages = function() {
    //   var href = 'api/products#new{:format =>"json"}'
    //   var post_id = $('.show__messages__namebox:last').data("post-id");
    //   $.ajax({
    //     url: href,
    //     type: 'get',
    //     dataType: 'json',
    //     data: {id: post_id}
    //   })
    //   .done(function(data) {
    //     if (data.length !== 0) {
    //     var insertHTML = '';
    //     $.each(data, function(i, data) {
    //       insertHTML += buildHTML(data)
    //     });
    //     $('.show__messages').append(insertHTML);
    //     $('.show__messages__namebox').animate({ scrollTop: $('.')[0].scrollHeight},'fast');
      // }})
      // .fail(function() {
      //   alert('error');
      // });
    // };
      // setInterval(reloadMessages, 7000);
});
    