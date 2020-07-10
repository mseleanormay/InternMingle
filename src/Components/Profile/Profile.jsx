import React from 'react';
import Avatar from 'terra-avatar';
import logo from '../logo.png';
import Card from 'terra-card';
import Text from 'terra-text';
import Tag from 'terra-tag';
import pic1 from './pic1.jpg'
import pic2 from './pic2.jpg'
import pic3 from './pic3.jpg'
import pic4 from './pic4.jpg'
import pic5 from './pic5.jpg'

function Profile(){

    return(
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
            <Avatar alt="User" image={pic2} size="1.5em" initials="JS"/>
        </div>
        <div>
            <Text fontSize={18} weight={400}>Victoria Andrews</Text>
        </div>
        <div>
            <Text fontSize={12} weight={300}>Intern</Text>
        </div>
        <div style={{paddingBottom: "20px", paddingTop: "20px"}}>
            <Tag text="Drawing" />
            <Tag text="Photography" />
            <Tag text= "University of Kansas"/>
            <Tag text="Python" />
        </div>
    </div>
</Card>
</div>

<div style={{float: 'left', paddingLeft: "30px", paddingBottom: "20px", paddingTop: "20px"}}>
            <Card style={{width: "250px", height: "270px"}}>
                <div style={{textAlign: "center", paddingTop: "10px"}}>
                    <div>
                        <Avatar alt="User" image={pic3} size="1.5em" initials="JS"/>
                    </div>
                    <div>
                        <Text fontSize={18} weight={400}>Emily Jacobs</Text>
                    </div>
                    <div>
                        <Text fontSize={12} weight={300}>Intern</Text>
                    </div>
                    <div style={{paddingBottom: "20px", paddingTop: "20px"}}>
                        <Tag text="Truman State University" />
                        <Tag text="Drawing" />
                        <Tag text="C++" />
                        <Tag text="Music" />
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

<div style={{float: 'left', paddingLeft: "30px", paddingBottom: "20px", paddingTop: "20px"}}>
            <Card style={{width: "250px", height: "270px"}}>
                <div style={{textAlign: "center", paddingTop: "10px"}}>
                    <div>
                        <Avatar alt="User" image={pic5} size="1.5em" initials="JS"/>
                    </div>
                    <div>
                        <Text fontSize={18} weight={400}>William Smith</Text>
                    </div>
                    <div>
                        <Text fontSize={12} weight={300}>Intern</Text>
                    </div>
                    <div style={{paddingBottom: "20px", paddingTop: "20px"}}>
                        <Tag text="Reading" />
                        <Tag text="Sports" />
                        <Tag text="Java" />
                        <Tag text="University of Central Missouri" />
                    </div>
                </div>
            </Card>
        </div>
        </div>
    );
}


export default Profile;