class Image
  include Mongoid::Document
  attr_accessor :image
  attr_accessible :caption, :image

  belongs_to :blog
  field :caption, :type => String
  
  # mount uploader
  mount_uploader :image, ImageUploader
end