$('.message a').click(function(){
    console.log("aaa")
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });