import React ,{Component}from 'react';
import Header from '../../components/headers';
import {connect} from 'react-redux';
import axios from 'axios';

class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Header/>
                <div onClick={()=>{alert()}}>{this.props.arry}</div>
            </div>
        )
    }
    componentDidMount(){

    }
};
const mapstate=state=>{
    console.log(state);
    return ({
        arry:state.arry
    })
};
export default connect(mapstate,null)(Home);
