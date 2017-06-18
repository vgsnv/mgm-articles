var express = require('express');
var app = express();

app.get('/*', function (req, res) {

  const json = {
  '19df4': { id: '19df4', title: 'Макароны', value: 130 },
  '19df3': { id: '19df3', title: 'Сосиски', value: 240 },
  '19df5': { id: '19df5', title: 'Доширак', value: 20 },
  '19df6': { id: '19df6', title: 'Пицца', value: 350 },
  };

  res.json(json);
});

app.listen(1481, function () {
  console.log('Example app listening on port 1481!');
});