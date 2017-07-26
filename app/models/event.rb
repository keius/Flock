class Event < ApplicationRecord
  validates :title, :datetime, presence: true

  belongs_to :group

  belongs_to :host

  has_many :rsvps
end
