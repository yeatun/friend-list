import './App.css';
import { useEffect, useState } from 'react';
import friendListData from './data/data.json';
import Friends from './components/Friends/Friends';
import Cart from './components/Friend/Cart';


function App() {
  const [friendList,setFriendList] =useState([]);
  const [friendAdd,setFriendAdd] = useState([]);

  useEffect(()=>{
    setFriendList(friendListData);
   
  },[])
  const handleClick= (friend) => {
    const newFriend = [...friendAdd,friend];
    setFriendAdd(newFriend)
  }
  
  
  return (
    <div className ='app' style={{textAlign:'center',}}>
      <h1>total friend:{friendList.length}</h1>
      <h4>friend added:{friendAdd.length}</h4>
      <Cart friendAdd={friendAdd}></Cart>
        <ul>
          {
            friendList.map(friend => <Friends friendList={friend} handleClick={handleClick} ></Friends>)
          }
        </ul>
    </div>
  );
}

export default App;
