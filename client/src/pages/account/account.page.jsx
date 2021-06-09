import React from "react";
import Github from "../../components/github/github.component";
import Header from "../../components/header"
import "./account.styles.scss";
import avatar from "../../assets/images/avatar.jpg";
import { SettingOutlined } from '@ant-design/icons';

const AccountPage = () => {
  return (
    <div>
      <Header />
      <div className="homePage">
        <div className="hero">
          <h1>
            <img src={avatar} alt="Logo" style={{marginTop:'20px', width:'200px', border:'5px solid #07152b'}}/>
          </h1>
          <p>Nerd_funkeiro</p>
          <p style={{fontSize:'20px'}}>nerdfunkeiro2002@gmail.com</p>
        </div>
        <Github />
      </div>
    </div>
  );
};

export default AccountPage;
