import React from 'react'
import PropTypes from 'prop-types';



const Profile_component = ({ fullName, bio, profession, handleName, children }) => {
    const styleProfile = {
        color: '#43658b', display: 'flex', margin: "100px 60px",
        justifyItems: 'center', textAlign: 'start' ,  alignItems: 'baseline'
    }

    
    const handleAlert = e => {
        handleName(fullName);
    } 
    return (
        <div style={styleProfile}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', justifyItems: 'center', textAlign: 'center' }}>
                <div> {children}</div>
                <div>
                    <button onClick={handleAlert} style={{ width: '50%', height: '30px', border: 'solid 2px', borderRadius: '3px', fontSize: '12' }} >
                        Alert
                    </button>
                </div>
            </div>
            <div  style={{ margin: '100px 50px' }} >
                <h1 style={{ color: 'red' , fontSize: '70px' , fontFamily: "Sans-Serif"}}>{fullName}</h1>
                <div style={{ margin: '100px 150px' , fontSize: '25px' }}>        
                <h2>{profession}</h2>
                <h3>{bio}</h3>
                </div>

            </div>
        </div>
    )
}


Profile_component.defaultProps = {
    fullName: 'Mnasri Ridha',
    bio: ' I am student at go my code  ',
    profession: 'full stack js developer'
};


Profile_component.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func
}

export default Profile_component
