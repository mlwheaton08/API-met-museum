// Lots of places have open APIs that provide data for web developers to consume.  The Metropolitan Museum of Art is one of them
// the full documentation for their api can be found at https://metmuseum.github.io/
// For this assignment, I will give you the endpoint you need, so no need to search the full documentation
// That link is provided for you to browse and see the extent of the functionality.  

// The goal of this assignment is to display 5 pieces of art from Auguste Renoir
// The MET provided a list of all 145 of Renoir’s paintings in the collection through a link here (not needed for the assignment)
// From this list, five ids were selected for you to work with
// These id’s are: 438815, 438011, 438014, 437430, 437432.

// The goal of this assignment is to display the title and image of each of these 5 paintings on a web page
// You need to use fetch calls to retrieve the data necessary to display.

// Here is the url to grab the data:
// https://collectionapi.metmuseum.org/public/collection/v1/objects/${ID}

// where ${ID} is each of the 5 values listed above.  The endpoint for the image is found in the response from the first
// There are 2 urls present in the response, primaryImageSmall and primaryImage
// Use primaryImageSmall for this exercise to help speed-up the response by limiting the amount of data.

export const paintingIds = ['438815', '438011', '438014', '437430', '437432'];

export const fetchPaintings = async () => {
    let paintings = [];
    for (const id of paintingIds) {
        let dataFetch = await fetch(`https:collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
        let data = await dataFetch.json();
        paintings.push(data);
    }
    return paintings;
}