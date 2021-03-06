json.array!(@poems) do |poem|
  json.extract! poem, :id, :title, :text, :year, :book
  json.url poem_url(poem, format: :json)
end
