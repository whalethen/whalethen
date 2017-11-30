import React from 'react';
import Event from '.Event';

const Grid = React.createClass({
  render() {
    return (
      <div className="event-grid">
        {this.props.events.map((event, i) => (<Event
          {...this.props}
          key={i}
          i={i}
          event={event}
        />))}
      </div>
    );
  },
});

export default Grid;
