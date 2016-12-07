/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  licenseMessage: {
    id: 'footer.message',
    defaultMessage: 'This project is in development',
  },
  authorMessage: {
    id: 'footer.author.message',
    defaultMessage: `
      Made by {author}.
    `,
  },
});
