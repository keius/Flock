class Api::GroupsController < ApplicationController
  def create
    @group = Group.new(group_params)
    if @group.save
      render 'api/groups/show'
    else
      render @group.errors.full_messages, status: 422
    end
  end
end
