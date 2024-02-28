import React from 'react';
import classes from './App.module.scss'
import {Outlet} from "react-router-dom";

export function App() {
  return (
    <div>
      <h3>Admin</h3>
      <Outlet />
    </div>
  );
}
