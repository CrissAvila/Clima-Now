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
            const resp = await axios.get('https://reqres.in/api/users?page=2');
            console.log(resp.data);
            

        } catch (error) {
            return [];
        }

    }


}
