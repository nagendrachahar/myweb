
var slide = document.getElementById('fade');
setInterval(sowSlide,1000);
function sowSlide(){
    if(slide.getAttribute("src") == "images/Auto_Monsoon2016_PCBunk._UX1500_SX1500_CB271069653_.jpg"){
    	slide.src = "images/music-band.jpg";
    }else{
    	slide.src = "images/Auto_Monsoon2016_PCBunk._UX1500_SX1500_CB271069653_.jpg"
    }
}
