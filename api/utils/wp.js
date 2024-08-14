function sendWP() {

var botId = '332601789947634';
var phoneNbr = '541170190832';
var bearerToken = 'EAAFRyeVoSO4BOZC09tsPhZAQP7BDCmacZB6qnfwIqd4yKaOdgFDkBnE0WBxY8ijsWRObYpQQWabt8Q9rjzR8qZC3A2PuSeOgVyTWr4RtzCIr86bx1LOMwQIy0A7n4kZBXeTaHGdH4TDx6aTji95IlWVLAaaHwmJWdDPyLZAR5dArDNaexs31PqtjsW6JzvO8IDNSW4eMia8fzL349o';

var url = 'https://graph.facebook.com/v20.0/' + botId + '/messages';
var data = {
  messaging_product: 'whatsapp',
  to: phoneNbr,
  type: 'template',
  template: {
    name:'hello_world',
    language:{ code: 'en_US' }
  }
};

var postReq = {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + bearerToken,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data),
  json: true
};

fetch(url, postReq)
  .then(data => {
    return data.json()
  })
  .then(res => {
    console.log(res)
  })
  .catch(error => console.log(error));

}

module.exports = sendWP