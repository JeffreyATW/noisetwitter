class AddAuthorFieldsToTweets < ActiveRecord::Migration
  def change
    remove_column :tweets, :author_id
    add_column :tweets, :author_url, :string
    add_column :tweets, :author_username, :string
    add_column :tweets, :author_image, :string
  end
end
