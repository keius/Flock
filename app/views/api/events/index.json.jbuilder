@events.each do |event|
  json.set! event.id do
    json.partial! '/api/shared/event', event: event
  end
end
