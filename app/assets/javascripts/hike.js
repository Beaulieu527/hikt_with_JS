

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

class Hike {
    constructor(attributes) {
        this.id = attributes.id;
        this.name = attributes.name;
        this.summary = attributes.summary;
        this.location = attributes.location;
        this.length = attributes.length
        this.img_url = attributes.img_url
    }

    showHike(){
        return` <div class="col-lg-4 col-sm-6 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${this.name}</h5>
                    </div>
                    

                    <!-- Button trigger modal -->
                    <button type="button" id="${this.id}" class="btn btn-primary" data-toggle="modal" data-target="#hikeModal" onclick="handleFetch(event)" >
                        Show Hike
                    </button>

                </div>
            </div>
            `
    }
};



