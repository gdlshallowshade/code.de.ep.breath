class Admin::BlogsController < ApplicationController
  before_filter :authenticate, :except => [:index, :show] 

  # RESTful Style controller
  def index
  	@blogs = Blog.all
  end

  def show
  	
  end

  def new
    @blog = Blog.new
  end

  def create
  	@blog = Blog.new(params[:blog])
    if @blog.save
      flash[:notice] = "Blog created"
      redirect_to "/blogs"
    else 
      flash[:notice] = "Error occured, cannot create blog"
      redirect_to "/blogs/new"
    end
  end

  def edit
  	
  end

  def update
  	
  end

  def destroy
  	
  end

  protected

  def authenticate
  	authenticate_or_request_with_http_basic do |username, password|
  		username == ADMIN_CONFIG['admin'] && password == ADMIN_CONFIG['password']
  	end
  end
end