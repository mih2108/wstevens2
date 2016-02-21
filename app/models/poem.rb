class Poem < ActiveRecord::Base
 
 
  # It returns the articles whose titles contain one or more words that form the query
  def self.search(query)
    # where(:title, query) -> This would return an exact match of the query
    where("text like ? OR title like ? OR book like ?", "%#{query}%", "%#{query}%", "%#{query}%") 
  end

end
