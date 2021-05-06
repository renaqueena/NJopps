$(document).ready(function(){
    $(".generalManagement").mouseenter(function(){
            $(this).css("color","#FFDEAD");
            });
    $(".generalManagement").mouseleave(function(){
            $(this).css("color","#FFF8DC");
            });
        
    });

    function validateForm() {
        $("$.error").remove();
        
        var x = document.forms["myForm"]["fname"].value;
        var y=document.forms["myForm"]["lname"].value;
        if (x == ""||y=="") {
                if (x == ""&&y==""){
                        $("#fname").after('<p class="error"> you need to enter a first name </p>');   
                        $("#lname").after('<p class="error"> you need to enter a last name </p>');  
                        return false;
                }
                if (x == ""){
                        $("#fname").after('<p class="error"> you need to enter a first name </p>');
                        return false;
                }
                if(y==""){
                        $("#lname").after('<p class="error"> you need to enter a last name </p>');   
                        return false;  
                }
        }

        return true;
         

      };

  