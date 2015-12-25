// codegen('1234567890234', 'ean13', 'Алмаз - Холдинг');
// codegen('12345678', 'ean8', 'Алмаз - Холдинг');
function coupon (number){
	if (number == "0001"){
		codegen('22637273', 'code128', 'Алмаз - Холдинг (3%)');
	} else if (number == "0002"){
		codegen('0810002119019', 'ean13', 'Золотой (3%)');
	} else if (number == "0003"){
		codegen('2020101354862', 'ean13', 'Красное & Белое');
	} else if (number == "0004"){
		codegen('K0035500', 'code39', 'Теплос');
	} else if (number == "0005"){
		codegen('5550017790135', 'ean13', 'Рив Гош (синяя)');
	} else if (number == "0006"){
		codegen('3112615580277', 'ean13', 'Спортмастер', '1261558027');
	} else if (number == "0007"){
		codegen('0273581', 'codabar', 'Бест - Маркет');
	} else if (number == "0008"){
		codegen('2200004447933', 'ean13', 'Живика');
	} else if (number == "0009"){
		codegen('2090485907206', 'ean13', 'Декатлон');
	} else if (number == "0010"){
		codegen('108696150', 'code128', 'Sunlight (проверить)');
	} else if (number == "0011"){
		codegen('9395778850560', 'ean13', 'Gloria - Jeans (10%)');
	} else if (number == "0012"){
		codegen('2000000007472', 'ean13', 'Лекарь (00747)');
	} else if (number == "0013"){
		codegen('32459672', 'code128', 'Алмаз - Холдинг (7%)');
	} else if (number == "0014"){
		codegen('4607111618504', 'ean13', 'Красное & Белое (Алкоточка)');
	} else if (number == "0015"){
		codegen('1030000000010383', 'code128', 'CiteMarilou', '10383');
	} else if (number == "0016"){
		codegen('111111452098', 'ean13', 'MilaVitsa');
	} else if (number == "0017"){
		codegen('9600003923194', 'ean13', 'Норд');
	} else if (number == "0018"){
		codegen('4607164178710', 'ean13', 'Маркер Игрушка');
	} else if (number == "0019"){
		codegen('2900000004535', 'ean13', 'fitmenu.ru');
	} else if (number == "0020"){
	} else if (number == "0021"){
	} else if (number == "0022"){
	} else if (number == "0023"){
	} else if (number == "0024"){
	} else if (number == "0025"){
	} else if (number == "0026"){
	} else if (number == "0027"){
	} else {
		alert('Отсутствует.')
	}
}

function codegen (code, type, title, fakenumber){
	$('#full').show();
	$(".code-gen").barcode(
		code,
		type,
		{
			 barWidth: 4,
			 barHeight: 50,
			 moduleSize: 5,
			 showHRI: true,
			 addQuietZone: true,
			 marginHRI: 5,
			 bgColor: "#FFFFFF",
			 color: "#000000",
			 fontSize: 10,
			 output: "bmp",
		}
	);  
	if (fakenumber){
		$('.title').html('<t>'+title+'</t><span>'+fakenumber+'</span>');
	} else {
		$('.title').html('<t>'+title+'</t><span>'+code+'</span>');
	}
	
}

var isProcessing = false;



$("#full").swipe( {
	swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
		if(direction == 'left'){
			$('#full').hide();
		}
	},
    threshold:0
});