class User < ApplicationRecord
    validates :email, :session_token, presence:true, uniqueness:true 
    validates :password_digest, :name, presence: true 
    validates :password, length:{minimum: 6}, allow_nil: true 

    attr_reader :password 
    after_initialize :ensure_session_token 

    has_many :reviews,
    foreign_key: :user_id,
    class_name: :User

    has_many :cartitems,
    foreign_key: :user_id,
    class_name: :CartItem

    def ensure_session_token
        self.session_token ||= SecureRandom.base64
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            return user
        else
            return nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
    def reset_session_token!
        self.session_token = SecureRandom.base64
        self.save!
        self.session_token
    end
end
