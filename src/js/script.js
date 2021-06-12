//toggle navi

function toggleNavi(){
    let navi = document.getElementById("navigation-menu");
    navi.classList.toggle("show-navi");
}

//product description text
let description = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>'
let details = '<p>Detail</p>';
let specification = '<p>špecifikacia</p>';

//changing style in product description on click
let popis = document.getElementById('popis');
let detail = document.getElementById('detail');
let speci = document.getElementById('speci');
let mainText = document.getElementById('mainText')

function colorbg(){
  popis.classList.add("active-description");
  detail.classList.remove("active-description");
  speci.classList.remove("active-description");
  mainText.innerHTML= description;
}

function colorbg2(){
  popis.classList.remove("active-description");
  detail.classList.add("active-description");
  speci.classList.remove("active-description");
  mainText.innerHTML= details;
}

function colorbg3(){
  popis.classList.remove("active-description");
  detail.classList.remove("active-description");
  speci.classList.add("active-description");
  mainText.innerHTML= specification;
}



//accordion collapse
$('.panel-title > a').click(function() {
  $(this).find('i').toggleClass('fa-plus fa-minus')
         .closest('panel').siblings('panel')
         .find('i')
         .removeClass('fa-minus').addClass('fa-plus');
});


//range handler
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 5000,
      values: [ 10, 3000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );

//nákup na firmu checkbox checked
let firma1 = document.getElementById('only-for-firma1');
let firma2 = document.getElementById('only-for-firma2');

function validate() {
  if (document.getElementById('remember').checked) {
          firma1.style.display = "flex";
          firma2.style.display = "flex";
  } else {
          firma1.style.display = "none";
          firma2.style.display = "none";
  }
}


//calendar
dates('option');
months('option');
//You can change the startYear(1990) and endYear(2017)
years('option', 2000, 2017);