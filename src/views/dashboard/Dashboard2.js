import React, { PureComponent } from 'react'
import Counter from '../../features/counter/Counter'

class Dashboard extends PureComponent {
  render () {
    return (
      <>
        Hello World 2
      </>
    )  
  }
  
}

export default React.memo(Dashboard)
