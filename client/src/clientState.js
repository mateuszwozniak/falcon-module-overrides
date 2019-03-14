import { GET_SIDEBAR_STATE } from './pages/shop/components/Sidebar';
/**
 * Defines client-side state resolvers
 */

const sortOrders = [
  {
    name: 'Price ascending',
    field: 'price',
    direction: 'asc',
    __typename: 'SortOrderValue'
  },
  {
    name: 'Price descending',
    field: 'price',
    direction: 'desc',
    __typename: 'SortOrderValue'
  },
  {
    name: 'Name ascending',
    field: 'name',
    direction: 'asc',
    __typename: 'SortOrderValue'
  },
  {
    name: 'Name descending',
    field: 'name',
    direction: 'desc',
    __typename: 'SortOrderValue'
  }
];

export default {
  data: {
    sidebar: {
      contentType: null,
      side: 'right',
      isOpen: false,
      __typename: 'SidebarStatus'
    }
  },

  resolvers: {
    Query: {
      sortOrders: () => sortOrders
    },

    Mutation: {
      openSidebar: (_, { contentType, side }, { cache }) => {
        const data = {
          sidebar: {
            contentType,
            side: side || 'right',
            isOpen: true,
            __typename: 'SidebarStatus'
          }
        };

        cache.writeQuery({ query: GET_SIDEBAR_STATE, data });

        return null;
      },

      closeSidebar: (_, _variables, { cache }) => {
        const queryResponse = cache.readQuery({ query: GET_SIDEBAR_STATE });
        const sidebar = { ...queryResponse.sidebar };
        sidebar.isOpen = false;

        cache.writeQuery({
          query: GET_SIDEBAR_STATE,
          data: { sidebar }
        });

        return null;
      }
    }
  }
};
