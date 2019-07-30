import React, { useState } from 'react';
import tick from '../../assets/images/tick.svg';
import { connect } from 'react-redux';
import { updateStatus } from '../../store/actions/users';

const User = ({ user, updateStatus, showAll, updateSelected }) => {
  const [checked, setChecked] = useState(false);
  const handleCheck = e => {
    e.target.classList.toggle('checked');
    if (e.target.classList.contains('checked')) {
      updateSelected(true);
    } else {
      updateSelected(false);
    }
  };
  const toggleStatus = e => {
    e.target.classList.toggle('active');
    updateStatus(user.id);
  };
  return (
    <div className='row other-row'>
      {/* First col */}
      <div className='col-lg-2'>
        <div className='part first other'>
          <label
            htmlFor={user.id}
            onClick={handleCheck}
            className={showAll ? 'checked' : null}
          >
            <img src={tick} alt='' />
          </label>
          <input
            type='checkbox'
            name={user.id}
            value={user.id}
            id={user.id}
            className='checked'
          />
          <span className={`text ${user.type.slice(0, 2).toLowerCase()}`}>
            {user.type.slice(0, 2)}
          </span>
        </div>
      </div>

      {/* Second col */}
      <div className='col-lg-2'>
        <div className='part second other'>
          <span className='text'>{user.name}</span>
        </div>
      </div>

      {/* Third col */}
      <div className='col-lg-3'>
        <div className='part third other'>
          <span className='text'>{user.email}</span>
        </div>
      </div>

      {/* fourth col */}
      <div className='col-lg-3'>
        <div className='part fourth other'>
          <span className='text'>{user.phone}</span>
        </div>
      </div>

      {/* fifth col */}
      <div className='col-lg-2'>
        <div className='part fifth other'>
          <span
            className={user.active ? 'check-wrap active' : 'check-wrap'}
            onClick={toggleStatus}
          >
            <span className='circle' />
          </span>
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  { updateStatus }
)(User);
