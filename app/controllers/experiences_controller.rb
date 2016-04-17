class ExperiencesController < ApplicationController
  def new
    @experience = Experience.new
  end
  def create
    @experience = Experience.new experience_params
    if @experience.save
      redirect_to experience_path(@experience), notice: "experience Successfully created!"
    else
      flash[:alert] = "See error(s) below..."
      render :new
    end
  end
  def show
    @experience = Experience.find params[:id]
  end
  def index
    @experiences = Experience.all
  end

  private

  def experience_params
    params.require(:experience).permit([:title, :subtitle, :avatar])
  end
end
