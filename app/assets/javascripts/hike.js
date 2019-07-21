function handleFetch(event){
    console.log(event.srcElement.id)
   myFetch(`http://localhost:3000/hikes/${event.srcElement.id}.json`)
   .then(res => res.json())
    .then(function(json) {
        appendResults(json)
    })
}

function appendResults(res) {
    console.log(res)
    $('#hike_img_url').text(`${res.img_url}`)
    $('#hike_name').text(`${res.name}`)
    $('#hike_location').text(`${res.location}`)
    $('#hike_summary').text(`${res.summary}`)
    $('#hike_length').text(`${res.length}`)
}

const getHikes = (hike_id) => {
    return myFetch(`http://localhost:3000/hikes/${hike_id}.json`)
  }


class hike {
    constructor(attributes) {
        this.id = attributes.id;
        this.name = attributes.name;
        this.summary = attributes.summary;
        this.location = attributes.location;
        this.length = attributes.length
        this.img_url = attributes.img_url
    }

    
};