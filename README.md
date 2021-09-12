# Financialstatements-app(google-app-script)
## 機能
東証が運営するTDnetからその日に発表された決算短信のみをスクレイピングし、Line Botから日時でpush通知し、スプレッドシートへ書き出し処理を行う。

◆Line Botからpush通知する情報  
- 証券コード  
- 会社名  
- タイトル  

◆スプレッドシートへ書き出す情報  
- 証券コード  
- 会社名  
- タイトル  
- pdfリンク  

※アクセストークン、ユーザーIDはラインディベロッパーからご自身で取得したもの入力する。  
※スプレッドシートは書き出したいスプレッドシートのidをコピーし、張り付ける。

## 環境インストール方法
1. Lineデベロッパーへアクセス  
  https://developers.line.biz/en/  にて、LineDevelopersへのログインを行う。   



2. プロバイダーの作成  
![スクリーンショット 2021-09-12 225602](https://user-images.githubusercontent.com/44935028/132990909-5a0d8fba-d884-4e3b-a908-e45cb8a889cc.png)  

3. MessageAPIの選択    
![スクリーンショット 2021-09-12 225635](https://user-images.githubusercontent.com/44935028/132990912-f81f5b45-ee97-43fd-b635-6dc19740aa63.png)

4. チャンネルの作成  
![スクリーンショット 2021-09-12 230154](https://user-images.githubusercontent.com/44935028/132990907-9295021c-9f35-40a6-ade3-d3e064c289d3.png)

5. MessageAPIタブからアクセストークンの発行  
![スクリーンショット 2021-09-12 232018](https://user-images.githubusercontent.com/44935028/132991592-802bb31d-e97d-4ad9-b5d2-35f61a92102a.png)  

6. LINE Offical Account featuresからEditを選択し、応答設定のあいさつメッセージ、応答メッセージをオフに設定
![スクリーンショット 2021-09-12 232721](https://user-images.githubusercontent.com/44935028/132991627-4e5b6158-12ba-47ab-9ee0-d391fe943bfb.png)  
![スクリーンショット 2021-09-12 232842](https://user-images.githubusercontent.com/44935028/132991626-57bcb342-dee3-435a-957b-0a5a290e4a5c.png)  

7. Googleドライブへ移動し、Google App Scriptを選択  
![スクリーンショット 2021-09-12 233813](https://user-images.githubusercontent.com/44935028/132991990-39977ee5-0eb1-4784-aad5-afc4ee470a1d.png)  

8. https://github.com/kenichiiwase/Financialstatements-app/blob/main/kessan.gs のファイルを全選択し貼り付ける  

9. 




