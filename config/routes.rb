Rails.application.routes.draw do
  resources :poems
 root 'welcome#index'
 #get "welcome/index"
 get "index" => "welcome#index", as: :home
 get "about" => "welcome#about", as: :about
 get "quotegenerator" => "welcome#quotegenerator", as: :quotegenerator
end
