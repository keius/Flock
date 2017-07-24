json.user do
  json.extract! @user, :full_name, :id
  json.groups do
    json.array! @user.groups do |group|
      json.extract! group, :title, :id
    end
  end
end

json.group do
  json.partial! '/api/shared/group', group: @group
end
