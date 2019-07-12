class HikeSerializer < ActiveModel::Serializer
  attributes :id,:name, :summary, :difficulty, :location, :length, :img_url
  has_many :reviews
  has_many :users, through: :reviews
end
