class Blog
  include Mongoid::Document
  attr_accessible :title, :date, :detail, :images_attributes

  has_many :images, :dependent => :destroy
  accepts_nested_attributes_for :images, :reject_if => lambda { |a| a[:image].blank? }, :allow_destroy => true

  field :title, :type => String
  field :date, :type=> String
  field :detail, :type=> String
end
