import React, { Component } from 'react'
import SelectedMoment from './SelectedMoment'
import Scroll from './Scroll'

class Panel extends Component {
  render() {
    const moments = this.props.moments
    const momentsLength = moments.length
    let selectedMoment
    if (momentsLength === 2) {
      // check if BCE or AD
      if (new Date(moments[0].date).getUTCFullYear() > 0) {
        // end of list
        selectedMoment = moments[1]
      } else {
        // start of list
        selectedMoment = moments[0]
      }
    } else {
      // middle of list
      selectedMoment = moments[1]
    }
    return (
      <div className="panel">
        <div className="row">
          <div className="col-12">
            <SelectedMoment moment={selectedMoment} mapMoving={this.props.mapMoving} />
            <Scroll />
          </div>
        </div>
      </div>
    )
  }
}

export default Panel
