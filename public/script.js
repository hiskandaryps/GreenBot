// api url
const api_url = "https://greenbot-b1b04-default-rtdb.asia-southeast1.firebasedatabase.app/.json";
// masukan url sesuai dengan format <ChannelID>, <ReadAPIKeys> yang ada di Thingspeak, tanpa menggunakan < >

setInterval(() => {
  fetch(api_url)
    .then((hasil) => hasil.json())
    .then((res) => {
      var field1 = JSON.stringify(res.test.float);
      var field2 = JSON.stringify(res.test.string);
      var obj1 = JSON.parse(field1);
      var obj2 = JSON.parse(field2);
      document.getElementById("AX").innerHTML = obj1+"%";
      document.getElementById("AY").innerHTML = obj2;
    });
}, 500);



  