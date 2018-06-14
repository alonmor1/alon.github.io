// Open  coinmarketcap API

var tickerRequest = new XMLHttpRequest();
tickerRequest.open('GET', 'https://api.coinmarketcap.com/v1/ticker/');
tickerRequest.onload = function() {
	var tickerData = JSON.parse(tickerRequest.responseText);
	renderHTML(tickerData);
};
tickerRequest.send();

// Var Info on bitcoin.html

var currentInfo = document.getElementById("current-info");

var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);



// Print Ticker Info
function renderHTML(data) {

	for (i = 0; i <= 11; i++) {
		var cryptoName = JSON.stringify(data[i].name);
		var cryptoRank = parseInt(data[i].rank);
		var cryptoId = data[i].id;
		function round(num,decimals) {
   		var sign = num >= 0 ? 1 : -1;
    	return (Math.round((num*Math.pow(10,decimals)) + (sign*0.001)) / Math.pow(10,decimals)).toFixed(decimals);
		}
		var cryptoPrice = round(data[i].price_usd, 2);
		var htmlString = "";
		var pChange = data[i].percent_change_24h;
		var tickerInfo = '<p class="text-light pt-0 pb-0 mt-0 mb-0">' + 'Rank: ' + data[i].rank + '</p>' + 
		'<p class="text-light pt-0 pb-0 mt-0 mb-0 font-weight-bold">' + data[i].name + '</p>' + '<p class="text-light pt-0 pb-0 mt-0 mb-0 font-weight-bold">' + '$' + cryptoPrice + '  ' ;
		if (filename === 'bitcoin.html') {
			if (cryptoId === 'bitcoin') {
			htmlString += tickerInfo;
			currentInfo.insertAdjacentHTML('beforebegin', htmlString + '<a id="posNeg">' + pChange + '%' + '</a>' + '</p>');
			var posNeg = document.getElementById("posNeg");
			var firstCrypto = data[i].name;
				if (pChange > 0) {
					posNeg.style.color = "Chartreuse";
				} else if (pChange < 0) {
					posNeg.style.color = "red"
				}
			}
		}
	}
}


	// for (i = 0; i <= 11; i++) {
	// 	var cryptoName = JSON.stringify(data[i].name);
	// 	if (filename='bitcoin.html') {
	// 		var cryptoRank = parseInt(data[i].rank);
	// 		console.log(cryptoRank);
	// 		function round(num,decimals){
	// 		var cryptoPrice = round(data[i].price_usd, 4);
	// 		var htmlString = "";
	// 		var pChange = data[i].percent_change_24h
	// 		var tickerInfo = '<p class="text-light pt-0 pb-0 mt-0 mb-0">' + 'Rank: ' + data[i].rank + '</p>' + 
	// 		'<p class="text-light pt-0 pb-0 mt-0 mb-0 font-weight-bold">' + data[i].name + '</p>' + '<p class="text-light pt-0 pb-0 mt-0 mb-0 font-weight-bold">' + '$' + 
	// 		cryptoPrice + '  ' + '<p class="text-light pt-0 pb-0 mt-0 mb-0 font-weight-bold>' + 'Available Supply: ' + data[i].available_supply + ' ' + data[i].symbol + ' </p>';
	// 		htmlString += tickerInfo;
	// 		}
	// 	}
	// }
// }