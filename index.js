import 'dotenv/config'
import { inquirerMenu, leerInput, listarLugares, pausa } from "./helpers/inquirer.js";
import Busqueda from "./models/busquedas.js";

const main = async() => {

    const busquedas = new Busqueda();
    let opt;

    do {

        opt = await inquirerMenu();
        
        switch ( opt ) {

            case 1:
                //Mostrar mensaje
                const terminoBusqueda = await leerInput('Ciudad: ');
                
                // Buscar los lugares
                const lugares = await busquedas.ciudad( terminoBusqueda );
                
                // Selecionar el lugar
                const id = await listarLugares(lugares);
                const lugarSel = lugares.find( l => l.id === id );
                
                // Clima
                const clima = await busquedas.climaLugar( lugarSel.lat, lugarSel.lng );

                //Mostrar resultados
                console.clear();
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad:', lugarSel.nombre );
                console.log('Lat:', lugarSel.lat );
                console.log('Lng:', lugarSel.lng );
                console.log('Temperatura:', clima.temp );
                console.log('Minima:', clima.min );
                console.log('Maxima:', clima.max);
                console.log('Como esta el clima:', clima.desc);

            break;
        
        }

        if ( opt !== 0 ) await pausa();

    } while ( opt !== 0 )

    
}

main();