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
