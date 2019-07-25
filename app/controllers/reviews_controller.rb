class ReviewsController < ApplicationController
    before_action :authenticate_user!
    
    
    def index
        hike = Hike.find_by(id: params[:hike_id])
        @reviews = hike.reviews
        respond_to do |format|
            format.html
            format.json {render json: @reviews, status: 201}
        end
    end

    def new
        @review = Reviews.build

    end

    def create
        @review = Review.create(review_params)
        @review.user = current_user
        @review.save
        respond_to do |format|
            format.html
            format.json {render json: @review, status: 201}
          end
    end
    
    def show
        @review = set_hike.reviews.find(params[:id])
        respond_to do |f|
            f.html {}
            f.json {render json: review}
        end
    end

    def edit
        @review = set_hike.reviews.find(params[:id])
    end

    def update
        if @review.user
            @review = current_user.reviews.find(params[:id])
            @review.update(review_params)
            @review.save
            respond_to do |format| 
                format.html { }
                format.json { render json: review}
            end
        else
            redirect_to hike_path(@hike)
        end
    end

    def destroy
        current_user.review.destroy
        redirect_to reviews_path
    end

    private

    def review_params
        params.require(:review).permit(:content, :hike_id)
    end

end