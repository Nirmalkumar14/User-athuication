import React from "react";
import { Container,Button} from "react-bootstrap";
import "../styles/Home.css"
const Home = () => {

    return(
        
        <Container>
           <h1>Welcome come to our WebSite</h1>
           <p>we Are Here To Serve You</p>
           <Button variant='primary' type='submit'>Get Started</Button> 
        </Container>
    )
}

export default Home