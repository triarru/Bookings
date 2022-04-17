import React from "react";
import { Button } from "@mui/material";
import { deleteToken } from "../../utils/localStorage";
import { useNavigate } from 'react-router-dom';
import { getAllUser } from "../../services/api/user";

function Home() {
  const navigate = useNavigate()

  const logout = () => {
    deleteToken()
    navigate('/');
  };

  const test = () => {
    getAllUser()
  };

  return (
    <div>
      dcm Vinh
      <Button onClick={() => logout()}>Log Out</Button>
      <Button onClick={() => test()}>Get All User</Button>
    </div>
  );
}

export default Home;
