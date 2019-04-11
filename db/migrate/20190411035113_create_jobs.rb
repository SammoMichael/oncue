class CreateJobs < ActiveRecord::Migration[5.2]
  def change
    create_table :jobs do |t|
      t.string :name, unique: true, null: false
      t.time :start_time, null: false
      t.time :end_time, null: false
      t.datetime :date, null: false
      t.timestamps 
    end
    add_index :jobs, :name
  end
end
