import React ,{Component}from 'react';
import {connect} from 'react-redux';
import {bindActionCreators } from 'redux';
import * as homeActions from './store/actions';
class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div onClick={()=>{alert()}}>{this.props.arry}</div>
                {this.renderlist()}
                {/*函数是要执行的*/}
            </div>
        )
    }
    componentDidMount(){
        debugger;
        console.log(this.props.homelist,'88888888888');
        if(!this.props.homelist.length){
            this.props.listLoadDate();
        }
    }
    renderlist(){
        let {homelist}=this.props;
        return homelist.map(item=> <div key={item.id}>{item.content}</div>);
    }
};
Home.loadData=function(store){
    return store.dispatch(homeActions.serverlistLoadDate()); //这里专门怎加了一个服务端的方法
};
const mapstate=state=>{
    return ({
        homelist:state.home.arry
    })
};
export default connect(mapstate,dispatch => bindActionCreators( {...homeActions}, dispatch ))(Home);
