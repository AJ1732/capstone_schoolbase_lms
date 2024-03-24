import Button from "./Button";
import { useNavigate } from "react-router-dom"



function Header() {

  const navigate = useNavigate();
  return (
    <>
      <header className="flex fixed items-center w-full justify-between bg-gray-200 p-4">
        <h1>LOGO</h1>
        <nav>
          <Button type="button" variant="primary" onClick={() => navigate("/login")}>LOGIN</Button>

          <Button type="button" variant="primary" onClick={() => navigate("/signup")}>SIGN UP</Button>
        </nav>
        

        
      </header>
      
    </>
  )
}

export default Header

