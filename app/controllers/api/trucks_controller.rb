class Api::TrucksController < ApplicationController
    def new
    end 

    def create
    end 

    def index
        @trucks = Truck.all
    end
    
    
end