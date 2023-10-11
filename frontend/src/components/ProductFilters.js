function ProductFilters() {
  return (
    <div id='products-filters-div'>
      <div id='category-div' className="option-picker">
        <p>Category:</p>
        <select name="Select category" id="category">
          <option value="romance">Romance</option>
          <option value="fiction">Fiction</option>
          <option value="adventure">Adventure</option>
          <option value="crime">Crime</option>
          <option value="children">Children</option>
        </select>
      </div>
      <div id='sorting-view-div'>
        <div id='sorting-div' className="option-picker">
          <p>Sort:</p>
          <select name="Sort by" id="sorting">
            <option value="price">Price</option>
            <option value="rating">Rating</option>
            <option value="author">Author</option>
          </select>
        </div>
        <div id='view-div' className="option-picker">
          <select name="View" id="view">
            <option>List view</option>
            <option>Grid view</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default ProductFilters