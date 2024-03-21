import Button from "./Button"


function Header() {
  return (
    <>
      <header className="flex items-center justify-between bg-gray-200 p-4">
        <h1>LOGO</h1>
        <nav>
          <Button type="button" variant="primary">LOGIN</Button>
          <Button type="button" variant="primary">SIGN UP</Button>


        </nav>
        

        
      </header>
      
    </>
  )
}

export default Header
