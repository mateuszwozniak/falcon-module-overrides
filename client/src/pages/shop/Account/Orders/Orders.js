import React from 'react';
import { NetworkStatus } from 'apollo-client';
import { H1, GridLayout, Button, FlexLayout } from '@deity/falcon-ui';
import { T } from '@deity/falcon-i18n';
import { OrdersListQuery, OrdersList, NoOrders } from '@deity/falcon-ecommerce-uikit';

const Orders = () => (
  <GridLayout mb="md" gridGap="md">
    <H1>
      <T id="ordersList.title" />
    </H1>
    <OrdersListQuery>
      {({ orders: { items, pagination }, fetchMore, networkStatus }) =>
        items.length ? (
          <React.Fragment>
            <OrdersList items={items} />
            {pagination.nextPage && (
              <FlexLayout justifyContent="center">
                <Button
                  onClick={fetchMore}
                  variant={networkStatus === NetworkStatus.fetchMore ? 'loader' : 'secondary'}
                  height="xl"
                >
                  <T id="ordersList.showMore" />
                </Button>
              </FlexLayout>
            )}
          </React.Fragment>
        ) : (
          <NoOrders />
        )
      }
    </OrdersListQuery>
  </GridLayout>
);

export default Orders;
