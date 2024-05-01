$(document).ready(function(){
    $("button").on("click",function(event){
        $("span").text(event.timeStamp);
    });
});