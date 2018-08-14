import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>Some text here {props.text}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    
    return (props) => (
        
        <div>
            {console.log(props)}
            {props.isAdmin && <h3>This is personal Info.Please don't share.</h3>}
            <WrappedComponent {...props}/>
        </div>
    )
}


const AdminInfo = withAdminWarning(Info);



ReactDOM.render(<AdminInfo isAdmin={true} text='Spartak Moscow' />, document.getElementById('app'));