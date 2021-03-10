import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
constructor(props){
super(props);
this.state={
    cursor:'',
    backgroundColor :'',
    marginTop:'',
    todoList:[
        {
            name:'BN234',
            age : 24,
            address: 'Da Nang',
            isDone: false
        },
        {
            name:'BN574',
            age : 76,
            address: 'Ha Noi',
            isDone: false
        },
        {
            name:'BN888',
            age : 80,
            address: 'TPHCM',
            isDone: false
        }
    ]
}
}
btap= (index)=>{
    const {todoList}=this.state;
    todoList[index].isDone = !todoList[index].isDone ;
    this.setState({
        todoList:todoList
    })
    
}


render(){
    return <div style={{textAlign:'center', marginTop:'30px'}}>
        <h2>Thông Tin Bệnh Nhân</h2>
        {
            this.state.todoList.map((value,index) =>{
                return <div
                style={{backgroundColor:value.isDone ? 'yellow' : '',cursor:value.isDone ? 'pointer':'',marginTop:value.isDone ? '30px':''}}
                onClick={()=>this.btap(index )}
                >{value.name}--Tuổi:{value.age}--Địa Chỉ:{value.address}</div>
            })
           
            
        }
    </div>
}

}



export default App;
