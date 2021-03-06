import React from 'react'
import { Form, Message, Button, Checkbox, Header ,Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import './style.css'
import loginMutation from '../../queries/loginMutation'
import img from './logo.svg'

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '', password: '', px:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    handleChange(event) {
        let name, value
        name = event.target.name 
        value = event.target.value
        this.setState({
            [name]: value
        })
        // console.log(this.state)
    }

    async onSubmit(event) {
        let email, password
        email = this.state.email
        password = this.state.password
        event.preventDefault()
        // console.log({email, password })
        let pop 
        pop = await this.props.mutate({
            variables: {email, password}
        })
        this.setState({ px: pop.data.login})
        // console.log(this.state)
        localStorage.setItem('lenshood-token', this.state.px )
        if(this.state.px !== null){
            this.props.history.push('/')
        }
    }

    componentWillMount(){
        localStorage.removeItem('lenshood-token')
    }

    render() {
        return (
            <div className="container">
            <div className="content">
            <Header as='h2' icon textAlign='center'>
                {/* <Icon circular > {img} </Icon> */}
                <Image src={img}/>
                <Header.Content>Lenshood</Header.Content>
            </Header>
            <Form >
                <Form.Field >
                <label>Email </label>
                <input placeholder='someone@example.com' name="email" value={this.state.email} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                <label>Password</label>
                <input placeholder='password' type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                </Form.Field>
                <Form.Field>
                <Checkbox label='Remember Me' />
                </Form.Field>
                {/* <Link to="/"> */}
                <Button primary fluid onClick={this.onSubmit} >Login</Button>
                {/* </Link> */}
                <Message color="grey">
                    New to us ->> <Link to="/signup"> <Button color="black"  > Sign Up </Button></Link>
                </Message>
            </Form>
            </div>
            </div>
        )
    }
}

export default graphql(loginMutation)(Login)


