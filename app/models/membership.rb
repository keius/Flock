class Membership < ApplicationRecord
  validates :user_id, :group_id, null: false

  belongs_to :user

  belongs_to :group
end
