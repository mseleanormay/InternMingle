import React from 'react';
import logo from '../logo.png';
import Image from 'terra-image';
import Matches from './Matches';
import Explore from './Explore';
import Text from 'terra-text';
import Avatar from 'terra-avatar';
import Card from 'terra-card';
import pic from './pic.jpeg'
 
const Home = () => {
    return (
       <div>
           <div style={{float:'left', paddingTop: "20px"}}>
            <Image src={logo} alt="image" isFluid style={{height: "150px", width: "500px"}}/>
          </div>
          <div style={{float:'left', paddingLeft: "900px", paddingTop: "30px", paddingBottom: "55px"}}>
            <div style={{textAlign: "center", paddingTop: "10px"}}>
                <Card>
                    <div style={{paddingLeft: "10px", paddingTop: "10px", paddingBottom: "10px", paddingRight: "10px"}}>
                          <Avatar alt="User" image={pic} size="1.5em" initials="JS"/>
                            <Text fontSize={24} weight={400} style={{paddingLeft: "10px"}}>John Doe</Text>
                    </div>
                </Card>   
            </div>
          </div>
          <Matches />
          <Explore />    
       </div>
    );
}

export default Home;
