Stripe.setPublishableKey('pk_test_IZMr4qKf96j56qJMsnI0yNBM');

var $form = $('#checkout-form');

$form.submit(function (event) {
    // refresh the error
    $('#charge-error').addClass('hidden');
    // Disable the submit button to prevent repeated clicks:
    $form.find('button').prop('disabled', true);

    // Request a token from Stripe:
    Stripe.card.createToken({
        number: $('#card-number').val(),
        cvc: $('#card-cvc').val(),
        exp_month: $('#card-expiry-month').val(),
        exp_year: $('#card-expiry-year').val(),
        name: $('#card-name').val()
    }, stripeResponseHandler);

    // Prevent the form from being submitted:
    return false;
});


function stripeResponseHandler(status, response) {

    if (response.error) { // Problem!

        // Show the errors on the form:
        $('#charge-error').text(response.error.message);
        $('#charge-error').removeClass('hidden');
        $form.find('button').prop('disabled', false); // Re-enable submission

    } else { // Token was created!

        // Get the token ID:
        var token = response.id;

        // Insert the token ID into the form so it gets submitted to the server:
        $form.append($('<input type="hidden" name="stripeToken">').val(token));

        // Submit the form:
        $form.get(0).submit();
    }
};