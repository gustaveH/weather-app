import React from 'react';

const Spinner = (props) => {
  return (
    <div className='ui active dimmer'>
      <div className='ui big text loader'>{props.message}</div>
    </div>
  );
};

//In case we forget to put on the message
Spinner.dedaultProps = {
  message: 'loading...',
};

export default Spinner;
