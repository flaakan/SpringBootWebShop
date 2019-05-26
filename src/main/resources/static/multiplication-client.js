function displayProducts() {
    $.ajax({
        url: "http://localhost:8080/customer",
    }).then(function (data) {
        $('#stats').empty();
        data.forEach(function (row) {
            $('#stats-body').append("<tr><td class='id'>" + row.id + "</td>" +
                    "<td>" + row.productType + "</td>" +
                    "<td>" + row.description + "</td>" +
                    "<td>" + row.price + "</td>" +
                    "<td><button type='button' action='"+addToCart(row)+"'>add To Cart</button></td></tr>");
                });
               
    });
}



function addToCart(data){
    
    var data = data;
    $.ajax({
            url: '/addToCart',
            type: 'POST',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (result) {
                console.log(result);
                if (result.id >0) {
                    $('.result-message').empty().append("You added a product: "+ result.productType);
                    $("#login-form").hide();
                    $("#reg-button").hide();
                    $(".stats").show();                    
                } else {
                    $('.result-message').empty().append("Ooops that's not correct! But keep trying!");
                }
            }
        });
    
    
}


$(document).ready(function () {

    displayProducts();
    
        $("#test").click(function (event){
        event.preventDefault();
        var hej = "hej";
        console.log(hej);
//        var currentTR = $(this).closest("tr");
//        var id = currentTR.find("td.id").text();
//        console.log(id);
    }); 
    
    
    $(".addToCart").click(function (event){
        event.preventDefault();
        var hej = "hej";
        console.log(hej);
//        var currentTR = $(this).closest("tr");
//        var id = currentTR.find("td.id").text();
//        console.log(id);
    }); 
    $(".stats").hide();
    $("#reg-form").hide();
    $("#reg-button").click(function (event) {
        event.preventDefault();
        $("#login-form").hide();
        $("#reg-button").hide();
        $("#reg-form").show();
    });
    $("#login-form").submit(function (event) {

// Don't submit the form normally
        event.preventDefault();
        // Get some values from elements on the page
        var $form = $(this),
                username = $form.find("input[name='user-name']").val(),
                password = $form.find("input[name='user-pass']").val();
        // Compose the data in the format that the API is expecting
        var data = {username: username, password: password};
        // Send the data using post
        $.ajax({
            url: '/login',
            type: 'POST',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (result) {
                console.log(result);
                if (result.username !== null) {
                    $('.result-message').empty().append("You have logged in: " + result.username);
                    $("#login-form").hide();
                    $("#reg-button").hide();
                    $(".stats").show();                    
                } else {
                    $('.result-message').empty().append("Ooops that's not correct! But keep trying!");
                }
            }
        });
    });


    $("#reg-form").submit(function (event) {

// Don't submit the form normally
        event.preventDefault();
        // Get some values from elements on the page
        var $form = $(this),
                name = $form.find("input[name='name']").val(),
                username = $form.find("input[name='user-name']").val(),
                password = $form.find("input[name='user-pass']").val();
        // Compose the data in the format that the API is expecting
        var data = {name : name, username: username, password: password};
        // Send the data using post
        $.ajax({
            url: '/registration',
            type: 'POST',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (result) {
                console.log(result);
                if (result.username !== null ) {
                    $('.result-message').empty().append("You have been registered");
                    $("#reg-form").hide();
                    $("#login-form").show();
                    $("#reg-button").show();
                } else {
                    $('.result-message').empty().append("Ooops there is already a user!");
                }
            }
        });
    });
});
