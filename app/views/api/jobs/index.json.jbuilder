json.jobs @jobs do |job|
  json.name job.name
  json.id job.id
  json.truckId job.truck_id
  json.start_time job.start_time
  json.end_time job.end_time
  json.date job.date
end