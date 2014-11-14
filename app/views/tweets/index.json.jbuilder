json.array!(@tweets) do |tweet|
  json.extract! tweet, :id, :author_username, :author_image, :author_url, :content, :favorited, :retweeted, :created_at
  json.json_url tweet_url(tweet, format: :json)
end
