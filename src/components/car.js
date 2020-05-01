import React, { useState } from 'react';
import ReactDOM from "react-dom";
import axios from 'axios';
import {Form} from "react-bootstrap";
import {Card} from "react-bootstrap";

class UserForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userName: ''
        };
    }

    handleUserName = (event) =>{
        event.preventDefault();
        this.setState({userName: event.target.value})
    }
    getNewUserData = (event) => {
        event.preventDefault();

        let userInfo= (async () => {
            let userData= await axios.get(`https://api.github.com/users/ty`);
            this.props.onAdd(userData.data);

        })();
        this.setState({userName: ''});
        return userInfo;
    }
    removeUserData(event) {
        event.preventDefault();
        this.props.onRemove();
    }


    render() {
        return (
            <form >
                <div className="form-group">
                    <label htmlFor="usr">Search User Name:</label>
                    <input type="search" className="form-control" value={this.state.userName}
                           onChange={this.handleUserName}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.getNewUserData}> Add </button>
                <button type="submit" className="btn btn-danger" onClick={this.removeUserData}> Remove </button>
            </form>
        );
    }
}

class CardList extends React.Component{

    render() {

        return (
            <div>
                <h1>This is List of Users</h1>
                {this.props.profiles.map(profile => <MyCard {...profile} key={profile.id} />)}
            </div>

        );
    }

}


class MyCard extends React.Component{
    render() {
        const profile = this.props.profile;
        return (
            <div className = "card" style = {{width:'400px'}} key={profile.id}>
                <img
                    className = "card-img-top"
                    src={profile.avatar_url}
                    alt = "Card image" />
                <div  className = "card-body" >
                    < h4 className = "card-title" > John Doe </h4>
                    <p className="card-text">{profile.login}</p>
                    <a href = "#" className = "btn btn-primary" > See Profile </a>
                </div>
            </div>
        );
    }
}

function App(){
    let [userInfo, setUserInfo] = useState( []);
    const addUserInfo = newUserInfo => setUserInfo([...userInfo, newUserInfo]);
    const removeUserInfo = (index) =>{
        setUserInfo([...userInfo.slice(0,index),...userInfo.slice(index + 1)])
    }
    return (
        <div>
            <h1>Hello Cool APP Designer</h1>
            <UserForm onAdd={addUserInfo} onRemove={removeUserInfo}/>
            <CardList profiles={userInfo}/>

        </div>

    );

}

ReactDOM.render(<App />,document.getElementById('root'))