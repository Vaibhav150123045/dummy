import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Container, Header as Title } from 'semantic-ui-react'
import Card from '../../components/Card'

const Home = () => {
    return(
        <div>
            <Header/>
            <div style={{padding: '0px 50px 50px 50px'}}>
            <Container fluid>
                <Title size="large">
                    Most Popular Listings
                </Title>
                <Card times={6}/>                
                <Title size="large">
                    All Listings
                </Title>
                <Card times={12}/>                
            </Container>
            </div>
            <Footer/>


        </div>
    )
}

export default Home 