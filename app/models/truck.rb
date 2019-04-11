# == Schema Information
#
# Table name: trucks
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  start_time :string           not null
#  end_time   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Truck < ActiveRecord::Base
    validates :name, uniqueness: true, presence: true
    validates :start_time, presence: true
    validates :end_time, presence: true
    
    has_many :jobs, class_name: "Job", foreign_key: "truck_id"
    
    private
        
end
