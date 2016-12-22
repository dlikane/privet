import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';
import LocaleToggle from 'containers/LocaleToggle';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <A href="https://twitter.com/mxstbr">
          <Img src={Banner} alt="privetMelbourne - Logo" />
        </A>
        <section>
          <LocaleToggle />
        </section>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/edit">
            <FormattedMessage {...messages.edit} />
          </HeaderLink>
          <HeaderLink to="/batch">
            <FormattedMessage {...messages.batch} />
          </HeaderLink>
          <HeaderLink to="/test">
            <FormattedMessage {...messages.test} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
