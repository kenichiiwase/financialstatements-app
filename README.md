# 決算短信通知bot(google-app-script)
## 機能
東証が運営するTDnet（https://www.release.tdnet.info/inbs/I_main_00.html） から決算短信をスクレイピングし、LINEへの通知処理と、スプレッドシートへの書き出し処理を行う

LINE Botへpush通知する情報  
- 証券コード  
- 会社名  
- タイトル  

スプレッドシートへ書き出す情報  
- 証券コード  
- 会社名  
- タイトル  
- pdfリンク   

## 使用手順
1. LINEデベロッパーへアクセス  
  https://developers.line.biz/en/  にて、LineDevelopersへのログインを行う。   

2. プロバイダーの作成  
![スクリーンショット 2021-09-12 225602](https://user-images.githubusercontent.com/44935028/132990909-5a0d8fba-d884-4e3b-a908-e45cb8a889cc.png)  

3. MessageAPIの選択    
![スクリーンショット 2021-09-12 225635](https://user-images.githubusercontent.com/44935028/132990912-f81f5b45-ee97-43fd-b635-6dc19740aa63.png)

4. チャンネルの作成  
![スクリーンショット 2021-09-12 230154](https://user-images.githubusercontent.com/44935028/132990907-9295021c-9f35-40a6-ade3-d3e064c289d3.png)

5. MessageAPIタブからアクセストークンの発行   ※予めQRコードからLINEへアカウントを追加しておく  
![スクリーンショット 2021-09-12 232018](https://user-images.githubusercontent.com/44935028/132991592-802bb31d-e97d-4ad9-b5d2-35f61a92102a.png)  

6. LINE Offical Account featuresからEditを選択し、応答設定のあいさつメッセージ、応答メッセージをオフとし、webhookをオンに設定
![スクリーンショット 2021-09-12 232721](https://user-images.githubusercontent.com/44935028/132991627-4e5b6158-12ba-47ab-9ee0-d391fe943bfb.png)  
![スクリーンショット 2021-09-12 232842](https://user-images.githubusercontent.com/44935028/132991626-57bcb342-dee3-435a-957b-0a5a290e4a5c.png)  

7. Googleドライブへ移動し、Google App Scriptを選択  
![スクリーンショット 2021-09-12 233813](https://user-images.githubusercontent.com/44935028/132991990-39977ee5-0eb1-4784-aad5-afc4ee470a1d.png)  

8. https://github.com/kenichiiwase/Financialstatements-app/blob/master/kessan.gs のファイルを全選択し、貼り付ける  

9. 自身のアクセストークン、ユーザIDを貼り付ける  
![スクリーンショット 2021-09-13 022319](https://user-images.githubusercontent.com/44935028/132996898-c51bf362-6e34-4cb6-8244-ec2df99e31df.png)    

10. 書き出したいスプレッドシートのidをコピーし、貼り付ける  
※IDに「-」の記載があるものは書き出しがうまく処理されない為、数字と英字のみの記載があるものを使用する。 
ex)1yqPsU4EkYEHc15k3V72UwGI9TYUWbUhaGS0XWSfbCB0  
![スクリーンショット 2021-09-13 213950](https://user-images.githubusercontent.com/44935028/133085135-ecaab8b9-3e87-4329-9324-d86382197b42.png)  
![スクリーンショット 2021-09-13 213502](https://user-images.githubusercontent.com/44935028/133084458-66b4f349-c655-4cbb-a55a-c951d589e76c.png)   

11. スプレッドシートのリンク+\n\nを貼り付ける  
![スクリーンショット 2021-09-13 011110](https://user-images.githubusercontent.com/44935028/132994943-846b5e82-2459-4bdf-9c26-7e6dba75ebc7.png)  
![スクリーンショット 2021-09-13 214204](https://user-images.githubusercontent.com/44935028/133085389-8f9510d4-9fef-479b-abe0-dd9247d8346b.png)

12. スプレッドシートのシート名を貼り付ける  
![スクリーンショット 2021-09-13 214555](https://user-images.githubusercontent.com/44935028/133085939-b150466e-dacd-4dad-bbd1-9c3a6297f760.png)    
![スクリーンショット 2021-09-13 213436](https://user-images.githubusercontent.com/44935028/133084459-aa17ffdd-ae9a-4c7f-bc1e-ad354e513220.png)    

13. 新しいデプロイ>ウェブアプリ>デプロイボタンを押下　
![スクリーンショット 2021-09-13 023434](https://user-images.githubusercontent.com/44935028/132997192-ad84f851-3ee2-4230-9da8-71cfa8d5cda9.png)　　    

14. URLをコピーし、webhook URLへ貼り付ける  
![スクリーンショット 2021-09-13 023506](https://user-images.githubusercontent.com/44935028/132997190-145e06cb-5ed1-4e6d-b01c-94c1547161e6.png)　　
![スクリーンショット 2021-09-13 023839](https://user-images.githubusercontent.com/44935028/132997288-beb43f60-db19-4cdb-bdbd-6643ff142439.png)  

15. トリガーを選択後、トリガー追加ボタンを押下  
![スクリーンショット 2021-09-13 024129](https://user-images.githubusercontent.com/44935028/132997434-8eeca2ab-0df7-44b2-98eb-bb8d73264dab.png)  

16. 下記タイマーに設定（日次で20-21時にpush通知する）  
![スクリーンショット 2021-09-13 024158](https://user-images.githubusercontent.com/44935028/132997433-50a2b789-d9dc-4db8-a331-1884fefa4ad1.png)
