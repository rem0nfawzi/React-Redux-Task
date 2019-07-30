import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../store/actions/users';
import User from './user';
import tick from '../../assets/images/tick.svg';
import mark from '../../assets/images/mark.svg';

const Users = ({ getUsers, users: { loading, users } }) => {
  const [selected, setSelected] = useState({
    number: 0,
    showAll: false
  });

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const selectAll = e => {
    e.target.classList.toggle('checked');
    if (e.target.classList.contains('checked')) {
      setSelected({
        ...selected,
        showAll: true,
        number: users.length
      });
    } else {
      setSelected({
        ...selected,
        showAll: false,
        number: 0
      });
    }
  };

  const updateSelected = inc => {
    if (inc) {
      setSelected({
        ...selected,
        number: selected.number + 1
      });
    } else {
      setSelected({
        ...selected,
        number: selected.number - 1
      });
    }
  };
  return (
    <section id='users'>
      <div className='container-fluid'>
        {/* Title */}
        <div className='row top-title'>
          <div className='col-lg-10'>
            <div className='title-wrap'>
              <div className='users-icon' />
              <h2>users</h2>
            </div>
          </div>

          <div className='col-lg-2'>
            <img className='mark' src={mark} alt='' />
            <span className='selected'>{selected.number} selected</span>
          </div>
        </div>

        {/* Main row */}
        <div className='row main'>
          {/* First col */}
          <div className='col-lg-2'>
            <div className='part first main'>
              <label htmlFor='all' onClick={selectAll}>
                <img src={tick} alt='' />
              </label>
              <input type='checkbox' name='all' value='all' id='all' />
              <span className='text'>type</span>
            </div>
          </div>

          {/* Second col */}
          <div className='col-lg-2'>
            <div className='part second main'>
              <span className='text'>name</span>
            </div>
          </div>

          {/* Third col */}
          <div className='col-lg-3'>
            <div className='part third main'>
              <span className='text'>email</span>
            </div>
          </div>

          {/* fourth col */}
          <div className='col-lg-3'>
            <div className='part fourth main'>
              <span className='text'>telephone</span>
            </div>
          </div>

          {/* fifth col */}
          <div className='col-lg-2'>
            <div className='part fifth main'>
              <span className='text'>status</span>
            </div>
          </div>
        </div>

        {/* Users */}
        {!loading &&
          users.length > 0 &&
          users.map(user => {
            return (
              <User
                user={user}
                key={user.id}
                showAll={selected.showAll}
                updateSelected={updateSelected}
              />
            );
          })}
      </div>
    </section>
  );
};
const mapStateToProps = state => {
  return {
    users: state.users
  };
};
export default connect(
  mapStateToProps,
  { getUsers }
)(Users);
