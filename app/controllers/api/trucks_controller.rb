class Api::TrucksController < ApplicationController
    
    def create
        @truck = Truck.new(truck_params)
        @truck.save 
        render :index
        # @truck.save ? render :index : flash[:error] = @truck.errors.full_messages
    end 

    def index
        @trucks = Truck.includes(:jobs).all
    end
    
    private 

    def truck_params 
        params.permit(:name, :start_time, :end_time)
    end 
end