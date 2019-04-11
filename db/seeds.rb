# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Job.delete_all
Truck.delete_all

Truck.create!([
  {id: 1, name: "truck1", start_time:"8am"  , end_time: "7pm"},
  {id: 2, name: "truck2", start_time: "8am" , end_time: "8pm"},
  {id: 3, name: "truck3", start_time: "9am" , end_time: "5pm"},
  {id: 4, name: "truck4", start_time: "8am" , end_time: "6pm"},
  {id: 5, name: "truck5", start_time: "7am" , end_time: "9pm" }
])

Job.create!([
  {id: 1, truck_id: 1, name: "Bob", start_time: "8am" ,end_time: "2pm" , date: "05/05/2018" },
  {id: 2, truck_id: 1, name: "Rich", start_time: "8am" ,end_time: "2pm", date: "05/06/2018" },
  {id: 3, truck_id: 2, name: "James", start_time: "8am"  ,end_time: "2pm", date: "05/07/2018" },
  {id: 4, truck_id: 2, name: "Alison", start_time: "8am"  ,end_time: "2pm", date: "05/08/2018" },
  {id: 5, truck_id: 3, name: "James", start_time: "8am"  ,end_time: "2pm", date: "05/09/2018" },
  {id: 6, truck_id: 4, name: "Kay", start_time: "8am"  ,end_time: "2pm", date: "05/010/2018" },
  {id: 7, truck_id: 5, name: "Jed", start_time: "8am"  ,end_time: "2pm", date: "05/11/2018" }
])