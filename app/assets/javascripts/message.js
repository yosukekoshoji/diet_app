$(function(){
  function buildHTML(post){
   if (post.image) {
     var html =
    `<div class=show__messages__message>
      <div class="show__messages__message__namebox" >
        <div class="show__messages__message__namebox" data-post-id=${post.id}>
          <div class="show__messages__message__namebox__number">
            ${post.id}
          </div>
          <div class="show__messages__message__namebox__name">
            ${post.nickname}
          </div>
          <div class="show__messages__message__namebox__time">
            ${post.created_at}
          </div>

        <span class="js-edit-comment-button" data-comment-id="${post.id}" id="authenticity_token">
        <i class="fas fa-edit text-primary"></i>
        </span>
        <a rel="nofollow" data-method="delete" href="/products/${post.id}"><i class="fas fa-trash-alt"></i>
        </a></div>
        </div>
        <div class="show__messages__message--comment">
          ${post.post}
        </div>
        <div class="show__messages__message__editbox" id="js-comment-${post.id}">
        <p id="js-comment-label-${post.id},post.body"></p>
        <p class="text-danger" id="js-comment-post-error-${post.id}"></p>
        <textarea class="form-control.comment-post-error-post.body" id="js-textarea-comment-${post.id}" style="display: none;"></textarea>
        </div>
        <div class="edit__btnbox" id="js-comment-button-${post.id}" style="display: none;">
        <button class="btn btn-light comment-cancel-button" data-cancel-id="${post.id}">キャンセル</button>
        <button class="btn btn-right comment-update-button" data-update-id="${post.id}">更新する</button>
        </div>
        <div class="show__messages__message__image">
        <img src= ${post.image}>
        </div>
      </div>`
  } else{
    var html =
    `<div class=show__messages__message>
      <div class="show__messages__message__namebox" >
        <div class="show__messages__message__namebox" data-post-id=${post.id}>
          <div class="show__messages__message__namebox__number">
            ${post.id}
          </div>
          <div class="show__messages__message__namebox__name">
            ${post.nickname}
          </div>
          <div class="show__messages__message__namebox__time">
            ${post.created_at}
          </div>
        <span class="js-edit-comment-button" data-comment-id="${post.id}" id="authenticity_token">
          <i class="fas fa-edit text-primary"></i>
          </span>
          <a rel="nofollow" data-method="delete" href="/products/${post.id}"><i class="fas fa-trash-alt"></i>
          </a></div>
        </div>
        <div class="show__messages__message--comment">
          ${post.post}
        </div>
        <div class="show__messages__message__editbox" id="js-comment-${post.id}">
        <p id="js-comment-label-${post.id},post.body"></p>
        <p class="text-danger" id="js-comment-post-error-${post.id}"></p>
        <textarea class="form-control.comment-post-error-post.body" id="js-textarea-comment-${post.id}" style="display: none;"></textarea>
        </div>
        <div class="edit__btnbox" id="js-comment-button-${post.id}" style="display: none;">
        <button class="btn btn-light comment-cancel-button" data-cancel-id="${post.id}">キャンセル</button>
        <button class="btn btn-right comment-update-button" data-update-id="${post.id}">更新する</button>
        </div>
      </div>`
    }
    return html
};



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
    .done(function(data){ 
      var html = buildHTML(data);
      $('.show__messages').append(html);
      $('html, body').animate({ scrollTop: 50000000000});
      $('.footer__comment_box__text').val('') 
      $('.footer__comment_box__btn').prop('disabled',false);
      $('form')[0].reset();
      console.log(data)
    })
    .fail(function(){
      alert('投稿できませんでした')
      $('form')[0].reset();
    })

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
function checkName(){
  const edit = document.getElementById('jsEdit').value;
  if(edit.length < 1){
    alert('文字か画像を入力してください')
  }
}