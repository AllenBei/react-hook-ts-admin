import React from 'react';
import WeipaiSearch from './searchForms'
import './index.scss';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { bindActionCreators } from 'redux';
import * as loginAction from '../../redux/Login/action'
// import reducer from '../../redux/Login/reducer';

const Weipai =(props:any)=>{


  const login = (val:any) =>{
    const {userLogin} = props.actions
    userLogin({
      mobile:val,
      password:val
    })
  }

  return(
    <div>
      <WeipaiSearch
      // login={(obj:any)=>login((obj:any))}
      />
    </div>
  )
}
const mapStateToProps = (state:any) => {
  return { state:state.login };
};

const mapDispatchToProps = (dispatch:any) => ({
  actions: bindActionCreators(loginAction, dispatch)
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

// const withReducer = injectReducer({ key: 'login', reducer });

export default compose(
  // withReducer,
  withConnect
)(Weipai);

