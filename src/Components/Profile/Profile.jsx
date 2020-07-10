import React from 'react';
import Avatar from 'terra-avatar';
import logo from '../logo.png';
import Card from 'terra-card';
import Text from 'terra-text';
import Tag from 'terra-tag';

function Profile(){

    return(
        <div style={{float: 'left', paddingLeft: "30px", paddingBottom: "20px", paddingTop: "20px"}}>
            <Card style={{width: "250px", height: "250px"}}>
                <div style={{textAlign: "center", paddingTop: "10px"}}>
                    <div>
                        <Avatar alt="User" image={logo} size="1.5em" initials="JS" />
                    </div>
                    <div>
                        <Text fontSize={18} weight={400}>John Doe</Text>
                    </div>
                    <div>
                        <Text fontSize={12} weight={300}>Intern</Text>
                    </div>
                    <div style={{paddingBottom: "20px", paddingTop: "20px"}}>
                        <Tag text="Sports" />
                        <Tag text="Music" />
                        <Tag text="Crafts" />
                        <Tag text="Exercise" />
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default Profile;