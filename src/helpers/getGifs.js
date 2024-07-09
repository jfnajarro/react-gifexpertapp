 export const getGifs = async( category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=k7aggpWO5oF6L7qZChB7ohBAYcXP7G57`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title : img.title,
            url: img.images?.original.url
        }
    })

    return gifs;

}