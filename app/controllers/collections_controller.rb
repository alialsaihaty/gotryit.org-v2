class CollectionsController < ApplicationController
  def new
    @collection = Collection.new
  end
  def create
    @collection = Collection.new collection_params
    if @collection.save
      redirect_to collection_path(@collection), notice: "collection Successfully created!"
    else
      flash[:alert] = "See error(s) below..."
      render :new
    end
  end
  def show
    @collection = Collection.find params[:id]
  end
  def index
    @collections = Collection.all
  end

  private

  def collection_params
    params.require(:collection).permit([:title, :avatar])
  end

end
