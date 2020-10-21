$("#talk").click(function() {
    
    let userText = $("#speech").val();
    
    $("#speech-bubble").text(userText);
 
    // Add your code below:
    $(".history").append(`<p>${userText}</p>`);
    console.log(userText);
    
});