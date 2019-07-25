class HikesController < ApplicationController
    before_action :authenticate_user! 
 
    def index
        # @hikes = Hike.search(params[:search])
        @hikes = Hike.all
        respond_to do |f|
            f.html { render :index}
            f.json { render json: @hikes}
        end
    end

    def new
        @hike = Hike.new
    end
    
    def create
        @hike = current_user.hikes.create(hike_params)
        respond_to do |f|
            f.html { redirect_to hikes_path }
            f.json { render json: @hike } 
        end
    end

    def show
        @hike = Hike.find(params[:id])
        respond_to do |f|
            f.html { render :show}
            f.json { render json: @hike, include: "**"}
        end
    end

    def edit
        @hike = Hike.find(params[:id])
    end

    def update
        @hike = Hike.find(params[:id])
        if @hike && @hike.user == current_user
            @hike.update(hike_params)
            render json: @hike
        end
    end

    def destroy
        @hike = Hike.find(params[:id])
        if @hike && @hike.user == current_user
            @hike.destroy
        end
    end

    private

    def hike_params
        params.require(:hike).permit(:name, :summary, :location, :length,:img_url)
    end
 
end