var express = require('express');
var app = express();
var cors = require('cors');

// Set port based on environment variable
// https://nodejs.org/api/process.html#process_process_env
app.set('port', (process.env.PORT || 5000));

app.use(cors());

// Serve static files out of the `public` directory
// https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
