import React,{Component} from 'react';
import Header from './components/headers';
import {renderRoutes} from "react-router-config";
import routes from './routers';
class App extends Component{

    render(){
        return(
            <div>
                <Header/>
                {renderRoutes(this.props.route.routes)}
            </div>
        )
    }
};
export default App;