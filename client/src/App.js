import logo from './logo.svg';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from '@apollo/client'
import GetUser from './Components/GetUser';
import { onError } from '@apollo/client/link/error'
import Form from './Components/Form';

const errorLink = onError(({graphqlErrors, networkError})=>{
  if(graphqlErrors){
    graphqlErrors.map(({message, location, path})=>{
      alert(`Graphql Error!! ${message}`)
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({uri:"http://localhost:8080/graphql"})
])

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache
})

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <GetUser/> */}
      <Form/>
    </ApolloProvider>
  );
}

export default App;
