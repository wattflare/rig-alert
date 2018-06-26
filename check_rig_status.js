const request = require('request');

var slack_webhook_url = "https://hooks.slack.com/services/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";

var etc_pool = {
  url: "http://etc.miningpool.io/api/accounts/",
  accounts: [
    "0x087db2890fb62ecbbf9066cbd607c9e115f3b7ee",
    "0xc89c6c37a31629cb9123f2db7b7c9e85f5275cd1",
    "0xed318d453f29e38ba11b18959b825b41ad8c678b"
  ]
};

var music_pool = {
  url: "http://music.gpu.network/api/accounts/",
  accounts: [
    "0x0aedeb18ed2170318b07250bf5e525dfa19104d1"
  ]
};

//Check ETC pool status
Object.keys(etc_pool.accounts).forEach(function(account) {
  console.log("Checking ETC pool status");
  checkWorkerStatus(etc_pool.url, etc_pool.accounts[account]);
});

//Check MUSIC pool status
Object.keys(music_pool.accounts).forEach(function(account) {
  console.log("Checking MUSIC pool status");
  checkWorkerStatus(music_pool.url, music_pool.accounts[account]);
});


function sendAlert(alertMessage){
  console.log("sending slack alert... " + alertMessage);
  request.post({
    url: slack_webhook_url, 
    json: {text: alertMessage}
    }, function(err,httpResponse,body){ 
        if (err) { return console.log(err); }
          console.log("alert sent");
    });
}

function checkWorkerStatus(apiUrl, account){
  var workerAPIUrl = apiUrl + account;
  request(workerAPIUrl, { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log("account: " + account);
    
    Object.keys(body.workers).forEach(function(worker) {
      console.log(worker + ":" + body.workers[worker].offline);
      if(body.workers[worker].offline === true){
        console.log(worker + " is offline, sending slack alert");
        var alertMessage = worker + " is offline";
        sendAlert(alertMessage);
      }
    });
  });
}


