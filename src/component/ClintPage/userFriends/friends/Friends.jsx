import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

function Friends() {
    const [users,setUsers] = useState([]);

    const dispatch =  useDispatch();

    useEffect(()=>{
        dispatch({
            type: 'getRandomUser'
        })
    },[])

    const randomUser = useSelector((store)=>{
        return store.fetchRandomUsers.fetchRandomUser;
    })

    useEffect(()=>{
        setUsers(randomUser);
    },[randomUser])

    console.log(users)

    return (
        <div>
            <h3>Now we have {users.length} users</h3>
            <div id='users'>
                {
                    users.map((elem,index)=>{
                        return(
                            <div key={index}>
                                <img src={elem.picture.large}/>
                                <h5>{elem.name.first} {elem.name.last}</h5>
                                <p>{elem.dob.age} years old</p>
                                <button>Add</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Friends;