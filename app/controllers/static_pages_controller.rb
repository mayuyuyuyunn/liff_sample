class StaticPagesController < ApplicationController
  def top
    if current_user.nil?
      render :before_login
    else
      render :after_login
    end
  end

  def before_login; end

  def after_login; end
end
