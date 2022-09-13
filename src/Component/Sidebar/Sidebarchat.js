import React,{useState,useEffect} from 'react'
import './Sidebarchat.css'
import Avatar from '@mui/material/Avatar';
function Sidebarchat({addNewChat, id, name,message}) {
  const [seed, setseed] = useState("")
  useEffect(()=>{
      setseed(Math.floor(Math.random()*5000))
  },[]);
  return (
    <div className='sidebarchatcontainer'>
    <div>
    <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat_info">
                <h2>{name}</h2>
                <p>Last Message</p>
            </div>
        </div>
        {/* <div className='lastmessage'>
            
        </div> */}
        </div>
    </div>
  )
}

export default Sidebarchat