class WelcomeController < ApplicationController

layout "welcome"

def index
	render('welcome/index')

end

def hello
	@array=[1,2,3,4,5]
	@id = params['id'].to_i
	@page =params[:page].to_i

end

def other_hello
	redirect_to(:controller => 'welcome', :action => 'index')
end

def text_helpers
	
end


def about

end

def quotegenerator

end

def callforpapers

end

def listingofpapers

end

def aboutwss

end

def upcomingevents

end

def resources
end

end
