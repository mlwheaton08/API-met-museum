import {fetchPaintings} from './data.js';

const displayPaintings = async () => {
    const paintings = await fetchPaintings();
    let html = '';
    for (const painting of paintings) {
        console.log(painting);
        html += `
            <h4>${painting.title}</h4>
            <img src="${painting.primaryImageSmall}">
        `
    }
    document.getElementById('container').innerHTML = html;
}
displayPaintings()