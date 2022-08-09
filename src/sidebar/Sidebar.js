import { Avatar } from '@mui/material'
import { selectUser } from '../features/userSlice'
import { useSelector } from 'react-redux/es/exports'
import './Sidebar.css'
function Sidebar() {
  const user=useSelector(selectUser)
  const recentItems=(topic)=>(
     <div className="sidebar__recentItem">
         <span className="sidebar__hash">
          #
         </span>
         <p>{topic}</p>
     </div>)
  
  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/002/960/590/small/abstract-watercolor-texture-wallpaper-background-free-vector.jpg" alt="" />
        <Avatar className='sidebar__avatar' src={user?.profileUrl}>{user?.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>who viewed you</p>
          <p className="sidebar__statNumber">
            2,344
          </p>
        </div>
         <div className="sidebar__stat">
           <p>views on post</p>
           <p className="sidebar__statNumber">
            2,344
          </p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>recent</p>
        {recentItems('react.js')}
        {recentItems('programing')}
        {recentItems('softwareenginering')}
        {recentItems('design')}
        {recentItems('developers')}

      </div>
    </div>
  )
}

export default Sidebar
