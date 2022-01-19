// FUNCTION GETALLCOUNTRIES
function getAllCountries() {
    $("#btnShowData").click(function () {
        $.ajax({
            url: `https://restcountries.com/v3.1/all`,
            success: function (data) {                             
                let countriesNames = data.map((country)=> {
                return `<li><h3>${country.name.common}</h3></li>
                            <ul class="infos">
                                <li>Capitale : ${country.capital}</li>
                                <li>Continent : ${country.continents}</li>                            
                                <li>Langue(s) : </li>                       
                                <li>Monnaie(s) : </li>                       
                            </ul>`
                }); 
                             
                $("#countriesList").css("list-style-type","none").html(countriesNames.join(""));    
            },
        });
    });

}

getAllCountries();

