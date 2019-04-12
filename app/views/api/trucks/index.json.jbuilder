json.trucks @trucks do |truck|
  json.name truck.name
  json.id truck.id
  json.start_time truck.start_time
  json.end_time truck.end_time
  json.jobs truck.jobs
end