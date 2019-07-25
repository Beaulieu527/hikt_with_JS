class UserSerializer < ActiveModel::Serializer
  attributes :id, :email
  has_many :hikes
  has_many :reviews
  # has_many :reviewed_hikes, through: :reviews, source: :hike, serializer: ReviewedHikesSerializer
end
