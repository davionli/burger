
$(function() {
    $(".eat-burger").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
    
        var newBurgerState = {
            devoured: true
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function() {
            // Reload the page to get the updated list
            location.reload();
            }
        );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
            burger_name: $("#burgerInput").val(),
            burger_calories: $("#caloriesInput").val()
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
            method: "POST",
            data: newBurger
        }).then(
            function() {
            // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
  