class CreateExperiences < ActiveRecord::Migration
  def change
    create_table :experiences do |t|
      t.string :title
      t.string :subtitle
      t.string :avatar

      t.timestamps null: false
    end
  end
end
