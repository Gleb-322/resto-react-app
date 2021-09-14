export default class RestoService {
    // url = 'http://localhost:3000/menu'

    // getMenuItems = async () => {
    //     const response = await fetch(this.url)

    //     if (!response.ok) {
    //         throw new Error(`Server error`)
    //     }

    //     return await response.json()
    // }
    _apiBase = 'http://localhost:3000'

    async getResource(url) {
        
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + 
                `, received ${res.status}`);
        }
        return await res.json();
    }
    
    async getMenuItems () {
        return await this.getResource('/menu/');
    }

}

