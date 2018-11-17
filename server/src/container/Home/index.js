import React ,{Component}from 'react';
import Header from '../../components/headers';
class Home extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div onClick={()=>{alert()}}>this11122115</div>
            </div>
        )
    }
}
export default Home;
