class CreateTweets < ActiveRecord::Migration
  def change
    create_table :tweets do |t|
      t.integer :author_id
      t.string :content
      t.boolean :favorited
      t.boolean :retweeted

      t.timestamps
    end
  end
end
