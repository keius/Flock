json.extract! group, :id, :title, :category, :description, :location, :image_url
json.owner do
  json.extract! group.owner, :id, :first_name, :image_url
end
