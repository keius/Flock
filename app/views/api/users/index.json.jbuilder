@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :email, :full_name, :image_url
  end
end
