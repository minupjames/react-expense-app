import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from  'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {numeral(amount).format('S0,0.00')}
      -
      {moment(createdAt).format('MMMM Do, YYYY')}
    </p>

  </div>
);

export default connect()(ExpenseListItem);
