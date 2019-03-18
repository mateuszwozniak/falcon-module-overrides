import React from 'react';
import { CartQuery, OpenSidebarMutation, MiniCartIcon } from '@deity/falcon-ecommerce-uikit';
import { Box, H1, FlexLayout } from '@deity/falcon-ui';

export const Header = ({ children, ...props }) => (
  <Box p="sm" css={{ background: '#eee' }} {...props}>
    <FlexLayout alignItems="center" px="sm">
      <H1 flex="1">This is a custom Header</H1>
      <Box>
        <OpenSidebarMutation>
          {openSidebar => (
            <CartQuery>
              {data => (
                <MiniCartIcon
                  onClick={() => openSidebar({ variables: { contentType: 'cart' } })}
                  itemsQty={data.cart ? data.cart.itemsQty : 0}
                />
              )}
            </CartQuery>
          )}
        </OpenSidebarMutation>
      </Box>
    </FlexLayout>
    {children}
  </Box>
);
