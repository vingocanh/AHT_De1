var slide = 0;
var slide_max = 2;
$(document).ready(function (){
  let width = $(window).width();
  console.log(width);
  $(".nav-bar").click(function () {
    if($(".menu-content").is(":hidden")) {
        $(".menu-content").show();
    }else {
        $(".menu-content").hide();
    }
  })

})
function showSlide(index) {
  slide_index = index;
  var slides = document.getElementsByClassName("blog-list-item");
  for (let i = 1; i <= slides.length; i++) {
      if (i >= index && i <= index + slide_count_max - 1) {
          slides[i - 1].style.display = "block";
      } else {
          slides[i - 1].style.display = "none";
      }
  }
  var dotSlide = document.getElementById("dot-slides");
  dotSlide.innerHTML = "";
  for (let i = 0; i < slides.length - slide_count_max + 1; i++) {
      var elDot = document.createElement("i");
      elDot.className = "fas fa-circle dot";
      elDot.setAttribute("onclick", `showSlide(${i + 1})`);
      dotSlide.appendChild(elDot);
  }
  var dots = document.getElementsByClassName("dot");
  for (let i = 1; i <= dots.length; i++) {
      dots[i - 1].className = dots[i - 1].className.replace(" dot-active", "");
      // $(".dot-active").removeClass("dot-active");
  }
  dots[index - 1].className += " dot-active";
}
function timKiem(){

    function autocomplete(inp, arr) {
        
        var currentFocus;

        inp.addEventListener("input", function(e) {
            var a, b, i, val = this.value;
          
            closeAllLists();
            if (!val) {
                 return false;
            }
            currentFocus = -1;
         
            a = document.createElement("div");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
           
            this.parentNode.appendChild(a);
         
            for (i = 0; i < arr.length; i++) {

              if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {

                b = document.createElement("div");

                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
   
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

                b.addEventListener("click", function(e) {

                    inp.value = this.getElementsByTagName("input")[0].value;

                    closeAllLists();
                });
                a.appendChild(b);
              }
            }
        });

        inp.addEventListener("keydown", function(e) {
            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {
            
              currentFocus++;
              
              addActive(x);
            } else if (e.keyCode == 38) { 
           
              currentFocus--;
             
              addActive(x);
            } else if (e.keyCode == 13) {
             
              e.preventDefault();
              if (currentFocus > -1) {
                
                if (x) x[currentFocus].click();
              }
            }
        });
        function addActive(x) {
         
          if (!x) return false;
     
          removeActive(x);
          if (currentFocus >= x.length) currentFocus = 0;
          if (currentFocus < 0) currentFocus = (x.length - 1);
         
          x[currentFocus].classList.add("autocomplete-active");
        }
        function removeActive(x) {
        
          for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
          }
        }
        function closeAllLists(elmnt) {
        
          var x = document.getElementsByClassName("autocomplete-items");
          for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
              x[i].parentNode.removeChild(x[i]);
            }
          }
        }
        
        document.addEventListener("click", function (e) {
            closeAllLists(e.target);
        });
      }
     

    var arr = ["Áo", "Quần", "Váy", "Giày", "Dép", "Đồng Hồ", "Balo", "Kính Mắt", "Túi"];
    var theMoi = document.createElement('div');
    theMoi.id = "timKiem";
    theMoi.style.marginLeft="20px";
    theMoi.style.padding
    // theMoi.style.
    theMoi.innerHTML = `
                    <form>
                        <div class="duLieu"  >
                            <input class = "Key" type="text" size="15" placeholder="Nhập key" style="padding: 12px; font-size: 16px; font-family: Montserrat;text-align: center; background-color: transparent; outline: none; border-radius: 15px; text-align: center;">
                        </div>
                    </form>`;
    var tam = document.getElementsByClassName('menu__title');
 
    if(!document.getElementById("timKiem")){
        tam[0].appendChild(theMoi);
        autocomplete(document.getElementsByClassName("Key")[0], arr);
        // hienThi(document.getElementById("myInput"), countries);
    }else{
        alert("Mời Bạn Nhập key");
    }
    
}
function shopping(){
    alert("Đây là shopping")
}

// var dem = 1;
// var max = 3;
// show(dem);

// // Next/previous controls
// function plusSlides(max) {
//   show(dem += max);
// }

// // Thumbnail image controls
// function currentSlide(max) {
//   show(slideIndex = max);
// }
// function show(index){
//   var slides = document.getElementsByClassName("content-blog");
//   var dots = document.getElementsByClassName("dot"); 
//   if (index > slides.length) {dem = 1}
//   if (index < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
