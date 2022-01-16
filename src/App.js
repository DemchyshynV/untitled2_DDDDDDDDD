import Form from "./components/Form/Form";
import Users from "./components/Users/Users";
import {useEffect, useState} from "react";
import {userService} from "./services/user.service";

const App = () => {
    const [filtered, setFiltered] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        userService.getAll().then(value => {
            setUsers([...value])
            setFiltered([...value])
        })
    },[])

    const getObj = (data) => {
      let filter = [...users]

        if (data.name){
            filter = filter.filter(value => value.name.toLowerCase().includes(data.name.toLowerCase()))
        }

        if (data.username){
            filter = filter.filter(value => value.username.toLowerCase().includes(data.username.toLowerCase()))
        }

        if (data.email){
            filter = filter.filter(value => value.email.toLowerCase().includes(data.email.toLowerCase()))
        }
        setFiltered(filter)
    }

    return (
        <div>
            <Form getObj={getObj}/>
            <Users filtered={filtered}/>
        </div>
    );
};

export default App;
