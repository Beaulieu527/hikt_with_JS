class HikeSerializer < ActiveModel::Serializer
  attributes :id,:name, :summary, :difficulty, :location, :length, :img_url
  belongs_to :user
  has_many :reviews
end
