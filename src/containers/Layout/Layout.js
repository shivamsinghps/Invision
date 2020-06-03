import React , { Component , Fragment } from 'react'
import classes from './Layout.module.css'
import SideDrawer from '../../components/UI/SideDrawer/SideDrawer'


class Layout extends Component {
  render(){
    return(
    <Fragment>
        <div className={classes.Layout}>

          {this.props.children}
        </div>

    </Fragment>
    )
  }
}

export default Layout
