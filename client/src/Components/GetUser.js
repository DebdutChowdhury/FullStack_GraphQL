import { useQuery } from '@apollo/client'
import React, {useState, useEffect} from 'react'
import {LOAD_USERS} from "../GraphQL/Queries"
import './GetUser.scss'

export default function GetUser() {
    const {error, loading, data} = useQuery(LOAD_USERS)
    const [users, setUsers] = useState([])
    useEffect(()=>{
        if(data){
            setUsers(data.getAllUsers)
            console.log(data.getAllUsers);
        }
    },[data])
    return (
        <div className="fulldiv">
            <div className="centerDiv">
                {users.map((value)=>{
                    console.log(value);
                    return (
                        <>
                            <div>
                                {value.id}
                                {value.firstName}
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}
