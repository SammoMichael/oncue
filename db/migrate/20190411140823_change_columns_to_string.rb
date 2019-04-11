class ChangeColumnsToString < ActiveRecord::Migration[5.2]
  def change
    change_table :trucks do |t|
      t.change :start_time, :string, {null: false}
      t.change :end_time, :string, {null: false}
    end
    change_table :jobs do |t|
      t.change :start_time, :string, {null: false}
      t.change :end_time, :string, {null: false}
      t.change :date, :string, {null: false}
    end
  end
end
