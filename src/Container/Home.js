import React,{useEffect, useState} from 'react'
import './Home.css'
import Pusher from 'pusher-js'
import Sidebar from '../Component/Sidebar/Sidebar'
import Chatbar from '../Component/Chatbar/Chatbar'
import axios from 'axios'

function Home() {
  const [previousmessages,setpreviousmessages]=useState([]);
  useEffect(()=>
  {
    axios
    .get("http://localhost:7000/api/message/sync")
    .then( (response)=> {
      // console.log(response.data.Message);
      setpreviousmessages(response.data.Message)
    });
  },[])
  useEffect(() => {
    const pusher = new Pusher('70994d9d1ff12be93d74', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data)=> {
      // alert(JSON.stringify(data));
      setpreviousmessages([...previousmessages,data]);
      // console.log(previousmessages);
    });
    //cleanup function
    return ()=>
    {
      channel.unbind_all();
      channel.unsubscribe();

    }
  }, [previousmessages])
  
  return (
    <div className='mainbody'>
    <Sidebar/>
    <Chatbar messages={previousmessages}/>
    </div>
  )
}

export default Home