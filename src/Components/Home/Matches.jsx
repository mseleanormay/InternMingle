import React from 'react';
import Card from 'terra-card';
import Spacer from 'terra-spacer';
import ActionHeader from 'terra-action-header'
import Profile from '../Profile/Profile'
import Tag from 'terra-tag'
import pic1 from '../Profile/pic1.jpg'
import pic4 from '../Profile/pic4.jpg'
import Text from 'terra-text'
import Avatar from 'terra-avatar'

function Matches(){
    return(
        <Spacer paddingTop="medium" paddingLeft="medium" paddingRight="medium">
          <Card variant="raised" style={{width: "1500px", marginLeft: "auto", marginRight: "auto"}}>
              <ActionHeader title="Your Matches"/>
              <Spacer paddingTop="medium" paddingLeft="medium" paddingRight="medium" paddingBottom="medium">
              <div>
        <div style={{float: 'left', paddingLeft: "30px", paddingBottom: "20px", paddingTop: "20px"}}>
            <Card style={{width: "250px", height: "270px"}}>
                <div style={{textAlign: "center", paddingTop: "10px"}}>
                    <div>
                        <Avatar alt="User" image={pic1} size="1.5em" initials="JS"/>
                    </div>
                    <div>
                        <Text fontSize={18} weight={400}>Adam Archer</Text>
                    </div>
                    <div>
                        <Text fontSize={12} weight={300}>Intern</Text>
                    </div>
                    <div style={{paddingBottom: "20px", paddingTop: "20px"}}>
                        <Tag text="University of Arkansas" />
                        <Tag text="Video Games" />
                        <Tag text="Ruby" />
                        <Tag text="C#" />
                    </div>
                </div>
            </Card>
        </div>
        <div style={{float: 'left', paddingLeft: "30px", paddingBottom: "20px", paddingTop: "20px"}}>
<Card style={{width: "250px", height: "270px"}}>
    <div style={{textAlign: "center", paddingTop: "10px"}}>
        <div>
            <Avatar alt="User" image={pic4} size="1.5em" initials="JS"/>
        </div>
        <div>
            <Text fontSize={18} weight={400}>John Johnson</Text>
        </div>
        <div>
            <Text fontSize={12} weight={300}>Intern</Text>
        </div>
        <div style={{paddingBottom: "20px", paddingTop: "20px"}}>
            <Tag text="Video Games" />
            <Tag text="Kansas State University" />
            <Tag text="Reading" />
            <Tag text="JavaScript" />
        </div>
    </div>
</Card>
</div>


        </div>
              </Spacer>
          </Card>
        </Spacer>
    );
}

export default Matches;
