function createFormValidation() {
	$('.emailField').keyup(function() {
		validateForm();
	});
};

function validateEmail(emailField) {
	var emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
	return emailRegExp.test(emailField);
};

function validateForm()
{
	var nameFieldText = $('#name').val();
	var emailFieldText = $("#email").val();
	var messageFieldText = $('#message').val();

	if (nameFieldText != '' && 
		validateEmail(emailFieldText) &&
		messageFieldText != '')
	{
		$('input[type="submit"]').removeAttr('disabled');	
	}
	else
	{
		$('input[type="submit"]').attr('disabled','disabled');
	}
};