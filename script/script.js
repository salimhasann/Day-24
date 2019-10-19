function checkFirstName(){
	var firstName = $('#firstName').val();
	var reg = /^[a-zA-Z ]{2,10}$/;
	
	if(reg.test(firstName)){
		$('#firstNameErorr').text('');
		return true;
	} else {
		$('#firstNameErorr').text('Fill the First Name');
		return false;
	}
};


$('#firstName').keyup(function(){
	checkFirstName()
});

function checkLastName(){
	var lastName = $('#lastName').val();
	var reg = /^[a-zA-Z ]{2,10}$/;
	
	if(reg.test(lastName)){
		$('#lastNameErorr').text('');
		return true;
	} else {
		$('#lastNameErorr').text('Fill the Last Name');
		return false;
	}
};


$('#lastName').keyup(function(){
	checkLastName()
});


function checkEmailAddress(){
	var emailAddress = $('#emailAddress').val();
	var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
	
	if(reg.test(emailAddress)){
		$('#emailAdderssErorr').text('');
		return true;
	} else {
		$('#emailAdderssErorr').text('Fill the Valid Email');
	}
};


$('#emailAddress').keyup(function(){
	checkEmailAddress()
});


function checkPassword(){
	var password = $('#password').val();
	var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
	
	if(reg.test(password)){
		$('#passwordErorr').text(' ');
		return true;
	} else {
		$('#passwordErorr').text('Fill the Strong Password');
		return false;
	}
};


$('#password').keyup(function(){
	$('#passwordErorr').text(' ');
});
$('#password').blur(function(){
	checkPassword()
});
$('#password').click(function(){
	checkPassword()
});

$('#showHide').click(function(){
	var showPassword = $('#password').attr('type');
	if( showPassword == 'password'){
		$('#password').attr('type', 'text');
	}else{
		$('#password').attr('type', 'password');
	}
});


function conformPassword(){
	var password = $('#password').val();
	var conformPassword = $('#conformPassword').val();
	
	if(password == conformPassword){
		$('#conformPasswordErorr').text('mached');
		return true;
	}else{
		$('#conformPasswordErorr').text('This is not mached');
		return false;
	}
};

$('#conformPassword').keyup(function(){
	$('#conformPasswordErorr').text('');
});
$('#conformPassword').blur(function(){
	conformPassword()
});
$('#conformPassword').click(function(){
	conformPassword()
});



function genderInfo(){
	var genderInfo = $('input[type="radio"]:checked').val();
	if(genderInfo == 'male' || genderInfo == 'female'){
		$('#genderErorr').text(' ');
		return true;
	}else{
		$('#genderErorr').text('Plase seclet gender info');
		return false;
	}
};

function districtValu(){
	var districtValu = $('#district').val();
	if(districtValu == 'selectD'){
		$('#districtErorr').text('Error');
		return false;
	}else{
		$('#districtErorr').text(' ');
		return true;
	}
};

$('#form').submit(function(){
	if(checkFirstName() == true && checkLastName() == true && checkEmailAddress() == true && checkPassword() == true && conformPassword() == true && genderInfo() == true && districtValu() == true) {
		return true;
	}else{
		return false;
	}
});

$(window).scroll(function(){
	var menuPosition = $('#menuscroll').position();
	var menuScroll = $(window).scrollTop();
	if(menuScroll >= menuPosition.top){
		$('#menuul').css({
			'position' : 'fixed',
			'top' : '0px',
			'width' : '90%'
		});
	} else{
		$('#menuul').css({
			'position' : 'relative',
			'top' : '0px',
			'width' :'100%'
		});
	}
});