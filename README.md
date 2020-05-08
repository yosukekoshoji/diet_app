## 📗 アプリ名
3ヶ月で8キロ痩せるダイエットアプリ
====

## 📗 制作背景
プログラミングを学ぶ中で、過去最高に太ってしまいました。
そこで一念発起し、ダイエットをしようと思ったのですが、
情報が多すぎてかなり遠回りしてしまいました。
そこでアプリを通して、自身が実践した食事やトレーニング、取り組む際の考え方を伝えて
悩んでいる方に近道をしてもらいたいという思いで制作しました。


## 📗 ログイン情報
- URL: https://koshodietapp.herokuapp.com/
- Email: hogehoge@gmail.com
- password: hogehoge

## 📗 開発環境
- Ruby 2.5.1
- Ruby on Rails　5.2.4.2
- Jquery 
- MySQL 5.6.43
- VSCode（Visual Studio Code）

## 📗 アプリ機能
## 1.ユーザー登録/ログイン/ログアウト機能
![新規登録](https://i.imgur.com/GO3sAon.png "singin")
![ログイン](https://i.imgur.com/5Cvy5Hu.png "login")

## 2.コメント投稿機能
非同期通信にてコメント投稿（ユーザー同士の情報交換）が可能です。
![投稿](https://user-images.githubusercontent.com/58423182/79852725-019ba500-8402-11ea-885c-f65a7511d5e3.gif)

## 3.コメント編集/削除機能
非同期通信にて編集が出来ます。

![編集](https://user-images.githubusercontent.com/58423182/79852778-1710cf00-8402-11ea-9be6-5b0b688947c7.gif)

## 4.コメントを削除出来ます。
![削除](https://user-images.githubusercontent.com/58423182/79852822-26901800-8402-11ea-8640-f10703ef56c3.gif)

## 5.ページを閲覧しながらダイエットの手法を学べます。

![ページ紹介](https://user-images.githubusercontent.com/58423182/79851182-ed56a880-83ff-11ea-85fe-81e72e77de81.gif)

## Userテーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|nickname|string|null: false|

###Association
- has_many :posts

## Postテーブル

|Column|Type|Options|
|------|----|-------|
|post|text|------|
|image|string|------|
|user_id|integer|null: false|

###Association
- belongs_to :user

## 📗 苦労した点
非同期でコメントを連続投稿する際に、連続投稿した回数＊２の数だけコメントが増え続けるといったエラーが発生し、その修正に苦労しました。
Jqueryの記載を間違えているのかと思い見直しましたが特に異常がなく
似たようなエラーが調べても出て来なかったのですが
ベロッパーツールでどの要素が繰り返し表示されているのかを見て、コード上のどこでその要素を出力しているのかを特定できれば解決するのではないかという考えに至り、
結果的にhtmlの構造を修正したところ解決できました
仮説と構造的にどうなっているのかを把握することの大切さを身にしみて感じました。

## 📗 今後追加したい機能
- ログインスタンプ機能
- トレーニング日誌ページの追加
- 自動更新機能

## 📗 Qiita
https://qiita.com/furukouji