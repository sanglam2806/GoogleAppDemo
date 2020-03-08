var url = "https://docs.google.com/spreadsheets/d/13M6nrNo1EJ0AL1DEK7mTomcVBHeWQwxV-r34-XIraMo/edit#gid=0";

function doGet(e) {
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Options");
  var list = ws.getRange(1, 1, ws.getRange("A1").getDataRegion().getLastRow(), 1).getValues();

  var tmp = HtmlService.createTemplateFromFile("page");
  tmp.list = list;
  return tmp.evaluate();
}

function userClicked(userInfo) {

  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Data");

  ws.appendRow([userInfo.username, userInfo.age, userInfo.city, userInfo.app]);

  Logger.log(userInfo);
}

function include(fileName) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
function getUserKYK(kyk) {
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("KYK");
  var userList = ws.getRange(1, 1, ws.getLastRow(), 2).getValues();

  var kykList = userList.map(r => r[0]);
  var butList = userList.map(r => r[1]);

  var pos = kyklist.indexOf(kyk);
  if (pos > -1) {
    return butList[pos];
  } else {
    return 'Undefine';
  }
}