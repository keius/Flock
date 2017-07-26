json.extract! event, :id, :title, :datetime, :description, :location, :image_url
json.group do
  json.extract! event.group, :id, :title, :image_url
end
json.host do
  json.extract! event.host, :id, :first_name, :image_url
end
