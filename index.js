import 'dotenv/config'
import { inquirerMenu, leerInput, pausa } from "./helpers/inquirer.js";
import Busqueda from "./models/busquedas.js";

const main = async() => {

    const busquedas = new Busqueda();
    let opt;

    do {

        opt = await inquirerMenu();
        
        switch ( opt ) {

            case 1:
                //Mostrar mensaje
                const lugar = await leerInput('Ciudad: ');
                await busquedas.ciudad( lugar );

                // Buscar los lugares

                // Selecionar el lugar

                // Clima

                //Mostrar resultados
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad:', );
                console.log('Lat:', );
                console.log('Lng:', );
                console.log('Temperatura:', );
                console.log('Minima:', );
                console.log('Maxima:', );
                break;
        
        }

        if ( opt !== 0 ) await pausa();

    } while ( opt !== 0 )

    
}

main();