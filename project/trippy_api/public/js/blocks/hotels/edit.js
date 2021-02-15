$(function() {
  $('#submit').click(function() {
    var name = $('#name').val();
    var address = $('#address').val();
    var phone = $('#phone').val();
    var country = $('#country').val();
    var city = $('#city').val();

    $.ajax({
      url: '/api/hotels',
      method: 'POST',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        name: name,
        address: address,
        phone: phone,
        country: country,
        city: city
      }),
      dataType: 'json',
      success: function(data) {
        console.log('data', data);
      }
    });
  });
});
