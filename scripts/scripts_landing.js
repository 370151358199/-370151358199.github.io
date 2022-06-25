$(document).ready(function(){
//runs after page loads
   // $(".aboutButton").click(function(){
        
      //  console.log("pls run");
        //ran correctly. the following code did not start animation so investigate further
        //gonna go fuck around in gited hub for now. 
    //   $(".aboutHeader span").addClass(".animateLetter");
  //   console.log($(".aboutHeader span").css("animation"));

    });
    console.log("loaded");
     

});


function animateAbout(){

        console.log("about toggled");
        //well, actually at click the link will pop you to the about section 
        //and the header will do a little dance.
        $(".aboutHeader span").css("animation: textAnimation 1s 2;");

};

