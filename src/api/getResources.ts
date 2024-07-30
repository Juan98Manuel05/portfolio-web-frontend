import  type { List } from '../types/Knowledge';

export class FetchData {

    URL: string = 'https://portfolio-web-backend.vercel.app/api'

    constructor(){
        this.URL = this.URL
    }

    async getKnowledges(route: string): Promise<List[]> {
        return this.fetch(route)
    }

    async fetch (route:string): Promise<any[]> {
        try {
            const response = await fetch(this.URL + route);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    }
}
