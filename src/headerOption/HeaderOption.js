import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import './HeaderOption.css'

function HeaderOption({Icon,text,avatar,onClick}) {
  const user=useSelector(selectUser)
  return (
    <div onClick={onClick} className='headerOption'>
        {Icon && <Icon className="headerOption__icon"/>}
        {avatar && (
            <Avatar className='headerOption__icon' src={user?.profileUrl}>
              {user?.email[0]}
            </Avatar>
        )}
        <h3 className='headerOption__title'>{text}</h3>
    </div>
  )
}

export default HeaderOption
