class Event < ApplicationRecord
  validates :title, presence: true

  belongs_to :group

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :User

  has_many :rsvps, dependent: :destroy;

  has_many :users,
    through: :rsvps,
    source: :user
end
