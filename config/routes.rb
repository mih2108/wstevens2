Rails.application.routes.draw do
 resources :poems, :only => [:show, :index]
 root 'welcome#index'
 #get "welcome/index"
 get "index" => "welcome#index", as: :home
 get "about" => "welcome#about", as: :about
 get "callforpapers" => "welcome#callforpapers", as: :callforpapers
 get "listingofpapers" => "welcome#listingofpapers", as: :listingofpapers
 get "quotegenerator" => "welcome#quotegenerator", as: :quotegenerator
 get "aboutwss" => "welcome#aboutwss", as: :aboutwss
 get "upcomingevents" => "welcome#upcomingevents", as: :upcomingevents
 get "resources" => "welcome#resources", as: :resources
 # get "poems" => "poems#index", as: :poems

end
	