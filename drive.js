var GoogleDrive = require('google-source-drive')
var creds = require('./client_secret.json')

// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleDrive('*1VbjP8cifQLzsqZ2DjAhP3NHaKHkoR_PB*')

// Authenticate with the Google Spreadsheets API.
doc.useServiceAccountAuth(creds, function(err) {
  // Get all of the rows from the spreadsheet.
  doc.getRows(1, function(err, rows) {
    console.log(rows)
  })
})
