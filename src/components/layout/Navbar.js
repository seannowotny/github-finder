import React, { Component } from 'react';

type Props = {|
  title: string,
  icon: string
|};

export class Navbar extends Component<Props> {
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon} /> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
