import React,{useEffect,useState} from "react";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MessageIcon from "@mui/icons-material/Message";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import "./Sidebar.css";
import db from '../../firebase';
import { getDocs, collection } from "firebase/firestore";
import Sidebarchat from "./Sidebarchat";


function Sidebar() {
  const [rooms, setrooms] = useState([]);
  const [lastmessage,setlastmessage]=useState([])
  async function getdata () {
      let finalresult=[];
      let finalresultmessage=[];
      console.log("Pre list",finalresult)
      const querySnapshot = await getDocs(collection(db, "rooms"));
       querySnapshot.forEach(async (doc) => {
      finalresult.push(doc.data());
      const querySnapshotformessage = await getDocs(collection(db, "rooms",doc.id, "message"));
      querySnapshotformessage.forEach((doc) => {
          // console.log("message",doc.data())
     finalresultmessage.push(doc.data()[0]);
     });
      });
      setrooms(finalresult)
      setlastmessage(finalresultmessage)
      console.log(finalresult)
      
    }
    let k=0
  useEffect(()=>
  {
    getdata()
   
  },[])

  return (
    <div className="sidebar_container">
      <div className="icons_working">
        <div className="avatarpart">
          {/* <ThreePIcon fontSize="large" /> */}
          <Avatar alt="navneet" src="./nelson.jpg" />
        </div>
        <div className="iconpart">
          <DonutLargeIcon fontSize="large" />
          <MessageIcon fontSize="large" />
          <MoreVertIcon fontSize="large" />
        </div>
      </div>
      <div className="search_part" fontSize="large">
        {" "}
<SearchIcon className="searchicon"/>
        <input
          type="text"
          placeholder="Search or Start New Chat"
          className="inputsearch"
        />
      </div>
      <div className="chat_room"> 
      {/* <h2> Add new Chat</h2> */}

      <div className="sidebar_chats">
                {/* <Sidebarchat addNewChat/> */}
          
                {
                   
                rooms.map(room =>
                  (
                  
                    <Sidebarchat key={room.id} name = {room.name} />

                )
               )}
                
            </div>
        
      </div>
     
    </div>
  );
}

export default Sidebar;














 {/* <Sidebarchat name="Navneet" message="Open The Portal"/>
         <Sidebarchat name="Nishant" message="Exam Dene gaye hai"/>
         <Sidebarchat name="Papa" message="Paisa Aya"/>
         <Sidebarchat name="Mummy" message="khana kha liya"/>
         <Sidebarchat name="Papa" message="Paisa Aya"/>
         <Sidebarchat name="Navneet" message="Open The Portal"/>
         <Sidebarchat name="Nishant" message="Exam Dene gaye hai"/>
         <Sidebarchat name="Papa" message="Paisa Aya"/>
         <Sidebarchat name="Mummy" message="khana kha liya"/>
         <Sidebarchat name="Papa" message="Paisa Aya"/> */}