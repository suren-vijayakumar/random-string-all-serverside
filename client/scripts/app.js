function getPhraseData(){
    $.ajax({
        url: "/data",
        beforeSend:function(){
            $(".container").append("<p id='generating'>Generating smart ass vent!</p>");
        },
        success: function (data) {
            appendPhraseToDom(data);
            $('#generating').remove();

        }
    })

}

function appendPhraseToDom(data){
    $(".container").children().remove();
    $(".container").append("<div>" + data+  "</div>");

}

$(document).ready(function () {

       $(".phrase-button").on('click', function(){
           getPhraseData();
       });


});