import React from 'react';
import {Outlet} from "react-router-dom";

export function App() {
  return (
    <div>
      <h3>Shop</h3>
      <Outlet />
    </div>
  );
}
