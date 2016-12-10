$(document).ready(function(){
            $(window).scroll(function(){
            	if(document.body.scrollTop > 50){
                $(".bottom-header").hide(1000);
            }else{
            	$(".bottom-header").show(1000);
            }
            });
        });