import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from '../views/Home'
import LoginForm from '../views/LoginForm'
import SignupForm from '../views/SignupForm'
import Faq from '../views/Faq'
import Blog from '../views/Blog'
import Card from '../components/Card'
import ProductPage from '../views/ProductPage'
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props)=>(
        localStorage.getItem('lenshood-token') ? (< Component {...props}/>) : 
            <Redirect to ="/login"/>    
    )}/>
)


const Routes = () => (
        <Router>
            <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <Route exact path="/login" component={LoginForm} />
                <Route exact path="/signup" component={SignupForm} />
                <Route exact path="/faq" component={Faq} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/product/:id" component={ProductPage}/>
                <Route exact path="/components/card" component={Card}/>

            </Switch>
        </Router>
)

export default Routes
