class AddSubtitleToCollections < ActiveRecord::Migration
  def change
    add_column :collections, :subtitle, :string
  end
end
