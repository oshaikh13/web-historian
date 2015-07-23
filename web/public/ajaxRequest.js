$('.urlForm').keypress(function (e) {
  if (e.which == 13) {
    var urlName = $('.urlName').val();

    $.ajax({
      method: "POST",
      url: "/",
      datatype: 'json',
      data: JSON.stringify({url: urlName}),

      statusCode: {
        404: function(){
          alert('file not found');
        },
        302: function(){
          window.location.replace("loading.html");
        },
        200: function () {
          window.location.replace(urlName);
        },
        500: function() {
          alert("DAM U CRASHED MA SITE ILL REKT U m8")
        }
      },

      success: function(){
        console.log('ajax complete')
      }
    });

    $('.urlName').val('');
    return false;    //<---- Add this line
  }
});