import axios, { AxiosHeaders } from 'axios';

export default class Busqueda {

    historial = ['Madrid', 'Brasil', 'Argentina'];

    get paramsMapBox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        }
    }

    constructor() {
        //TODO leer DB si existe    
    }

    async ciudad( lugar = '' ) {

        try {
            // peticion http
            const instanciaAxios = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                params: this.paramsMapBox
            })

            const resp = await instanciaAxios.get();
            console.log(resp.data);
            
            return []

        } catch (error) {
            return [];
        }

    }


}
