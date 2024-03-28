import { HeaderAvatar } from "../../../components/Avatar"
import avatarImg from '../../../assets/avatarImg.png'
import dashboardHero from "../../../assets/dashboardHero.png"

function Dashboard() {
 
  return (
    <div>
      <div className="bg-[#F0F0F0] w-[70rem] h-[14.3125rem] px-12 flex justify-between items-center">
        <div className="flex justify-start items-start gap-6">
          <HeaderAvatar src={avatarImg} />
          <div className="space-y-2">
            <h4>Welcome, <span className="font-bold">Sarah</span> </h4>
            <p>Here’s an overview of your classes</p>
            <p>School Base Solutions</p>
          </div>
        </div>

        <figure className="max-w-80 max-h-48">
          <img src={dashboardHero} alt="dashboard img" />
        </figure>
      </div>
    </div>
  )
}

export default Dashboard
