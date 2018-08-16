import React from 'react';
import { Link } from 'react-router-dom'



const ExpenseListItem = ({ description, amount, createdAt, id }) => {
    return (
        <div>
            <Link to={`/edit/${id}`}>
            <h2>{description}</h2>
            </Link>
            <p>{amount / 100}$ - {createdAt}</p>
          </div>
    );

}

export default ExpenseListItem;













