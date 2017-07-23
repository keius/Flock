json.extract! user, :id, :email, :full_name, :image_url

json.groups do
  json.array! user.groups do |group|
    json.extract! group, :id, :title, :owner_id
  end
end
