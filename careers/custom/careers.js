window.setTimeout(function(){
    $(window).scrollTop(document.getElementById("careers-page").getBoundingClientRect().top);
}, 1);

var currentNav = "header-police";

function headernav(link){
    if(document.getElementById(link).classList.contains("hidden")){
         document.getElementById(currentNav).classList.replace("active", "hidden");
         document.getElementById(link).classList.replace("hidden", "active");

         document.getElementById(currentNav + "-nav").classList.remove("active");
         document.getElementById(link + "-nav").classList.add("active");

         currentNav = link;

         if(currentNav == "header-police"){
              document.getElementById("arrow-prev").classList.replace("active", "hidden");
              document.getElementById("arrow-prev").classList.remove("arrow-more");
              document.getElementById("arrow-prev-text").innerHTML = "";

              document.getElementById("arrow-next").classList.replace("hidden", "active");
              document.getElementById("arrow-next-text").innerHTML = "Civilian careers";
         }
         else if(currentNav == "header-civilian"){
              document.getElementById("arrow-prev").classList.replace("hidden", "active");
              document.getElementById("arrow-prev").classList.remove("arrow-more");
              document.getElementById("arrow-prev-text").innerHTML = "Police officer careers";

              document.getElementById("arrow-next").classList.replace("hidden", "active");
              document.getElementById("arrow-next-text").innerHTML = "More opportunities";
         }
         else if (currentNav == "header-more"){
              document.getElementById("arrow-prev").classList.replace("hidden", "active");
              document.getElementById("arrow-prev").classList.add("arrow-more");
              document.getElementById("arrow-prev-text").innerHTML = "Civilian careers";

              document.getElementById("arrow-next").classList.replace("active", "hidden");
              document.getElementById("arrow-next-text").innerHTML = "";
         }
    }
}

var leftNav = "";
var rightNav = "header-civilian";

function arrow(direction){


    if(document.getElementById("header-police").classList.contains("active")){
         document.getElementById("arrow-prev").classList.replace("active", "hidden");

         leftNav = "";
         rightNav = "header-civilian";

         headernav(rightNav);
    }
    else if(document.getElementById("header-civilian").classList.contains("active")){
         document.getElementById("arrow-prev").classList.replace("hidden", "active");
         document.getElementById("arrow-next").classList.replace("hidden", "active");

         leftNav = "header-police";
         rightNav = "header-more";

         switch(direction){
              case "left":
                   headernav(leftNav);
                   break;
              case "right":
                   headernav(rightNav);
                   break;
         }
    }
    else if(document.getElementById("header-more").classList.contains("active")){
         document.getElementById("arrow-next").classList.replace("active", "hidden");

         leftNav = "header-civilian";
         rightNav = "";

         headernav(leftNav);
    }
}