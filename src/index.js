import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {CardList} from './components/card-list/card-list.component';
import {SearchForm} from './components/search-box/search.component';

import './app.css';


class App extends Component{
    constructor(props) {
        super(props);
        this.state = { monsters: [],
        searchName: ''};
    }
     userData = async() =>{
        let userInfo = await axios.get('https://jsonplaceholder.typicode.com/users');
        return userInfo.data;
    }

    handleChange = (event) =>{
       event.preventDefault();

    }

    componentDidMount() {

        this.userData().then(data => this.setState({monsters: data}))
            .catch(err => { console.log("Error"+ err.message())});
    }

    render() {
       const {monsters, searchName} = this.state;
       const filteredMonsters = monsters.filter(monster =>
           monster.name.toLowerCase().includes(searchName.toLowerCase())
       );
            return (
                <div className='App'>
                    <SearchForm placeholder='search users' handleChange={e => this.setState({searchName: e.target.value})}/>
             <CardList monsters={filteredMonsters} />
            </div>
            );
        }
}

ReactDOM.render(<App />,document.getElementById('root'));