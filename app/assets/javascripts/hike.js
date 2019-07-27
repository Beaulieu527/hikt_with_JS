



function appendResults(res) {
    console.log(res)
    $('#hikeId').val(`${res.id}`)
    $('#hike_id').text(`${res.id}`)
    $('#hike_img_url').text(`${res.img_url}`)
    $('#hike_name').text(`${res.name}`)
    $('#hike_location').text(`${res.location}`)
    $('#hike_summary').text(`${res.summary}`)
    $('#hike_length').text(`${res.length}` + " mi.")
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



