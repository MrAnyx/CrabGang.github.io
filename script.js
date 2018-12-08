/*pour le thee sombre*/
function toggleDarkLight() {
  var body = document.getElementById("top_page");
  var currentClass = body.className;

  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  var textChangementCouleur = document.getElementById("changementCouleur");
  if(body.className == "dark-mode"){
     textChangementCouleur.innerHTML = "Thème foncé";
  }else{
     textChangementCouleur.innerHTML = "Thème clair";
  }
}


var auto = "oui";

function choixAuto(){
    var ca = document.getElementById("changementAuto");
    if(auto == "oui"){
        auto = "non";
        ca.innerHTML = "Choix Automatique du thème ✗";
    }
    else{
        auto = "oui";
        ca.innerHTML = "Choix Automatique du thème ✓";
    }

}






/*pour les slides*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




function actualiser() {
    var date = new Date();
    if(((date.getHours()>=19 && (date.getHours()<=23 && date.getMinutes()<=59)) || (date.getHours()<9) && date.getHours() >= 0) && document.getElementById("top_page").className == "light-mode" && auto == "oui"){
        toggleDarkLight();
        /*ça passe en darkmode*/
    }
    else if((date.getHours()>=9 && date.getHours()<19) && document.getElementById("top_page").className == "dark-mode"&& auto == "oui"){
        toggleDarkLight();
        /*ça passe en lightmode*/
    }
}



function freq(){
    var freq = Math.floor(Math.random()*30)+60;
    var docu = document.getElementById("text_freq").innerHTML = "Fréquence cardiaque : "+freq.toString()+"bpm";
}

function temp(){
    var temp = (Math.random()*3+37).toFixed(2);
    var docu = document.getElementById("text_temp").innerHTML = "Température interne : "+temp.toString()+"°C";
}
