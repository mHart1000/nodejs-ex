 //FUNCTION TO NAVIGATE BETWEEN PAGES
 //WITH LEFT AND RIGHT ARROW KEY
 jQuery(function($) {
      $("body").keydown(function(e) {
           if(e.keyCode == 37) { // left
                $("#prevpage").trigger("click");
           }
           else if(e.keyCode == 39) { // right
                $("#nextpage").trigger("click");
           }
      });
 });
 //FUNCTION TO NAVIGATE BETWEEN PAGES
 //WITH SCROLLING DOWN AND UP
 jQuery(function($) {
      $(document).ready(function(){
           $('body').mousewheel(function(event, delta) {
                if (delta < 0 ){
                     $("#nextpage").trigger("click");
                }
                else if (delta > 0){
                     $("#prevpage").trigger("click");
                }
           });
      });
 });