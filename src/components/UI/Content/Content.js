import React from 'react'
import classes from './Content.module.css'
import sizeMe from 'react-sizeme'

const content = (props)=>{
  return(
    <section className={classes.Content}>
      <h1>Content</h1>
    </section>
  )
}
export default sizeMe({ monitorHeight: true })(content)
