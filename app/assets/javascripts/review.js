
class Review {
    constructor(attributes) {
        this.id = attributes.id
        this.user = attributes.user
        this.content = attributes.content
    }


    renderReview() {
        return `<p><strong>${this.user.email} said:</strong> ${this.content}</p>`  
    }

    
}
