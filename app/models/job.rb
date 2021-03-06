# == Schema Information
#
# Table name: jobs
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  start_time :string           not null
#  end_time   :string           not null
#  date       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  truck_id   :integer
#

class Job < ActiveRecord::Base
    validates :name, presence: true
    validates :start_time, presence: true
    validates :end_time, presence: true
    validates :date, presence: true
    # validate is_available?

    belongs_to :truck, class_name: "Truck", foreign_key: "truck_id"
    def is_available?
        trucks = Truck.all
        for truck in trucks
            if truck.start_time.to_i >= self.start_time.to_i && truck.end_time.to_i <= self.end_time.to_i
                return false 
            end 
            # debugger
        end  
    end 
    private
        
end
