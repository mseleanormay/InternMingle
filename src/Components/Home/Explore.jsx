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
    // const [result, setResult]=useState([])
    // useEffect(() => {
    //     fetch("https://internmingle-be.herokuapp.com/user/getUser")
    //       .then(res => console.log(res))
    //       .then(
    //         (response) => {
    //             // console.log(result)
    //           setResult(response);
           
    //         },
    //         // Note: it's important to handle errors here
    //         // instead of a catch() block so that we don't swallow
    //         // exceptions from actual bugs in components.
    //         (error) => {
            
    //         }
    //       )
    //   }, [])

    //   const personArr = result.map( person => {
    //     return <Profile person={person}/>
    // })
    const sportsOnChange = () => {
        const temp1 = document.getElementById('p3');
        const temp2 = document.getElementById('p4');
        const temp3 = document.getElementById('p2');
        const temp4 = document.getElementById('p1');
        if(temp1.style.display == "none"){
            temp1.style.display = "block";
            temp2.style.display = "block";
            temp3.style.display = "block";
            temp4.style.display = "block";
        } else {
            temp1.style.display = "none";
            temp2.style.display = "none";
            temp3.style.display = "none";
            temp4.style.display = "none";
        }
    }

    const rubyOnChange = () => {
        const temp1 = document.getElementById('p3');
        const temp2 = document.getElementById('p4');
        const temp3 = document.getElementById('p5');
        if(temp1.style.display == "none"){
            temp1.style.display = "block";
            temp2.style.display = "block";
            temp3.style.display = "block";
        } else {
            temp1.style.display = "none";
            temp2.style.display = "none";
            temp3.style.display = "none";
        }
    }

    const KUOnChange = () => {

        const temp1 = document.getElementById('p3');
        const temp2 = document.getElementById('p4');
        const temp3 = document.getElementById('p5');
        const temp4 = document.getElementById('p1');
        if(temp1.style.display == "none"){
            temp1.style.display = "block";
            temp2.style.display = "block";
            temp3.style.display = "block";
            temp4.style.display = "block";
        } else {
            temp1.style.display = "none";
            temp2.style.display = "none";
            temp3.style.display = "none";
            temp4.style.display = "none";
        }
    }

    return(
        <Spacer paddingTop="medium" paddingLeft="medium" paddingRight="medium">
            <Card variant="raised" style={{height:"1000px", width: "1500px", marginLeft: "auto", marginRight: "auto"}}>
                <ActionHeader title="Explore"/>
                <Spacer paddingTop="medium" paddingLeft="medium" paddingRight="medium" paddingBottom="medium">
                    <div style={{borderRight: '1px solid', width: '200px', float: 'left'}} >
                        <Checkbox id="first" labelText="Sports" onChange={sportsOnChange}/>
                        <Checkbox id="second" labelText="Ruby" onChange={rubyOnChange}/>
                        <Checkbox id="third" labelText="University of Kansas" onChange={KUOnChange}/>
                    </div>
                    <div style={{float:'left', paddingLeft: '20px', width: "1200px"}}>
                        <Profile />
                    </div>
                </Spacer>
            </Card>
        </Spacer>
    );
}

export default Explore;