class CreateGoals < ActiveRecord::Migration[6.0]
  def change
    create_table :goals do |t|
      t.string :goalname
      t.string :deadline
      t.integer :importance
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
