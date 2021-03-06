$.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': $('meta[name="token"]').attr('content')
  }
});

$(function () {
  $(document).on("click", ".js-edit-comment-button", function () {           
    const commentId = $(this).data('comment-id');                   
    const commentLabelArea = $('#js-comment-label-' + commentId);  
    const commentTextArea = $('#js-textarea-comment-' + commentId);
    const commentButton = $('#js-comment-button-' + commentId);     
    commentLabelArea.hide(); 
    commentTextArea.show();  
    commentButton.show();    
  });
});

$(function () {
  $(document).on("click", ".comment-cancel-button", function () {
    const commentId = $(this).data('cancel-id');
    const commentLabelArea = $('#js-comment-label-' + commentId);
    const commentTextArea = $('#js-textarea-comment-' + commentId);
    const commentButton = $('#js-comment-button-' + commentId);
    const commentError = $('#js-comment-post-error-' + commentId);
    
    commentLabelArea.show();
    commentTextArea.hide();
    commentButton.hide();
    commentError.hide();
  });
});

$(function () {
  $(document).on("click", ".comment-update-button", function () {
    const commentId = $(this).data('update-id');
    const textField = $('#js-textarea-comment-' + commentId); 
    const body = textField.val();   
                    
    $.ajax({                        
      url: '/products/' + commentId, 
      type: 'PATCH',
      data: {                        
        post: {
          post: body
        }
        
      }
    })
    .done(function (data) { 

      const commentLabelArea = $('#js-comment-label-' + commentId);
      const commentTextArea = $('#js-textarea-comment-' + commentId);
      const commentButton = $('#js-comment-button-' + commentId);
      const commentError = $('#js-comment-post-error-' + commentId); 
      const commentHogehoge = $('#hogehoge-' + commentId);

      commentLabelArea.show();
      commentLabelArea.text(data.post); 
      commentTextArea.hide();
      commentButton.hide();
      commentError.hide();
      commentHogehoge.text(data.post);
    })
    .fail(function () {
      const commentError = $('#js-comment-post-error-' + commentId); 
      commentError.text('コメントを入力してください');                      
    })
  });
});