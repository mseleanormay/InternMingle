import React from 'react';
import InputField from 'terra-form-input/lib/InputField';
import Checkbox from 'terra-form-checkbox';
import Card from 'terra-card';
import ActionFooter from 'terra-action-footer';
import ActionHeader from 'terra-action-header';
import Button from 'terra-button';
import Home from '../Home/Home';
import Spacer from 'terra-spacer';

const SignUp = () => {
    return (
       <div style={{paddingTop:"10px", paddingBottom:"10px"}}>
         <Card style={{width: "1000px", marginLeft: "auto", marginRight: "auto"}}>
            
          <ActionHeader title="Create a Profile"/>
          <Spacer paddingLeft="medium" paddingRight="medium" paddingTop="medium" paddingBottom="medium">
          <InputField
          label="Name"
            inputId="profile-name"
            type="text"
            placeholder="First and Last Name"
            inputAttrs={{
               name: 'profile',
            }}
         />

          <InputField
          label="Biography"
            type="text"
            placeholder="Bio"
         />
 
         <h3>Position at Cerner:</h3>
         <div>
            <Checkbox id="first" labelText="Intern/Apprentice" />
            <Checkbox id="second" labelText="New Hire" />
            <Checkbox id="third" labelText="Full-time Associate" />
         </div>

         <h3>Favorite Programming Language:</h3>
         <div>
            <div>
            <Checkbox id="first" labelText="C" />
            <Checkbox id="second" labelText="C++" />
            <Checkbox id="third" labelText="C#" />
            <Checkbox id="fourth" labelText="Python" />
            <Checkbox id="fifth" labelText="Java" />
            <Checkbox id="sixth" labelText="JavaScript" />
            <Checkbox id="seventh" labelText="Ruby" />
            </div>
            <InputField
            label="Other"
            type="text"
            placeholder="Other"
         />
         </div>
  
         <h3>University:</h3>
         <div>
            <div>
            <Checkbox id="first" labelText="University of Missouri - Kansas City" />
            <Checkbox id="second" labelText="University of Missouri - Columbia" />
            <Checkbox id="third" labelText="Missouri University of Science and Technology" />
            <Checkbox id="fourth" labelText="University of Kansas" />
            <Checkbox id="fifth" labelText="Kansas State University" />
            <Checkbox id="sixth" labelText="Truman State University" />
            <Checkbox id="seventh" labelText="University of Arkansas" />
            <Checkbox id="eighth" labelText="University of Central Missouri" />
            </div>
            <InputField
            label="Other"
            type="text"
            placeholder="Other"
         />
         </div>
 
         <h3>Reigon/Hometown:</h3>
         <div>
            <div>
            <Checkbox id="first" labelText="Kansas City Area" />
            <Checkbox id="second" labelText="St. Louis Area" />
            <Checkbox id="third" labelText="Missouri" />
            <Checkbox id="fourth" labelText="Kansas" />
            <Checkbox id="fifth" labelText="Arkansas" />
            <Checkbox id="sixth" labelText="Iowa" />
            <Checkbox id="seventh" labelText="Illinois" />
            </div>
            <InputField
            label="Other"
            type="text"
            placeholder="Other"
         />
         </div>
 
         <h3>Hobbies/Interests:</h3>
         <div>
            <div>
            <Checkbox id="first" labelText="Video Games" />
            <Checkbox id="second" labelText="Music" />
            <Checkbox id="third" labelText="Photography" />
            <Checkbox id="fourth" labelText="Sports" />
            <Checkbox id="fifth" labelText="Cooking/Baking" />
            <Checkbox id="sixth" labelText="Reading" />
            <Checkbox id="seventh" labelText="Fitness" />
            <Checkbox id="eighth" labelText="TV Shows/Movies" />
            <Checkbox id="eighth" labelText="Drawing/Painting" />
            </div>
            <InputField
            label="Other"
            type="text"
            placeholder="Other"
         />
         </div>

         <h3>Seeking:</h3>
         <div>
            <div>
            <Checkbox id="first" labelText="Networking Opportunities" />
            <Checkbox id="second" labelText="Mentorship" />
            <Checkbox id="third" labelText="Professional Advice" />
            <Checkbox id="fourth" labelText="Friendship" />
            </div>
            <InputField
            label="Other"
            type="text"
            placeholder="Other"
         />
         </div>
         </Spacer>
         <ActionFooter 
            start={<Button text="Submit" variant="emphasis" onClick={()=>{
               const temp = document.getElementById('homepage');
         temp.style.display = "block";
         const temp2 = document.getElementById('createprofile');
         temp2.style.display = "none";
         
         }}/>}
         />
         
         </Card>
         
       </div>
    );
}

export default SignUp;
