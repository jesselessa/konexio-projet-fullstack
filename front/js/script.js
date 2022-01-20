// PROJET FULL STACK COUNTRIES API

// On va écrire notre code sous forme de fonction call-back de façon à s'assurer qu'il s'exécute une fois que nos scripts JS seront chargés


// // Function getAllCountries

//     function getAllCountries() {
//         $("#btnShowData").click(function () {            
//             $.ajax({
//                 url: `https://restcountries.com/v3.1/all`,success: function (data) {                             
//                 let countries = data.map((country)=> {                    
//                     return `<li><h3>${country.name.common}</h3></li>
//                                 <ul class="infos">
//                                     <li>Capitale : ${country.capital}</li>
//                                     <li>Continent : ${country.continents}</li>                            
//                                     <li>Langue : </li>                       
//                                     <li>Monnaie : </li>                       
//                                 </ul>`
//                 }); 
//                 // Puces sous-liste
//                 $("#countriesList").css("list-style-type","none").html(countries.join(""));    
//                 },
//             });
//         });
//     }

// getAllCountries();


$().ready(() => {
    // Fonction pour afficher le spinner
    function showSpinner() {
        $("#countriesList").append(`<div class="spinner-border" role="status">
<span class="visually-hidden">Loading...</span>
</div>`)
   }
    
    // Fonction pour cacher le spinner
    function hideSpinner() {
        $(".spinner-border").remove()
    }
    // Fonction pour réinitialiser la page
    function reset() {
        $("li").remove()
        showSpinner()
        
        // $.ajax({
        //     url: "https://restcountries.com/v3.1/all",
        //     success: function(countries) {
        //         countries.forEach(country => {
        //             $("#countriesList").append(
        //                 `<li class="list-group-item"><p>Name : ${country.name.common}<br />Capital : ${country.capital}
        //              <br />Continent : ${country.region}</p></li>`
        //             )
        //         });
            }
        })

        $.ajax({
                url: `https://restcountries.com/v3.1/all`,
                success: function (data){                             
                let countries = data.map((country)=> {                    
                    return `<li><h3>${country.name.common}</h3></li>
                                            <ul class="infos">
                                                <li>Capitale : ${country.capital}</li>
                                                <li>Continent : ${country.continents}</li>                            
                                                <li>Langue : </li>                       
                                                <li>Monnaie : </li>                       
                                            </ul>`
                            })
                            // Puces sous-liste
                            $("#countriesList").html(countries.join(""))
                            .then(() => {
            hideSpinner();
    //     })}

    // })};

    // Appel de la fonction d'ouverture de la page à chaque affichage
    reset()

    //Boutton de réinitialisation de l'affichage
    $("#btnReset").click(() => {
        reset()
    })

    // Function getAllCountries
    function getAllCountries() {
        $("li").remove();

        showSpinner();

        let url =" ";
        if ($("#searchCountry").is(":checked")) {
            url = "https://restcountries.com/v3.1/name/"
        } else if ($("#searchCapital").is(":checked")) {
            url = "https://restcountries.com/v3.1/capital/"
        } else if ($("#searchSubRegion").is(":checked")) {
            url = "https://restcountries.com/v3.1/subregion/"
        } else { console.log("Select a capital or a country or another option") 
        }

        $.ajax({
            // Importation de l'API REST Countries

            url: url + $("#countryForm").val(),
            // success: function(countries) {
            //     countries.forEach(country => {
                    
            //         $("#countriesList").append(
            //             `<li class="list-group-item"><p>Name : ${country.name.common}<br />Capital : ${country.capital} <br />Continent : ${country.region}</p></li>`
            //         )

            success: function (data){                             
                let countries = data.map((country)=> {                    
                    return `<li><h3>${country.name.common}</h3></li>
                                            <ul class="infos">
                                                <li>Capitale : ${country.capital}</li>
                                                <li>Continent : ${country.continents}</li>                         
                                               
                                            </ul>`
                            })
                        }
                        
    //             });
    //         },
    //     }
    // })
    .then(() => {
            hideSpinner()
        })
    });

// Appel de la fonction getAllCountries à chaque "clic" sur le bouton ShowData 
    $("#btnShowData").click(() => {
        getAllCountries();
    })}
})}})
