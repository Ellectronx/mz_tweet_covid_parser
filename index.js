var wojewodztwa = ['dolnośląskiego', 'kujawsko-pomorskiego','lubelskiego','lubuskiego','łódzkiego','małopolskiego','mazowieckiego','opolskiego','podkarpackiego','podlaskiego','pomorskiego','śląskiego','świętokrzyskiego','warmińsko-mazurskiego','wielkopolskiego','zachodniopomorskiego'];

//var TWEET = 'Mamy 188 nowych i potwierdzonych przypadków zakażenia #koronawirus z województw: śląskiego (113), mazowieckiego (37), dolnośląskiego (16), podlaskiego (7), łódzkiego (6), opolskiego (4), małopolskiego (2), świętokrzyskiego (1), kujawsko-pomorskiego (1) i pomorskiego (1).';


var myArgs = process.argv.slice(2);
if(myArgs.length<1) 
	process.exit();
else
	TWEET = myArgs[0];

wojewodztwa.forEach(function(element, i) {

  let regex = RegExp("\\b"+element+"\\b\\s{0,}\\(\\s{0,}(\\\d{1,})\\s{0,}\\)","is");
  let found = TWEET.match(regex);
  if(found !== null)
  	console.log(element,' -> ', found[1]);
  else 
  	console.log(element,' -> ', "0");
});

//  \W{1,}śląskiego\s{0,}\(\s{0,}(\d{1,})\s{0,}\)
