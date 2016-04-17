class Collection < ActiveRecord::Base
  mount_uploader :avatar, AvatarUploader
end
