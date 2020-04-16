// $.ajaxSetup({
//   headers: {
//     'X-CSRF-TOKEN': $('meta[name="token"]').attr('content')
//   }
// });
// $(function() {
//   $('.postManage__delete').on('click', function() {
//     var deleteConfirm = confirm('削除してよろしいでしょうか？');

//     if(deleteConfirm == true) {
//       var clickEle = $(this)
//       // 削除ボタンにユーザーIDをカスタムデータとして埋め込んでます。
//       var userID = clickEle.attr('data-user-id');

//       $.ajax({
//         url: '/products/new' + userID,
//         type: 'POST',
//         data: {'id': userID,
//                '_method': 'DELETE'} // DELETE リクエストだよ！と教えてあげる。
//       })

//      .done(function() {
//         // 通信が成功した場合、クリックした要素の親要素の <tr> を削除
//         clickEle.parents('tr').remove();
//       })


//     } else {
//       (function(e) {
//         e.preventDefault()
//       });
//     };
//   });
// });