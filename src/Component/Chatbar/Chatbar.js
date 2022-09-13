import React, { useState } from 'react'
import './Chatbar.css'
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MessageIcon from "@mui/icons-material/Message";
import axios from 'axios'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from '@mui/icons-material/Search';
import ThreePIcon from "@mui/icons-material/ThreeP";
import Avatar from '@mui/material/Avatar';
function Chatbar(props) {
  const[textvalue,settextvalue]=useState("");
  console.log(props.messages);
 function sendmessage(e)
 {
    e.preventDefault();
    // console.log(textvalue);
    axios.post("http://localhost:7000/api/message", {
      name: "Navneet",
      messagesent:textvalue,
      received:false
    })
    .then((response) => {
      console.log(response);
    });
    settextvalue("");

 }
 var audio =new Audio('ting.mp3')
  return (
    <div className='chatbar_container'>
        <div className="icons_working1">
        <div className="avatarpart1">
            
        <Avatar alt="Navneet" src={"nelson.jpg"} />
         <div className='roomname'>Room Name
         <br/>Last Seen At {new Date().toUTCString()} </div>
        </div>
        <div className="iconpart1">
          <SearchIcon fontSize="large" />
          <AttachFileIcon fontSize="large" />
          <MoreVertIcon fontSize="large" />
        </div>
      </div>
      <br/>
      <div className='messagebox'>
        {props.messages.map((element)=>
        {
          if(element.received==="true")
          {
            console.log(element.received);
           
          }
          return(
          <div className={element.received? "message-left" :"message-right"}> {element.name}:{element.messagesent} <span style={{"fontSize":"8px"}}>{element.timestamp}</span></div>
        )})}
    {/* <div className="message-left"> Navneet:Hello World <span style={{"fontSize":"8px"}}>{new Date().toUTCString()}</span></div>
   <div className="message-right"> Nishant:Connected in the Go <span style={{"fontSize":"8px"}}>{new Date().toUTCString()}</span></div>
   <div className="message-left"> Navneet:Hello World <span style={{"fontSize":"8px"}}>{new Date().toUTCString()}</span></div>
   <div className="message-right"> Nishant:Connected in the Go <span style={{"fontSize":"8px"}}>{new Date().toUTCString()}</span></div>
   <div className="message-right"> Nishant:Connected in the Go <span style={{"fontSize":"8px"}}>{new Date().toUTCString()}</span></div>
   <div className="message-left"> Navneet:Hello World <span style={{"fontSize":"8px"}}>{new Date().toUTCString()}</span></div>
   <div className="message-right"> Nishant:Connected in the Go <span style={{"fontSize":"8px"}}>{new Date().toUTCString()}</span></div>
   <div className="message-left"> Navneet:Hello World <span style={{"fontSize":"8px"}}>{new Date().toUTCString()}</span></div> */}

      </div>
      <div className='sendmessagebox'>
      <input type="text" class="messagesend" id="messagesendid" value={textvalue} onChange={(event)=>
      {
        event.preventDefault();
        settextvalue(event.target.value)
      }}/>
    <button class="buttonsend" id="buttonsendid" onClick={sendmessage}>Send</button>
    </div>
    </div>
  )
}

export default Chatbar