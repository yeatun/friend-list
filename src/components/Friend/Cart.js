import React from 'react';

const Cart = (props) => {
    const friendAdd = props.friendAdd;
    let totalSalary = 0;
    for (let i = 0; i < friendAdd.length; i++) {
        const element = friendAdd[i];
        totalSalary=totalSalary + element.salary;
        
    } 
    return (
        <div>
            <h1>salary:${totalSalary}</h1>
        </div>
    );
};

export default Cart;