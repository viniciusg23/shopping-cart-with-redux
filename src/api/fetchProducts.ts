import IProducts from "../interfaces/product";

export interface IFetchProducts {
    site_id: string
    country_default_time_zone: string
    query: string
    results: IProducts[]
}


export default async function fetchProducts(query: string){
    const response = await fetch(`htpps://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const data = await response.json() as IFetchProducts;

    return data.results;
}