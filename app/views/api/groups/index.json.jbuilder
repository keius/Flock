json.array! @groups do |group|
  json.extract! group, :id, :title, :description, :location, :image_url
  json.owner do
    json.extract! group.owner, :id, :full_name, :image_url
    end
  json.members do
    json.array! group.members do |member|
      json.extract! member, :id
    end
  end
end
