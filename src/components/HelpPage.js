import React from 'react';

const HelpPage = (props) => {
    console.log(props);
    return (
        <div>
            I'm showing help for an item {props.match.params.id}
  </div>
    );
}

export default HelpPage;
