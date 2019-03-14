import React from 'react';
import PropTypes from 'prop-types';
import { SearchConsumer, CategoryProductsQuery, Category } from '@deity/falcon-ecommerce-uikit';

const CategoryPage = ({ id }) => (
  <SearchConsumer>
    {({ state, availableSortOrders, setSortOrder }) => (
      <CategoryProductsQuery
        variables={{
          categoryId: id,
          sort: {
            direction: state.sort.direction,
            field: state.sort.field
          },
          filters: state.filters
        }}
      >
        {categoryProps => (
          <Category
            {...categoryProps}
            availableSortOrders={availableSortOrders}
            activeSortOrder={state.sort}
            setSortOrder={setSortOrder}
          />
        )}
      </CategoryProductsQuery>
    )}
  </SearchConsumer>
);

CategoryPage.propTypes = {
  id: PropTypes.string.isRequired
};

export default CategoryPage;
