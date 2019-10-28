const hikes = [] 
function fetchHikes(){
    return fetch(`http://localhost:3000/hikes.json`)
        .then(res => res.json())
        .then(function (res) {
            res.forEach(element => {
                let hike = new Hike(element)
                hikes.push(hike)
                $("#hikeCard").append(hike.showHike())
            });
        })

}
$(document).on('turbolinks:load', function() {
    $('#hikeModal').on('hidden.bs.modal', function () {
        $(this).find('form').trigger('reset');
    })
    fetchHikes();
    
    $("#sortHikes").click(function(event){
        $("#hikeCard").html("")
        hikes.sort(function(a, b) {
            var nameA = a.name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
        })
        return hikes.forEach(hike => {
            $("#hikeCard").append(hike.showHike())
        });
        
    } )

})

function handleFetch(event) {
    
  fetch(`http://localhost:3000/hikes/${event.srcElement.id}.json`)
      .then(res => res.json())
      .then(function (json) {
          appendResults(json)
          let reviews = '<h2>Reviews</h2>'
          json.reviews.forEach( function(review){
              reviews +=
                  `<p><strong>${review.user.email} said:</strong> ${review.content}</p>`
                  });
                  document.getElementById('reviews').innerHTML = reviews
      })

}


 
$(document).on('turbolinks:load', function() {
    $('#new_review').on('submit', function(event) {
        //prevent form from submitting the default way
        event.preventDefault();
        let hike = "hikes/" + $('#hikeId').val() + "/reviews"
        var values = $(this).serialize();
        let posting =  $.post(hike , values);
        posting.done(function(data) {
            console.log(data)
            let review = new Review(data)
            console.log(review)
            $("#reviews").append(review.renderReview())
            $( '#new_review' ).each(function(){
                this.reset();
            });

        });
    });
})



