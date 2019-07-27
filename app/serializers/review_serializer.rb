class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content
  has_one :user, serializer: ReviewUserSerializer 
end
