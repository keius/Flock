json.extract! group, :id, :title, :category, :description, :location, :image_url
json.owner do
  json.extract! group.organizer, :id, :full_name, :image_url
  end
json.members do
  json.array! group.members do |member|
    json.extract! member, :id, :full_name
  end
end
