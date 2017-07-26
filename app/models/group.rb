class Group < ApplicationRecord
  validates :owner_id, :title, presence: true
  validates :title, uniqueness: true

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: User

  has_many :memberships

  has_many :members,
    through: :memberships,
    source: :user

  has_many :events
end
