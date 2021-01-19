const CHANNEL_ACCESS_TOKEN = 'アクセストークン';
const USER_ID = 'ユーザーID';

// 今日の日付
const dt = new Date();
const y = dt.getFullYear();
const m = ('00' + (dt.getMonth() + 1)).slice(-2);
const d = ('00' + dt.getDate()).slice(-2);

let yyyymmdd = y.toString();
yyyymmdd += m.toString();
yyyymmdd += d.toString();
const today = y + '/' + m + '/' + d;

// yyyymmdd = "20201229";

//実際にメッセージを送信する関数を作成します。
function push(message) {
  //toのところにメッセージを送信したいユーザーのIDを指定します。(toは最初の方で自分のIDを指定したので、linebotから自分に送信されることになる。)
  //textの部分は、送信されるメッセージが入ります。getInvestInfという関数で定義したメッセージがここに入る。
  const postData = {
    to: USER_ID,
    messages: [
      {
        type: 'text',
        text: message,
      },
    ],
  };

  const link = 'https://api.line.me/v2/bot/message/push';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + CHANNEL_ACCESS_TOKEN,
  };

  const options = {
    method: 'post',
    headers: headers,
    payload: JSON.stringify(postData),
  };

  const response = UrlFetchApp.fetch(link, options);
}

function getInvestInf() {
  const api =
    'https://webapi.yanoshin.jp/webapi/tdnet/list/' + yyyymmdd + '.json';

  // 証券コード
  let companycode;
  // 会社名
  let companyname;
  // 資料タイトル
  let title;
  // url
  let documenturl;

  let count = 0;
  let message = `${today} の決算短信じゃ\n`;
  message += `確認せ～\n`;
  message +='スプレッドシートのリンク';
  const response = UrlFetchApp.fetch(api);
  let investobj = JSON.parse(response.getContentText());
  if (investobj.total_count > 0) {
    let arr = [];

    for (i = 0; i < investobj.items.length; i++) {
      title = investobj.items[i].Tdnet.title;
      if (investobj.items[i].Tdnet.url_xbrl !== null) {
        if (title.match(/決算短信/gi)) {
          count += 1;

          // 配列取得
          companycode = investobj.items[i].Tdnet.company_code;
          companyname = investobj.items[i].Tdnet.company_name;
          documenturl = investobj.items[i].Tdnet.document_url;
          // 証券コードと会社名を設定
          message += `${companycode} : ${companyname} \n\n`;

          arr.push([companycode, companyname, title, documenturl]);

          let id = '書き出すスプレッドシートのid';
          let ss = SpreadsheetApp.openById(id);
          let sheet = ss.getSheetByName('シート名');
          let iii = arr.length; // タテ（行数）
          let jjj = arr[0].length; // ヨコ（列数）
          let lastRow = sheet.getLastRow();
          sheet.getRange(2, 1, lastRow, 4).clearContent();
          // スプレッドシートのA2セルを起点として、配列arrをセットする
          sheet.getRange(2, 1, iii, jjj).setValues(arr);
        }
      }
    }
    message += `${count}件あるぞ`;
  } else {
    message = `${today} の決算短信はない。`;
    return push(message);
  }
  return push(message);
}
