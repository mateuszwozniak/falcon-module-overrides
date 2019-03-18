import { themed } from '@deity/falcon-ui';

export const Button = themed({
  tag: 'button',
  defaultTheme: {
    button: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      fontSize: 'md',
      mx: 'xs',
      css: ({ theme }) => ({
        border: 'none',
        background: theme.colors.secondaryDark,
        color: theme.colors.primaryLight,
        ':hover': {
          background: theme.colors.primaryLight,
          color: 'white',
          svg: {
            stroke: 'white '
          }
        },
        svg: {
          stroke: theme.colors.primaryLight
        }
      })
    }
  }
});
