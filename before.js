// AJAX Request: oAuth Token Request (https://www.concursolutions.com/net2/oauth2/accesstoken.ashx)

$.ajax({
  url: "https://www.concursolutions.com/net2/oauth2/accesstoken.ashx",
  type: "POST",
  timeout: 30000,

  // HTTP Headers: https://www.concursolutions.com/net2/oauth2/accesstoken.ashx

  headers:{
    "Authorization":"Basic Y29uY3VyLWRldkBzaW1vbmd1ZXN0LmNvbTpDRHMxbTBuMSE=",
    "Accept":"application/json",
    "X-ConsumerKey":"rGkpUM6Mqa7AmuOtHwBdsn",
  },

  // Success Callback: https://www.concursolutions.com/net2/oauth2/accesstoken.ashx

  success:function(data, textStatus) {
    console.log("Received response HTTP "+textStatus+" (https://www.concursolutions.com/net2/oauth2/accesstoken.ashx)");
    console.log(data);
  },

  // Error Callback: https://www.concursolutions.com/net2/oauth2/accesstoken.ashx

  error:function(jqXHR, textStatus, errorThrown) {
    console.log("Error during request "+textStatus+" (https://www.concursolutions.com/net2/oauth2/accesstoken.ashx)");
    console.log(errorThrown);
  },
});

// AJAX Request: Post Receipt Image (https://www.concursolutions.com/api/v3.0/expense/receiptimages)

$.ajax({
  url: "https://www.concursolutions.com/api/v3.0/expense/receiptimages",
  type: "POST",
  timeout: 30000,

  // HTTP Headers: https://www.concursolutions.com/api/v3.0/expense/receiptimages

  headers:{
    "Authorization":"OAuth 33q+ryU6CSQ7UEF5Ez67C14cWvI=",
  },

  // Request Body: https://www.concursolutions.com/api/v3.0/expense/receiptimages

  data:null, // Set your own body

  // Success Callback: https://www.concursolutions.com/api/v3.0/expense/receiptimages

  success:function(data, textStatus) {
    console.log("Received response HTTP "+textStatus+" (https://www.concursolutions.com/api/v3.0/expense/receiptimages)");
    console.log(data);
  },

  // Error Callback: https://www.concursolutions.com/api/v3.0/expense/receiptimages

  error:function(jqXHR, textStatus, errorThrown) {
    console.log("Error during request "+textStatus+" (https://www.concursolutions.com/api/v3.0/expense/receiptimages)");
    console.log(errorThrown);
  },
});

// AJAX Request: Post Quick Expense (https://www.concursolutions.com/api/expense/expensereport/v1.0/quickexpense)

$.ajax({
  url: "https://www.concursolutions.com/api/expense/expensereport/v1.0/quickexpense",
  type: "POST",
  timeout: 30000,

  // HTTP Headers: https://www.concursolutions.com/api/expense/expensereport/v1.0/quickexpense

  headers:{
    "Accept":"application/json",
    "Authorization":"OAuth 33q+ryU6CSQ7UEF5Ez67C14cWvI=",
    "Content-Type":"application/json",
  },

  // Request Body: https://www.concursolutions.com/api/expense/expensereport/v1.0/quickexpense

  data:"[\n    { \n    \"Comment\": \"\",\n    \"CurrencyCode\": \"USD\",\n    \"ExpenseTypeCode\": \"DINNR\",\n    \"LocationCity\": \"San Francisco\",\n    \"LocationCountry\": \"US\",\n    \"LocationSubdivision\": \"US-CA\",\n    \"TransactionAmount\": \"43067.50\",\n    \"TransactionDate\": \"2014-10-29\",\n    \"VendorDescription\": \"Westin St. Francis\"\n    }\n]",

  // Success Callback: https://www.concursolutions.com/api/expense/expensereport/v1.0/quickexpense

  success:function(data, textStatus) {
    console.log("Received response HTTP "+textStatus+" (https://www.concursolutions.com/api/expense/expensereport/v1.0/quickexpense)");
    console.log(data);
  },

  // Error Callback: https://www.concursolutions.com/api/expense/expensereport/v1.0/quickexpense

  error:function(jqXHR, textStatus, errorThrown) {
    console.log("Error during request "+textStatus+" (https://www.concursolutions.com/api/expense/expensereport/v1.0/quickexpense)");
    console.log(errorThrown);
  },
});
