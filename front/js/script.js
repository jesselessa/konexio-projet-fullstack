// PROJET FULL STACK COUNTRIES API

// On va écrire notre code sous forme de fonction call-back de façon à s'assurer qu'il s'exécute une fois que nos scripts JS seront chargés
$(document).ready(() => {
    // Font-size et font-family par défaut
    $("html").css("font-size","62.5%")
    $("body").css({"font-family": "Arial", "font-size" : "1.6rem"});
    // Formulaire
    $("label").css("font-weight", "bold")
    // Titres pays
    $("h3").css({"margin-bottom": "1rem"});

// Function getAllCountries

    function getAllCountries() {
        $("#btnShowData").click(function () {            
            $.ajax({
                url: `https://restcountries.com/v3.1/all`,success: function (data) {                             
                let countries = data.map((country)=> {                    
                    return `<li><h3>${country.name.common}</h3></li>
                                <ul class="infos">
                                    <li>Capitale : ${country.capital}</li>
                                    <li>Continent : ${country.continents}</li>                            
                                    <li>Langue : </li>                       
                                    <li>Monnaie : </li>                       
                                </ul>`
                }); 
                // Puces sous-liste
                $("#countriesList").css("list-style-type","none").html(countries.join(""));    
                },
            });
        });
    }

getAllCountries();

});




