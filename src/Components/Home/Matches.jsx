import React from 'react';
import Card from 'terra-card';
import Spacer from 'terra-spacer';
import ActionHeader from 'terra-action-header'
import Profile from '../Profile/Profile'

function Matches(){
    return(
        <Spacer paddingTop="medium" paddingLeft="medium" paddingRight="medium">
          <Card variant="raised" style={{width: "1500px", marginLeft: "auto", marginRight: "auto"}}>
              <ActionHeader title="Your Matches"/>
              <Spacer paddingTop="medium" paddingLeft="medium" paddingRight="medium" paddingBottom="medium">
                <Profile />
                <Profile />
                <Profile />
                <Profile />
                <Profile />
              </Spacer>
          </Card>
        </Spacer>
    );
}

export default Matches;
