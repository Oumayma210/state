import React, { Component } from 'react'
import {Card} from 'react-bootstrap'
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
      
  <div className='App'>

      {this.state.show === true ? ( 
        <Card style={{ width: '16rem', height:'25rem', backgroundColor:'burlywood', justifyContent: 'center' }}>
        <Card.Img variant="top" src={this.state.person.imgSrc} alt='' height='200px' width='80px' style={{borderRadius:'200px', border:'1px blue solid'}} />
         <Card.Body>
         <Card.Title className='titre' style={{color:'brown',fontSize:'25px',fontFamily: 'Times New Roman'}}>{this.state.person.fullName}</Card.Title>
        <Card.Text className='bioo'style={{fontSize:'16px',fontFamily: 'Times New Roman'}}>
        {this.state.person.bio}
       </Card.Text>
   <Card.Text className='prof' style={{fontSize:'16px',fontFamily: 'Times New Roman'}}>
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
            className='btnn' style={{color:'white', borderRadius:'30px', backgroundColor:'blue', justifyContent:'center'}}
            onClick={() => this.setState({ show: !this.show })}>ClickMe


           </button>
         </div>
</div>
        );
  }
}
export default App;