class CreateSteps < ActiveRecord::Migration[6.0]
  def change
    create_table :steps do |t|
      t.string :stepname
      t.integer :minutes_todo
      t.integer :step_number
      t.belongs_to :goal, null: false, foreign_key: true
      t.integer :completed

      t.timestamps
    end
  end
end
