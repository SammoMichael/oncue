class Api::JobsController < ApplicationController
    
    def create
        @job = Job.new(jobs_params)
        # @job.truck_id = 1
        # debugger
        # @Job.save render :index : flash[:error] = @job.errors.full_messages
        @job.save
        render :index
    end 

    def index
        @jobs = Job.all
    end

    
    private

    def jobs_params
        params.require(:job).permit(:name, :start_time, :end_time, :date)
    end
end