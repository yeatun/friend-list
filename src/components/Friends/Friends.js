import React from 'react';

const Friends = (props) => {
    const {name,email,image} =props.friendList;
  const handleClick = props.handleClick;
     
    const imageStyle ={
        height: '50px',
    }
    const friendStyle ={
        border :"1px solid red",
        margin : "10px",
        padding : "10px",
    }
    return (
        <div style={friendStyle}>
            
            <img style={imageStyle} src={image} alt=""/>
            <h3>{name}</h3>
            <p><b>email:</b> {email}</p>
            <button onClick={ ()=>handleClick(props.friendList)}>friend added</button>
        </div>
    );
};

export default Friends;