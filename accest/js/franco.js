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