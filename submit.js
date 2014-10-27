var concur = require('concur-platform');
var fs = require('fs');

fs.readFile('barbill.jpg', function(err, image){
    concur.receipt.send({oauthToken:'33q+ryU6CSQ7UEF5Ez67C14cWvI=', image:image, contentType:'image/jpg'});
});

var barBill = {
    "Comment": "Team Dinner",
    "CurrencyCode": "USD",
    "ExpenseTypeCode": "DINNR",
    "LocationCity": "San Francisco",
    "LocationCountry": "US",
    "LocationSubdivision": "US-CA",
    "TransactionAmount": "43067.50",
    "TransactionDate": "2014-10-29",
    "VendorDescription": "Westin St. Francis"
};

concur.quickexpense.send({oauthToken:'33q+ryU6CSQ7UEF5Ez67C14cWvI=', body:barBill});