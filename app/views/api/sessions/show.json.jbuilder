json.extract! @user, :id, :full_name
json.groups do
  json.array! @user.groups do |group|
    json.extract! group, :id, :title
  end
end
