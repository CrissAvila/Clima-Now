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
    
    get paramsOpenWeather() {
        return {
            appid: process.env.OPENWEATHER_KEY,
            units: 'metric',
            lang: 'es'
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
            return resp.data.features.map( lugar => ({
                id:     lugar.id,
                nombre: lugar.place_name,
                lng:    lugar.center[0],
                lat:    lugar.center[1],
            }));

        } catch (error) {
            return [];
        }

    }

    async climaLugar( lat, lon ) {
        try {
            //instace axios.create()
            const instancia = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: { ...this.paramsOpenWeather, lat, lon }
            })
            // resp.data
            const resp = await instancia.get();
            const { weather, main } = resp.data;
            return { 
                desc: weather[0].description,
                min:  main.temp_min,
                max:  main.temp_max,
                temp: main.temp
            };
            
        } catch (error) {
            console.log(error);
        }

    }


}
