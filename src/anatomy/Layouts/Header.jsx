import { Button } from "../../components/Button/Buttons";
import { useNavigate } from "react-router-dom"



function Header() {

  const navigate = useNavigate();
  return (
    <header className="full-width content-grid | w-full max-h-[110px] bg-gray-200 p-4">
      <div className="content | flex items-center justify-between">
        <h1 className="font-bold text-text-black text-xl">LOGO</h1>
        <nav>
          <Button type="button" variant="primary" onClick={() => navigate("/login")}>LOGIN</Button>
          <Button type="button" variant="primary" onClick={() => navigate("/signup")}>SIGN UP</Button>
        </nav>
      </div>
    </header>
  )
}

export default Header

