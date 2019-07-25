function handleFetch(event) {
    
  fetch(`http://localhost:3000/hikes/${event.srcElement.id}.json`)
      .then(res => res.json())
      .then(function (json) {
          appendResults(json)
          let reviews = '<h2>Reviews</h2>'
          json.reviews.forEach( function(review){
              reviews +=
                  `<p>${review.id} said: ${review.content}</p>`
                  });
                  document.getElementById('reviews').innerHTML = reviews
      })

      //fetch(`http://localhost:3000/hikes/${event.srcElement.id}/reviews.json`)
      //.then((res) => { return res.json() })
      //.then(data => {
      //    let reviews = '<h2>Reviews</h2>'
      //    json.reviews.forEach( function(rev){
      //        reviews +=
      //          `<ul>
      //            <li>${review.user_id} said:</li>
      //            <li>${review.content}</li>
      //          </ul>`
      //            });
      //            document.getElementById('reviews').innerHTML = reviews
      //        })
}
