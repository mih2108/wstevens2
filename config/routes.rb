Rails.application.routes.draw do
 root 'welcome#index'
 #get "welcome/index"
 match ':controller(/:action(/:id))', :via => :get
end
