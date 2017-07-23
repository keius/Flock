json.extract! user, :id, :full_name
json.groups do
  json.array! user.groups do |group|
    json.extract! group, :title, :id
  end
end
