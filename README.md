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

## 使用手順
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

8. https://github.com/kenichiiwase/Financialstatements-app/blob/main/kessan.gs のファイルを全選択し、貼り付ける  

9. 自身のアクセストークン、ユーザIDを貼り付ける  
![スクリーンショット 2021-09-12 235149](https://user-images.githubusercontent.com/44935028/132992336-c073ebee-3561-41ac-8d7d-8cdf6b7b2d37.png)  

10. 書き出したいスプレッドシートのidをコピーし、貼り付ける 
![スクリーンショット 2021-09-13 004923](https://user-images.githubusercontent.com/44935028/132994197-54299cae-fc49-49b8-bfb0-3859ebc5b45f.png)  
![スクリーンショット 2021-09-13 010632](https://user-images.githubusercontent.com/44935028/132994753-aa414277-def8-4bda-9290-34c15cf26727.png)  

11.  スプレッドシートのリンク+\n\nを貼り付ける  
![スクリーンショット 2021-09-13 011110](https://user-images.githubusercontent.com/44935028/132994943-846b5e82-2459-4bdf-9c26-7e6dba75ebc7.png)  
![スクリーンショット 2021-09-13 011214](https://user-images.githubusercontent.com/44935028/132994945-cf7f35e4-3961-4fcb-b34b-10af1e012c46.png)  



