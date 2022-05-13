import Profile from './profile/Profile'
import ProfilePhoto from "./profile/ProfilePhoto.jpg";
import './App.css';

function App() {
  const handleName = (name) => {

    alert(`Name of profile user is ${name}`)

  }
  return (
    <div className="App">
      
      <Profile 
        fullName="Mnasri Ridha"
         profession=" Developer"
        bio="I am student at go my code"
        handleName={handleName}
      >
        
        <img src={ProfilePhoto} alt="img" />
      </Profile>
      
    </div >
  );
}

export default App;
