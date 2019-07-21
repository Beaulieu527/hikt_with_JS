<script type="text/javascript" charset="utf-8">
  $(document).on('turbolinks:load', function() {
    $('.new_review').on('submit', function(event) {
      //prevent form from submitting the default way
      event.preventDefault();
      let hike = this.action
      var values = $(this).serialize();
      
      let posting =  $.post(hike , values);
      posting.done(function(data) {
        $("#reviewUserEmail").text(data.user.email + " says:");
        $("#reviewContent").text(data.content);
      });
    });
  });
</script>

class review {
    constructor(attributes) {
        this.id = attributes.id;
        this.hike = attributes.hike_id
        this.user = attributes.user_id
        this.content = attributes.content;
    }


    renderReview() {
        return `
        <div id="reviewResults">
            <h6 id="reviewUserEmail">${this.user.email}</h6>
            <p id = "reviewContent">${this.content}</p>
        </div>
        `  
    }

    
}
