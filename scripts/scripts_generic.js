
$(document).ready(function(){
    //this script only works for thumbnail, not the entire script
    $(".thumbnail").click(function(){        
        openViewport($(this).attr("src"), $(this).attr("alt"));
    });
    $(".wideImg").click(function(){        
        openViewport($(this).attr("src"), $(this).attr("alt"));
    });
    

    //click on cyan part to call close port functions
   $(".viewport").click(closeViewport());


});


//Opens viewport by clicking on images
//WORKS!! Opened view port span
function openViewport(imgSrc, imgAlt){
    console.log("oppen viewport script ran.");
    console.log("the alt of the image is "+ imgSrc);
    //CHECK IF IMG WIDTH IS TOO SMALL TO BE DISPLAYED 
//display the thing
    $(".viewport").css("display", "block");
//display image
    $(".artContainer").html("<img class ='fullImg' src='" + imgSrc + "' alt = '" + imgAlt +"'>" );
    $(".caption").html("<p class='captionText'>" + imgAlt +"</p>" );
};

//closes viewport by clicking on 
function closeViewport(){
    $(".viewport").css("display", "none");
    //im leaving 
    console.log("viewport closed");

};
