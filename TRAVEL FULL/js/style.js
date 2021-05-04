$('.leftslider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 4500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$('.rightslider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 3800,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  autoplay: false,
  autoplaySpeed: 3800,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});
$('.allbox').slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 3800,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$('.firstslider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

AOS.init({ once: "true" });

$('.lastslider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 1500,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
});



// HEADER JS
var menu = document.getElementById("input");
var icon = document.querySelector("#search");
var clo = document.querySelector("#close");

icon.onclick = function () {
  menu.classList.add("input-active")
}
clo.onclick = function () {
  menu.classList.remove("input-active")
}
var hdr = document.getElementById("header");
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 150) {
      $("#header").addClass("header-active");
    }
    else {
      $("#header").removeClass("header-active");
    }
  });
});

const liBtn = document.querySelectorAll(".dropbtn")
for (let i = 0; i < liBtn.length; i++) {
  liBtn[i].onclick = function () {
    this.nextElementSibling.classList.toggle("show")
  }
}

// phone header


var sidebar = document.getElementById("hambmenu");
var sidetext = document.getElementById("sidebar");
var phead = document.getElementById("phone");
var clos = document.getElementById("cls");
sidebar.onclick = function () {
  sidetext.style.visibility = "visible";
  sidetext.style.opacity = "1";
  phead.style.opacity = "0";

};
clos.onclick = function () {
  sidetext.style.visibility = "hidden";
  sidetext.style.opacity = "0";
  phead.style.opacity = "1";



}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
