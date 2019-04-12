class Api::JobsController < ApplicationController
    
    def create
        @job = Job.new(jobs_params)
        @job.save
        render :index
    end 

    def index
        @jobs = Job.all
    end

    
    private

    def jobs_params
        params.require(:job).permit(:name, :start_time, :end_time, :date, :truck_id)
    end
end