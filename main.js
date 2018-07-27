$( document ).ready(function() {
  // var $result;
    $(".flex-item").on('click', function(){
      var click = $(this);
      $.ajax({
        url : "https://www.boolean.careers/api/random/int",
        method : "GET",
        success : function (data,stato) {
        // $result = data.response;
        var result = data.response;
        $(".flex-item").removeClass("yellow").text("").removeClass("green");
        if (result <= 5) {
          click.addClass("yellow").text(result);
        } else {
          click.addClass("green").text(result);
        }
        },
        error : function (richiesta,stato,errori) {
        alert("E' avvenuto un errore. " + errori);
        }
      });
      // $(".flex-item").removeClass("yellow").text("").removeClass("green");
      //   if ($result <= 5) {
      //   $(this).addClass("yellow").text($result);
      // } else {
      //   $(this).addClass("green").text($result);
      // }
    });
});
