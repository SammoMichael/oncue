class CreateTrucks < ActiveRecord::Migration[5.2]
  def change
    create_table :trucks do |t|
      t.string :name, unique: true, null: false
      t.time :start_time, null: false
      t.time :end_time, null: false
      t.timestamps
    end
    add_index :trucks, :name
  end
end
