import { themed } from '@deity/falcon-ui';

export const Button = themed({
  tag: 'button',
  defaultTheme: {
    button: {
      fontSzie: 'xl',
      m: 'sm',
      css: {
        border: '1px solid red',
        background: 'yellow',
        color: 'black',
        ':hover': {
          background: 'green'
        }
      }
    }
  }
});
