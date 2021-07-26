import { useMutation } from '@apollo/client'
import React, {useState} from 'react'
import {CREATE_USERS} from '../GraphQL/Mutations'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function Form() {
    const classes = useStyles()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [createUser, {error}] = useMutation(CREATE_USERS)

    const addUser = () => {
        createUser({
            variables: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            }
        })
        if(error){
            console.log(error);
        }
    }
    return (
        <div>
            <form className={classes.root}>
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    placeholder="First Name"
                    type="text"
                    onChange={(e)=>{
                        setFirstName(e.target.value)
                    }}
                />
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    placeholder="Last Name"
                    type="text"
                    onChange={(e)=>{
                        setLastName(e.target.value)
                    }}
                />
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    placeholder="Email"
                    type="text"
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                />
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    placeholder="Password"
                    type="text"
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                />
            </form>
            <Button 
                onClick={addUser}
            >Create User</Button>
        </div>
    )
}
