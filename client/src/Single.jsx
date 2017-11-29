import React from 'react';
import Event from './Event';

const Single = React.createClass({
  render() {
    const { eventId } = this.props.params;

    const i = this.props.events.findIndex(event => event.id === eventId);
    const event = this.props.events[i];

    return (
      <div className="single-event">
        <Event i={i} event={event} {...this.props} />
      </div>
    );
  },
});
export default Single;
