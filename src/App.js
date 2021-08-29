import React, { Component } from 'react'
import {Card} from 'react-bootstrap'
import './App.css'

class App extends Component {
  

  state={
    person: {
    fullName:"Oumayma Abdelli",
    bio:"Les gagnants trouvent des moyens, les perdants des excuses",
    imgSrc:"./ouou.jpg",
    profession:"Full stack Js developer",
  },show:false,
    time: 0,
};
componentDidMount() {
  this.myInterval = setInterval(() => {
    this.setState({
      time: this.state.time + 1,
    });
  }, 1000);
}
componentWillUnmount(){
  clearInterval(setInterval)
}
  render() {
    return (
      
  <div className='App' style={{backgroundImage:`url("https://th.bing.com/th/id/OIP.ktx8R5LKdsxpmQJQFSComwHaF1?pid=ImgDet&rs=1")`}}>

      {this.state.show === true ? ( 
        <Card className='cardd' style={{ width: '16rem', height:'25rem'}}>
        <Card.Img variant="top" src={this.state.person.imgSrc} alt='' height='200px' width='80px' style={{borderRadius:'200px', border:'1px brown solid'}} />
         <Card.Body>
         <Card.Title className='titre'>{this.state.person.fullName}</Card.Title>
        <Card.Text className='bioo'>
        {this.state.person.bio}
       </Card.Text>
   <Card.Text className='prof'>
     {this.state.person.profession}
   </Card.Text>
 </Card.Body>
 <div >
          <p style={{fontSize:'14px',fontFamily: 'Times New Roman'}}> Count: {this.state.time}</p>
        </div>
 </Card> 

      ): (
        " "
      )}
         
         
         <div>
           <button 
            id='btnn'
            onClick={() => this.setState({ show: !this.show })}>ClickMe


           </button>
         </div>
</div>
        );
  }
}
export default App;