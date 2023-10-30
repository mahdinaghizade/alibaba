function show_hide() {
  var click = document.getElementById("list-items");
  if (click.style.display === "none") {
    click.style.display = "block";
  } else {
    click.style.display = "none";
  }
}

function show_hide2() {
  var click = document.getElementById("list-items2");
  if (click.style.display === "none") {
    click.style.display = "block";
  } else {
    click.style.display = "none";
  }
}

function show_hide3() {
  var click = document.getElementById("list-items3");
  if (click.style.display === "none") {
    click.style.display = "block";
  } else {
    click.style.display = "none";
  }
}







function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }



  function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }



  var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}






window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



var accd = document.getElementsByClassName("accordion_foot");
var i;

for (i = 0; i < accd.length; i++) {
accd[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var panel = this.nextElementSibling;
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
});
}
//darkmode
let btn=document.getElementById("darkbtn")
let dark=document.getElementById("darkmode")
btn.addEventListener("click",()=>{
  dark.classList.toggle("dark")
})

let btnn=document.getElementById("darkbtnn")
let darkk=document.getElementById("darkmode")
btnn.addEventListener("click",()=>{
  dark.classList.toggle("dark")
})

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}





let btone=document.getElementById("bishone")



let btnbishtar=document.getElementById("bishtwo")
btnbishtar.addEventListener("click",()=>{
  
  document.getElementById("p_none").classList.toggle("hidden")
  btone.classList.remove("hidden")
  btnbishtar.classList.add("hidden")
})


btone.addEventListener("click",()=>{
  
  document.getElementById("p_none").classList.toggle("hidden")
  btone.classList.add("hidden")
  btnbishtar.classList.remove("hidden")
})



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 30,

})


$(document).ready(function(){
  $("div#mahdi").on("click",()=>{
    
    $("#baner_mahdi").fadeTo("slow",1)
    
  })
  $("div#close").on("click",()=>{
    $("#baner_mahdi").fadeOut(1000)
   
  })
  $(document).on("scroll",function(){
    let scrolltop=$(this).scrollTop()
    console.log(scrolltop);
    if(scrolltop<80){
      $("#shekl_two").addClass("hidden")
      $("#shekl_one").removeClass("hidden")
    }
    if(scrolltop>120){
      $("#shekl_one").addClass("hidden")
      $("#shekl_two").removeClass("hidden")
    }
   
  })
})
