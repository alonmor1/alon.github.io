// Get ticker info div, picture div, and button div. Put into variables.

var tickerContainer1 = document.getElementById("ticker-info-1");
var tickerContainer2 = document.getElementById("ticker-info-2");
var tickerContainer3 = document.getElementById("ticker-info-3");
var tickerContainer4 = document.getElementById("ticker-info-4");
var tickerContainer5 = document.getElementById("ticker-info-5");
var tickerContainer6 = document.getElementById("ticker-info-6");
var tickerContainer7 = document.getElementById("ticker-info-7");
var tickerContainer8 = document.getElementById("ticker-info-8");
var tickerContainer9 = document.getElementById("ticker-info-9");
var tickerContainer10 = document.getElementById("ticker-info-10");
var tickerContainer11 = document.getElementById("ticker-info-11");
var tickerContainer12 = document.getElementById("ticker-info-12");

var cryptoImage1 = document.getElementById("crypto-image-1");
var cryptoImage2 = document.getElementById("crypto-image-2");
var cryptoImage3 = document.getElementById("crypto-image-3");
var cryptoImage4 = document.getElementById("crypto-image-4");
var cryptoImage5 = document.getElementById("crypto-image-5");
var cryptoImage6 = document.getElementById("crypto-image-6");
var cryptoImage7 = document.getElementById("crypto-image-7");
var cryptoImage8 = document.getElementById("crypto-image-8");
var cryptoImage9 = document.getElementById("crypto-image-9");
var cryptoImage10 = document.getElementById("crypto-image-10");
var cryptoImage11 = document.getElementById("crypto-image-11");
var cryptoImage12 = document.getElementById("crypto-image-12");

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");
var button9 = document.getElementById("button9");
var button10 = document.getElementById("button10");
var button11 = document.getElementById("button11");
var button12 = document.getElementById("button12");

// Open  coinmarketcap API

var tickerRequest = new XMLHttpRequest();
tickerRequest.open('GET', 'https://api.coinmarketcap.com/v1/ticker/');
tickerRequest.onload = function() {
	var tickerData = JSON.parse(tickerRequest.responseText);
	renderHTML(tickerData);
};
tickerRequest.send();

// Insert ticker info and crypto pictures into appropriate spots 1-10

function renderHTML(data) {
	
	for (i = 0; i <= 11; i++) {
		var cryptoName = JSON.stringify(data[i].name);
		var cryptoRank = parseInt(data[i].rank);
		function round(num,decimals) {
   		var sign = num >= 0 ? 1 : -1;
    	return (Math.round((num*Math.pow(10,decimals)) + (sign*0.001)) / Math.pow(10,decimals)).toFixed(decimals);
		}
		var cryptoPrice = round(data[i].price_usd, 2);
		var htmlString = "";
		var pChange = data[i].percent_change_24h
		var tickerInfo = '<p class="text-light pt-0 pb-0 mt-0 mb-0">' + 'Rank: ' + data[i].rank + '</p>' + 
		'<p class="text-light pt-0 pb-0 mt-0 mb-0 font-weight-bold">' + data[i].name + '</p>' + '<p class="text-light pt-0 pb-0 mt-0 mb-0 font-weight-bold">' + '$' + 
		cryptoPrice + '  ' ;
		
		if (cryptoRank === 1) {
			htmlString += tickerInfo;
			tickerContainer1.insertAdjacentHTML('beforebegin', htmlString + '<a id="posNeg">' + pChange + '%' + '</a>' + '</p>');
			var posNeg = document.getElementById("posNeg");
			var firstCrypto = data[i].name;
			button1.href = data[i].id + ".html";
			if (pChange > 0) {
				posNeg.style.color = "Chartreuse";
			} else if (pChange < 0) {
				posNeg.style.color = "red"
			}
		} else if (cryptoRank === 2) {
			htmlString += tickerInfo;
			tickerContainer2.insertAdjacentHTML('beforebegin', htmlString + '<a id="posNeg1">' + pChange + '%' + '</a>' + '</p>');	
			var posNeg1 = document.getElementById("posNeg1");
			var secondCrypto = data[i].name;
			button2.href = data[i].id + ".html";	
			if (pChange > 0) {
				posNeg1.style.color = "Chartreuse";
			} else if (pChange < 0) {
				posNeg1.style.color = "red"
			}				
		} else if (cryptoRank === 3) {
			htmlString += tickerInfo;
			tickerContainer3.insertAdjacentHTML('beforebegin', htmlString + '<a id="posNeg2">' + pChange + '%' + '</a>' + '</p>');	
			var posNeg2 = document.getElementById("posNeg2");
			var thirdCrypto = data[i].name;	
			button3.href = data[i].id + ".html";
			if (pChange > 0) {
				posNeg2.style.color = "Chartreuse";
			} else if (pChange < 0) {
				posNeg2.style.color = "red"
			}				
		} else if (cryptoRank === 4) {
			htmlString += tickerInfo;
			tickerContainer4.insertAdjacentHTML('beforebegin', htmlString + '<a id="posNeg3">' + pChange + '%' + '</a>' + '</p>');	
			var posNeg3 = document.getElementById("posNeg3");
			var fourthCrypto = data[i].name;		
			button4.href = data[i].id + ".html";
			if (pChange > 0) {
				posNeg3.style.color = "Chartreuse";
			} else if (pChange < 0) {
				posNeg3.style.color = "red"
			}	
		} else if (cryptoRank === 5) {
			htmlString += tickerInfo;
			tickerContainer5.insertAdjacentHTML('beforebegin', htmlString + '<a id="posNeg4">' + pChange + '%' + '</a>' + '</p>');	
			var posNeg4 = document.getElementById("posNeg4");
			var fifthCrypto = data[i].name;	
			button5.href = data[i].id + ".html";	
			if (pChange > 0) {
				posNeg4.style.color = "Chartreuse";
			} else if (pChange < 0) {
				posNeg4.style.color = "red"
			}	
		} else if (cryptoRank === 6) {
			htmlString += tickerInfo;
			tickerContainer6.insertAdjacentHTML('beforebegin', htmlString + '<a id="posNeg5">' + pChange + '%' + '</a>' + '</p>');	
			var posNeg5 = document.getElementById("posNeg5");
			var sixthCrypto = data[i].name;
			button6.href = data[i].id + ".html";
			if (pChange > 0) {
				posNeg5.style.color = "Chartreuse";
			} else if (pChange < 0) {
				posNeg5.style.color = "red"
			}			
		} else if (cryptoRank === 7) {
			htmlString += tickerInfo;
			tickerContainer7.insertAdjacentHTML('beforebegin', htmlString+ '<a id="posNeg6">' + pChange + '%' + '</a>' + '</p>');	
			var posNeg6 = document.getElementById("posNeg6");
			var seventhCrypto = data[i].name;	
			button7.href = data[i].id + ".html";
			if (pChange > 0) {
				posNeg6.style.color = "Chartreuse";
			} else if (pChange < 0) {
				posNeg6.style.color = "red"
			}		
		} else if (cryptoRank === 8) {
			htmlString += tickerInfo;
			tickerContainer8.insertAdjacentHTML('beforebegin', htmlString + '<a id="posNeg7">' + pChange + '%' + '</a>' + '</p>');
			var posNeg7 = document.getElementById("posNeg7");		
			var eighthCrypto = data[i].name;	
			button8.href = data[i].id + ".html";
			if (pChange > 0) {
				posNeg7.style.color = "Chartreuse";
			} else if (pChange < 0) {
				posNeg7.style.color = "red"
			}	
		} else if (cryptoRank === 9) {
			htmlString += tickerInfo;
			tickerContainer9.insertAdjacentHTML('beforebegin', htmlString + '<a id="posNeg8">' + pChange + '%' + '</a>' + '</p>');
			var posNeg8 = document.getElementById("posNeg8");			
			var ninthCrypto = data[i].name;
			button9.href = data[i].id + ".html";
			if (pChange > 0) {
				posNeg8.style.color = "Chartreuse";
			} else if (pChange < 0) {
				posNeg8.style.color = "red"
			}	
		} else if (cryptoRank === 10) {
			htmlString += tickerInfo;
			tickerContainer10.insertAdjacentHTML('beforebegin', htmlString + '<a id="posNeg9">' + pChange + '%' + '</a>' + '</p>');
			var posNeg9 = document.getElementById("posNeg9");
			var tenthCrypto = data[i].name;		
			button10.href = data[i].id + ".html";
			if (pChange > 0) {
				posNeg9.style.color = "Chartreuse";
			} else if (pChange < 0) {
				posNeg9.style.color = "red"
			}	
		} else if (cryptoRank === 11) {
			htmlString += tickerInfo;
			tickerContainer11.insertAdjacentHTML('beforebegin', htmlString + '<a id="posNeg10">' + pChange + '%' + '</a>' + '</p>');
			var posNeg10 = document.getElementById("posNeg10");
			var eleventhCrypto = data[i].name;		
			button11.href = data[i].id + ".html";
			if (pChange > 0) {
				posNeg10.style.color = "Chartreuse";
			} else if (pChange < 0) {
				posNeg10.style.color = "red"
			}	
		} else if (cryptoRank === 12) {
			htmlString += tickerInfo;
			tickerContainer12.insertAdjacentHTML('beforebegin', htmlString + '<a id="posNeg11">' + pChange + '%' + '</a>' + '</p>');
			var posNeg11 = document.getElementById("posNeg11");
			var twelfthCrypto = data[i].name;		
			button12.href = data[i].id + ".html";
			if (pChange > 0) {
				posNeg11.style.color = "Chartreuse";
			} else if (pChange < 0) {
				posNeg11.style.color = "red"
			}		
		}
	};


	renderImage(firstCrypto, cryptoImage1);
	renderImage(secondCrypto, cryptoImage2);
	renderImage(thirdCrypto, cryptoImage3);
	renderImage(fourthCrypto, cryptoImage4);
	renderImage(fifthCrypto, cryptoImage5);
	renderImage(sixthCrypto, cryptoImage6);
	renderImage(seventhCrypto, cryptoImage7);
	renderImage(eighthCrypto, cryptoImage8);
	renderImage(ninthCrypto, cryptoImage9);
	renderImage(tenthCrypto, cryptoImage10);
	renderImage(eleventhCrypto, cryptoImage11);
	renderImage(twelfthCrypto, cryptoImage12);

	function renderImage(placeCrypto, cryptoImageNumber) {

		if (placeCrypto == "Bitcoin") {
			cryptoImageNumber.insertAdjacentHTML('afterbegin', "<img src='images/bitcoin_logo.png' class='img-fluid crypto-image border-0' alt='bitcoin_logo'>");
		} else if (placeCrypto == "Ethereum") {
			cryptoImageNumber.insertAdjacentHTML('afterbegin', "<img src='images/ethereum_logo.png' class='img-fluid crypto-image border-0' alt='ethereum_logo'>");
		} else if (placeCrypto == "Ripple") {
			cryptoImageNumber.insertAdjacentHTML('afterbegin', "<img src='images/ripple_logo.png' class='img-fluid crypto-image border-0' alt='ripple_logo'>")
		} else if (placeCrypto == "Bitcoin Cash") {
			cryptoImageNumber.insertAdjacentHTML('afterbegin', "<img src='images/bitcoin-cash_logo.png' class='img-fluid crypto-image border-0' alt='bitcoin-cash_logo'>")
		} else if (placeCrypto == "Litecoin") {
			cryptoImageNumber.insertAdjacentHTML('afterbegin', "<img src='images/litecoin_logo.png' class='img-fluid crypto-image border-0' alt='litecoin_logo'>")
		} else if (placeCrypto == "EOS") {
			cryptoImageNumber.insertAdjacentHTML('afterbegin', "<img src='images/eos_logo.png' class='img-fluid crypto-image border-0' alt='eos_logo'>")
		} else if (placeCrypto == "Cardano") {
			cryptoImageNumber.insertAdjacentHTML('afterbegin', "<img src='images/cardano_logo.png' class='img-fluid crypto-image border-0' alt='cardano_logo'>")
		} else if (placeCrypto == "Stellar") {
			cryptoImageNumber.insertAdjacentHTML('afterbegin', "<img src='images/stellar_logo.png' class='img-fluid crypto-image border-0' alt='stellar_logo'>")
		} else if (placeCrypto == "NEO") {
			cryptoImageNumber.insertAdjacentHTML('afterbegin', "<img src='images/neo_logo.png' class='img-fluid crypto-image border-0' alt='neo_logo'>")
		} else if (placeCrypto == "IOTA") {
			cryptoImageNumber.insertAdjacentHTML('afterbegin', "<img src='images/iota_logo.png' class='img-fluid crypto-image border-0' alt='iota_logo'>")
		}
		else if (placeCrypto == "Monero") {
			cryptoImageNumber.insertAdjacentHTML('afterbegin', "<img src='images/monero_logo.png' class='img-thumbnail crypto-image border-0' alt='monero_logo'>")
		}
		else if (placeCrypto == "NEM") {
			cryptoImageNumber.insertAdjacentHTML('afterbegin', "<img src='images/NEM_logo.png' class='img-thumbnail crypto-image border-0' alt='monero_logo'>")
		}
		else if (placeCrypto == "TRON") {
			cryptoImageNumber.insertAdjacentHTML('afterbegin', "<img src='images/TRON_logo.png' class='img-thumbnail crypto-image border-0' alt='monero_logo'>")
		}
		else if (placeCrypto == "Dash") {
			cryptoImageNumber.insertAdjacentHTML('afterbegin', "<img src='images/dash_logo.png' class='img-thumbnail crypto-image border-0' alt='monero_logo'>")
		}
	};

};
