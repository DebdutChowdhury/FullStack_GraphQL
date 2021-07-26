import {gql} from '@apollo/client'

export const CREATE_USERS = gql`
    mutation createUser (
        $firstName: String!
        $lastName: String!
        $email: String!
        $password: String
    ){
        createUser(
            firstName: $firstname
            lastName: $lastname
            email: $email
            password: $password
        ){
            id
        }
    }
`