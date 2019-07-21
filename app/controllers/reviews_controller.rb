class ReviewsController < ApplicationController
    before_action :authenticate_user!
    before_action :set_hike
    
    def index
        @reviews = set_hike.reviews.all
        render json: @reviews, include: {**}
    end

    def new
        @review = Reviews.build

    end

    def create
        @review = Reviews.create(review_params)
        @review.user = current_user
        set_hike.reviews  << @review
        render json: @review 
        redirect_to hike_path(@hike)
    end
    
    def show
        @review = set_hike.reviews.find(params[:id])
        respond_to do |f|
            f.html { render :show}
            f.json {render json: review, include: {**} }
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
                format.html { redirect_to hike_path(set_hike) }
                format.json { render json: review, include: {**} }
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
        params.require(:review).permit(:content)
    end

end