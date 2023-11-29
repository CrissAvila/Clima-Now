import axios from 'axios';

export default class Busqueda {

    historial = ['Madrid', 'Brasil', 'Argentina'];

    constructor() {
        //TODO leer DB si existe    
    }

    async ciudad( lugar = '' ) {

        try {
            // peticion http
            // console.log('ciudad', lugar);
            const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/MADRID.json?proximity=ip&language=es&access_token=pk.eyJ1IjoiY3Jpc3NhdmlsYWEiLCJhIjoiY2xwajZ5ZDd4MDVtMTJrbDNpYWVvMjY5aiJ9.QxicDBs_isK0r1Vz2l3WWw&limit=5');
            console.log(resp.data);
            
            return []

        } catch (error) {
            return [];
        }

    }


}
