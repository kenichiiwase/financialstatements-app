# Financialstatements-app(google-app-script)
## 機能
東証が運営するTDnetからその日に発表された決算短信のみをスクレイピングし、Line Botから日時でpush通知し、スプレッドシートへ書き出し処理を行う。

◆Line Botからpush通知する情報
・証券コード
・会社名
・タイトル

◆スプレッドシートへ書き出す情報
・証券コード
・会社名
・タイトル
・pdfリンク

※アクセストークン、ユーザーIDはラインディベロッパーからご自身で取得したもの入力する。
※スプレッドシートは書き出したいスプレッドシートのidをコピーし、張り付ける。
## 環境インストール方法

https://developers.line.biz/en/　にて、LineDevelopersへのログインを行う。
