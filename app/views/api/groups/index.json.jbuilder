json.array! @groups do |group|
  json.extract! group, :id, :title, :description, :location, :image_url
end
