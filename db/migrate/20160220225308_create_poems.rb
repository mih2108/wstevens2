class CreatePoems < ActiveRecord::Migration
  def change
    create_table :poems do |t|
      t.string :title
      t.text :text
      t.integer :year
      t.string :book

      t.timestamps null: false
    end
  end
end
