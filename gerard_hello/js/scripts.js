
$(document).ready(function(){
$('.btn').on('click', function() {
    
    var $period = ".";
    var $id = $(this).closest(".column").find("h2").attr("id");
    var $result;
    
    $result = $period.concat($id);
    
    if(($id == "firstPart")||($id == "secondPart"))
    {
        if($result==".firstPart")
        {
            $("#sub1 h3").text($result);
            if($('#sub2').is(":visible") ){
                $("#sub2").slideUp();
                setTimeout(function(){$("#sub1").slideToggle("normal")}, 500);
            }else{
                $("#sub1").slideToggle("normal");
            }

        }
        else if($result==".secondPart")
        {
            $("#sub2 h3").text($result);
            if($('#sub1').is(":visible") ){
                $("#sub1").slideUp();            
                setTimeout(function(){$("#sub2").slideToggle("normal")}, 500);
            }else{
                $("#sub2").slideToggle("normal");
            }
        }
    }
    
    else if(($id == "thirdPart")||($id == "fourthPart"))
    {
        if($result==".thirdPart")
        {
            $("#sub3 h3").text($result);
            if($('#sub4').is(":visible") ){
                $("#sub4").slideUp();
                setTimeout(function(){$("#sub3").slideToggle("normal")}, 500);
            }else{
                $("#sub3").slideToggle("normal");
            }

        }
        else if($result==".fourthPart")
        {
            $("#sub4 h3").text($result);
            if($('#sub3').is(":visible") ){
                $("#sub3").slideUp();            
                setTimeout(function(){$("#sub4").slideToggle("normal")}, 500);
            }else{
                $("#sub4").slideToggle("normal");
            }
        }
        
    }
    
    
    
    
    
    else if(($id == "fifthPart")||($id == "sixthPart")||($id == "seventhPart"))
    {
        if($result==".fifthPart")
        {
            $("#sub5 h3").text($result);
            if($('#sub6').is(":visible")){
                $("#sub6").slideUp();
                setTimeout(function(){$("#sub5").slideToggle("normal")}, 500);
            }
            else if($('#sub7').is(":visible")){
                $("#sub7").slideUp();
                setTimeout(function(){$("#sub5").slideToggle("normal")}, 500);
            }
            
            else{
                $("#sub5").slideToggle("normal");
            }

        }
        else if($result==".sixthPart")
        {
            $("#sub6 h3").text($result);
            if($('#sub5').is(":visible")){
                $("#sub5").slideUp();
                setTimeout(function(){$("#sub6").slideToggle("normal")}, 500);
            }
            else if($('#sub7').is(":visible")){
                $("#sub7").slideUp();
                setTimeout(function(){$("#sub6").slideToggle("normal")}, 500);
            }
            
            else{
                $("#sub6").slideToggle("normal");
            }
        }
        else if($result==".seventhPart")
        {
            $("#sub7 h3").text($result);
            if($('#sub5').is(":visible")){
                $("#sub5").slideUp();
                setTimeout(function(){$("#sub7").slideToggle("normal")}, 500);
            }
            else if($('#sub6').is(":visible")){
                $("#sub6").slideUp();
                setTimeout(function(){$("#sub7").slideToggle("normal")}, 500);
            }
            
            else{
                $("#sub7").slideToggle("normal");
            }
        }
        
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
                  
    
    
});  
});