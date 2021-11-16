//Con esta función hacemos la petición http para las imágenes de la categoría recibida
export const getGifs = async( category ) => {
    //Peticiones http en Javascript    //La función encodeURI sirve para evitar los espacios en blanco
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=S6z6pT6ICa4njWSHFRmQK6WE6tcVAmRh`;
    const resp = await fetch( url );
    //Desestructuramos con { }
    const { data } = await resp.json();

    //Acá obtenemos solo los datos que necesitamos de data
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url //El signo ? es una alternativa del condicional if
            //El signo de interrogación pregunta que si vienen la imágenes entonces las utilice
        }
    })

    return gifs;
}