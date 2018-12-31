import * as React from 'react'
import './styles.scss'
import Logout from '../logout/container'

export default class Splash extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className='navbar'>
        <div className="outer-logout">
          <Logout />
        </div>
      </div>
    )
  }
}
