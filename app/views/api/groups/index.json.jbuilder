@groups.each do |group|
  json.set! group.id do
    json.extract! group, :id, :owner_id, :category_id, :title, :description, :location, :image_url
  end
end
