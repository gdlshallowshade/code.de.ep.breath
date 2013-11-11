class Blog
  include Mongoid::Document

  field :title, :type => String
  field :date, :type=> DateTime
  field :detail, :type=> String
end
