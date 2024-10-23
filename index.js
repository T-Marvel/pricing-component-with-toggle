document.querySelector(".toggle-area").addEventListener( "click" , function () {

    if (document.querySelector(".toggle-area").classList.contains("monthly")) {
      document.querySelector(".toggle-area").classList.remove("monthly");
      document.querySelector(".toggle-area").classList.add("anually");
      document.querySelector(".price-1").innerHTML = `<p class="price-1"> <span class="dollar-sign">&dollar;</span>199.99</p>`;
      document.querySelector(".price-2").innerHTML = `  <p class="price-2"> <span class="dollar-sign">&dollar;</span>249.99</p>`;
      document.querySelector(".price-3").innerHTML = `  <p class="price-3"> <span class="dollar-sign">&dollar;</span>399.99</p>`;
    } else {
      document.querySelector(".toggle-area").classList.add("monthly");
      document.querySelector(".toggle-area").classList.remove("anually");
      document.querySelector(".price-1").innerHTML = `<p class="price-1"> <span class="dollar-sign">&dollar;</span>19.99</p>`;
      document.querySelector(".price-2").innerHTML = `  <p class="price-2"> <span class="dollar-sign">&dollar;</span>24.99</p>`;
      document.querySelector(".price-3").innerHTML = `  <p class="price-3"> <span class="dollar-sign">&dollar;</span>39.99</p>`;
    }
    
});