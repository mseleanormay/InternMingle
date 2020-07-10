import React from 'react';
import Card from 'terra-card';
import Spacer from 'terra-spacer';
import ActionHeader from 'terra-action-header'
import Checkbox from 'terra-form-checkbox';
import Profile from '../Profile/Profile';
import {useState, useEffect} from 'react'
function Explore(){

    //const [ppl, setPpl]=useState
    //fetch function
    const [result, setResult]=useState([])
    useEffect(() => {
        fetch("https://internmingle-be.herokuapp.com/user/getUser")
          .then(res => res.json())
          .then(
            (response) => {
              setResult(response);
           
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
            
            }
          )
      }, [])

      console.log(result)
    return(
        <Spacer paddingTop="medium" paddingLeft="medium" paddingRight="medium">
            <Card variant="raised" style={{width: "1500px", marginLeft: "auto", marginRight: "auto"}}>
                <ActionHeader title="Explore"/>
                <Spacer paddingTop="medium" paddingLeft="medium" paddingRight="medium" paddingBottom="medium">
                    <div style={{borderRight: '1px solid', width: '200px', float: 'left'}} >
                        <Checkbox id="first" labelText="First Checkbox" />
                        <Checkbox id="second" labelText="Second Checkbox" />
                        <Checkbox id="third" labelText="Third Checkbox" />
                    </div>
                    <div style={{float:'left', paddingLeft: '20px', width: "1200px"}}>
                        {/* {response.map(x=>{
                            <
                        })} */}
                        <Profile />
                        <Profile />
                        <Profile />
                        <Profile />
                        <Profile />
                    </div>
                </Spacer>
            </Card>
        </Spacer>
    );
}

export default Explore;