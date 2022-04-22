Rails.application.routes.draw do
  root "projects#index"

  get "/projects", to: "projects#index"
end
