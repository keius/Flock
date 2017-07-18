class User < ApplicationRecord
  validates :username, :email, :password_digest,
            :session_token, :full_name, :image_url, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, uniqueness: true

  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_session_token
    self.password_digest = SecureRandom.urlsafe_base64
    ensure_session_token_uniqueness
    self.save
    self.password_digest
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = SecureRandom.urlsafe_base64
    end
  end
end
