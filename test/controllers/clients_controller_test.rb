require 'test_helper'

class ClientsControllerTest < ActionController::TestCase
  test "should get testFunc" do
    get :testFunc
    assert_response :success
  end

end
