function getAllCountries() {
    $("#ShowData").click(function () {
        $.ajax({
            url: `https://restcountries.com/v3.1/all`,
            success: function (data) {
                let countriesNames = data.map((country)=> {
                    console.log (country);
                    return `<li>
                    <ul><li> Pays: ${country.name.common}</li><li>Capitale: ${country.capital}</li><li>Continent: ${country.continent}</li><li></li>Monnaie:</ul></li>`
                });
                $("#countriesList").html(countriesNames.join(""));
            },
        });
    });

}

getAllCountries();

