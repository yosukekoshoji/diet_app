class Post < ApplicationRecord
  belongs_to :user
  validates :post, presence: true, unless: :image?
  mount_uploader :image, ImageUploader
end
