import * as React from 'react'
import {Nav} from './navbar/Nav'

export class Header extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Nav/>
      </div>
    )
  }
}
