import React from 'react'
import { useNavigate } from "react-router-dom"
import { Button } from "../Button/Buttons";

export const HomePageHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="full-width content-grid | w-full max-h-[110px] bg-gray-200">
      <div className="content | p-4 flex items-center justify-between cursor-default">
        <h1 onClick={() => navigate("/")} className="font-bold text-text-black text-xl">LOGO</h1>
        <nav>
          <Button type="button" variant="primary" onClick={() => navigate("/login")}>LOGIN</Button>
          <Button type="button" variant="primary" onClick={() => navigate("/signup")}>SIGN UP</Button>
        </nav>
      </div>
    </header>
  )
}

export const DashboardHeader = () => {

  return (
    <header className="dashboard__header | max-h-[6.9375rem] w-full bg-gray-200 flex justify-center items-center">
      <div className="content | p-8 flex items-center justify-between cursor-default">
        Header
      </div>
    </header>
  )
}
