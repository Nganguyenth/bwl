/* eslint-disable prettier/prettier */
import React from 'react';
import MainContent from '../../components/Layout';
import Header from '../../components/Header';
import {getUser} from '../../api/apiUser';
import {useStore} from "../../store";

const Bwl = () => {
  const {state, dispatch}=useStore();
  React.useEffect(() => {
    const foo = () =>{
      if(document.cookie && document.cookie.split("=")[0] === "token"){
        getUser(document.cookie.split("=")[1], dispatch);
      }
    };
    foo();
  }, [document.cookie]);

  return (
    <React.Fragment>
      <Header />
      <MainContent />
    </React.Fragment>
  );
};
export default Bwl;
