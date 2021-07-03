import React,{useContext} from 'react';
import { LoginContext } from './context/aurth';

const If = props => {
  return props.condition ? props.children : null;
};
 

export const Auth = (props) => {
  const authContext = useContext(LoginContext);

 
    let okToRender = false;

    try {
      console.log('aaa',authContext)
      okToRender =
      authContext.loggedIn &&
        (props.capability
          ? authContext.user.capabilities.includes(props.capability)
          : true);
    } catch (e) {
      console.warn('Not Authorized');
    }

    // <Auth> <div /> </Auth>
    /// are you logged in?
    /// was there no capability specified?

    // <Auth capability="foo"> <div /> </Auth>
    /// are you logged in?
    /// Is there a capability that we care about?
    /// do you have it?

    return (
      <If condition={okToRender}>
        {props.children}
      </If>
    );
  }




export default Auth;