import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from '../headerOption/HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux/es/exports';
import { logout} from '../features/userSlice';
import { auth } from '../firebase';
function Header() {
  const dispatch=useDispatch()
  const logoutOfApp=()=>{
     dispatch(logout())
     auth.signOut()
  }
  return (
    <div className='header'>
     
      <div className="header__left">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
        <div className="header__search">
            <SearchIcon/>
            <input type="text" placeholder='Search' />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} text="Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} text="My Network"/>
        <HeaderOption Icon={BusinessCenterIcon} text="Jobs"/>
        <HeaderOption Icon={ChatIcon} text="messaging"/>
        <HeaderOption Icon={NotificationsIcon} text="Notifications"/>
        <HeaderOption avatar
                      onClick={logoutOfApp} text="me"/>
      </div>
    </div>
  )
}

export default Header
