function createEmailSending() {

    $('.btn-submit').click(function() {
        var nameFieldText = $('#name').val();
        var emailFieldText = $("#email").val();
        var messageFieldText = $('#message').val().replace(/\r?\n/g, '<br />');
        var myFullEmail = $('.mea').html().trim();
        $('.btn-submit').attr('disabled', 'disabled');
        $('.btn-submit-txt').hide();
        $('.btn-submit-img').show();
        $.ajax({
            type: 'POST',
            url: 'https://mandrillapp.com/api/1.0/messages/send.json',
            data: {
                'key': 'epr-o7M_5PQYJ2yTf0QXHw',
                'message': {
                    'from_email': emailFieldText,
                    'from_name': nameFieldText,
                    'to': [{
                        'email': myFullEmail,
                        'type': 'to'
                    }],
                    'autotext': 'true',
                    'subject': 'Message from the portfolio site',
                    'html': messageFieldText
                }
            }
        }).done(function(response) {
            $('.btn-submit-txt').show();
            $('.btn-submit-img').hide();
            setTimeout(function() {
      			$('input[type="submit"]').removeAttr('disabled');
			}, 2000);
        });
    });

};