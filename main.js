console.log( 'asdf' );


// async/await
async function getData( query ) {
    try {
        // const foobar = await fetch( "https://www.dictionaryapi.com/api/v3/references/collegiate/json/dog?key=c06d101b-29a1-45a9-9d52-75e226da4903" );
        const foobar = await fetch( `http://api.weatherapi.com/v1/current.json?key=26ece00f2dac44a6b4e201852240902&q=London&aqi=no` );
        // console.log( foobar );
        const Weather = await foobar.json();

        console.log( Weather );
         console.log( Weather.current.humidity );

        const content = document.querySelector( "#lookup" );

        content.innerHTML =` Humidity = ${Weather.current.humidity} `

        console.log(Weather.location.localtime);
        console.log(Weather.current.feelslike_c)


        // content.innerHTML = `
        
        //     <p>${thisthing[0].meta.id}</p>
        //     <p>${thisthing[0].hwi.prs[0].mw}</p>
        //     <p>${thisthing[0].shortdef[0]}</p>
        
        // `;
    } catch( error ) {
        // console.warn( "Nope: " + error );
        console.warn( `Nope: ${error}` );
    }
}
getData( 'dog' );