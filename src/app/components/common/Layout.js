import React from 'react'

import Header from './Header'
import Navigation from '../navigation/components/Navigation'
import Footer from './Footer'

import LayoutSwitcher from '../layout/components/LayoutSwitcher'


// require('../../smartadmin/components/less/components.less');

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div id="main" role="main">
          <LayoutSwitcher />

          {this.props.children}
        </div>

        <Footer />
     
      </div>
    )
  }
}

