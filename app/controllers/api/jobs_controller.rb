class Api::JobsController < ApplicationController
    def new
    end 

    def create
    end 

    def index
        @jobs = Job.all
    end

    
    
end