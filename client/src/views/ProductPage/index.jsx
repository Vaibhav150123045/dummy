import React from 'react'
import { Container, Segment, Header as Title, Grid, Divider, Button } from 'semantic-ui-react'
import Header from '../../components/Header'
import BreadCrumbs from '../../components/BreadCrumbs'
import Carousel from '../../components/Carousel'
import Card,{CardExampleGroupProps,CardOwner} from '../../components/Card'
import SegmentPortable from '../../components/Segment'
import DividerExampleDivider from '../../components/Divider'
import {ContainerExampleContainer, ContainerForPackage, ContainerForReviews} from '../../components/Container'
import {SearchBar,SearchBarReviews} from '../../components/Search'

const ProductTitle = () => (
    <Segment color="teal" inverted>
    <Title>
    Canon E0S 70D DSLR Camera
    </Title>
    </Segment>
)

const ProductDesc = () => (
    <div>
        <div>SPECIDICATIONS OF PRODUCT:</div>
        <CardExampleGroupProps/>
        <Divider/>
        <ContainerExampleContainer/>
        <Divider/>
        <ContainerForPackage/>
        <Divider/>
        <ContainerExampleContainer/>
        <Divider/>
        <ContainerExampleContainer/>
        <Divider/>
        <ContainerForReviews/>
        <Divider/>
    </div>  
)

const ProductBookingOpts = () => (
    <div style={{ padding:'40px'}}>
    <Segment raised padded>
    <Segment><Title><span>&#8377;</span>1200</Title>per day <Title><span>&#8377;</span>400</Title>per week</Segment>
    <Segment vertical><Title>Owner Delivery</Title> Owner to deliver the product directly to you.</Segment>
    <Segment vertical><Title>Dates</Title><SegmentPortable/></Segment>
    <Segment vertical>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.</Segment>
    <Segment vertical><Button primary fluid>Buy Now</Button></Segment>
    <Button inverted>Buy Now</Button>
    </Segment>
    </div>
)

const OwnerDesc = () => (
    <div style={{ padding:'40px'}}>
    
    <Segment raised padded>
    <CardOwner/>
    <Divider/>
    <Segment vertical><Title>Bio</Title> I am a Proffesional photographer and blah blah.....</Segment>
    <Segment vertical><Title>Web Refrences</Title>www.abcdefgh.com  www.abcdefgh.com {"\n"} www.abcdefgh.com</Segment>
    
    </Segment>
    </div>
)

const OtherListings = () => (
    <div style={{padding: '0px 50px 50px 50px'}}>
        <Container fluid>
            <Title size="large">
                Other Listings from Rajeev Khanna
            </Title>
            <Card times={6}/>                
            <Title size="large">
                Frequently rented along with Canon EOS 70D
            </Title>
            <Card times={6}/>                
            </Container>
    </div>
)

const Reviews = () => (
    <div>
        Reviews
    </div>
)

const ProductOwnerDesc = () => (
    <div>
        Camera Owner
    </div>
)

class ProductPage extends React.Component {
    render() {
        return (
            <div>

            <Header/>

            <BreadCrumbs/>

            <Container fluid>
                <ProductTitle/>
                <Grid columns={2}>
                    <Grid.Column width={2}/>
                    <Grid.Column width={9}>
                        <Carousel/>
                        <Divider/>
                        <ProductDesc/>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <ProductBookingOpts/>
                        <OwnerDesc/>
                    </Grid.Column>
                </Grid>
                
                    
            </Container>
            <Container fluid>
                <Grid columns={2}>
                    <Grid.Column width={2}/>
                    <OtherListings/>
                </Grid>
            </Container>
            </div>
        ) 
    }
}

export default ProductPage