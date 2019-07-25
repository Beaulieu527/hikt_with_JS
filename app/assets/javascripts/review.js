
 
 //$(document).on('turbolinks:load', function() {
 //   $('#new_review').on('submit', function(event) {
 //     //prevent form from submitting the default way
 //     event.preventDefault();
 //     let hike_id = parseInt(hike_id.innerHTML)
 //     let hike_review = `http://localhost:3000/hikes/${hike_id}/reviews.json`
 //     debugger
 //     var values = $(this).serialize();
 //     let posting =  $.post(hike_review , values);
 //     posting.done(function(data) {
 //       $("#reviewUserEmail").text(data.user.email + " says:");
 //       $("#reviewContent").text(data.content);
 //     });
 //   });
 // });
//
class review {
    constructor(attributes) {
        this.id = attributes.id;
        this.hike_id = attributes.hike_id
        this.user = attributes.user_id
        this.content = attributes.content;
    }


    renderReview() {
    return `
        <h6>${this.user_id} said:</h6>
        <p>${this.content}</p>
        `  
    }

    
}

const displayReview = (results) => {
    let html = results.map(reviewData => new Review(reviewData).renderReview()).join('')
    document.getElementById('reviews').innerHTML = html
}