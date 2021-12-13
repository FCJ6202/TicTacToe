import { useState } from 'react'
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Cross from './Gameprops/Cross';
import Zero from './Gameprops/Zero';
import './Design/App.css'

function App() {
  const [alert, setalert] = useState({
    message: null,
    type: null
  });

  const [mode, setmode] = useState("dark");

  const SetAlert = (message, type) => {
    setalert({
      message: message,
      type: type
    })

    setTimeout(() => {
      SetAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "#170534";
      document.body.style.color = "white";
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#170534";
    }
  }

  const styleLeft = {
    marginLeft : "250px"
  }
  const styleRight = {
    marginRight : "250px"
  }
  return (
    <>
        <Navbar
          title="textutiles"
          about="About"
          home="Home"
          SetAlert={SetAlert}
          toggleMode={toggleMode}
        />
        <Alert
          message = {alert.message}
          type = {alert.type}
        />

        <div className="container" style={{marginTop : "100px"}}>
          <div className="row">
            <div className="col" style={styleLeft}>
              <Cross/>
              {/*<Zero/>*/}
            </div>
            <div className="col">
              <Cross/>
              {/*<Zero/>*/}
            </div>
            <div className="col" style={styleRight}>
              <Cross/>
              {/*<Zero/>*/}
            </div>
          </div>
          <hr className='Hori-line'/>
          <div className="row">
            <div className="col" style={styleLeft}>
              <Cross/>
              {/*<Zero/>*/}
            </div>
            <div className="col">
              <Cross/>
              {/*<Zero/>*/}
            </div>
            <div className="col" style={styleRight}>
              <Cross/>
              {/*<Zero/>*/}
            </div>
          </div>
          <hr className='Hori-line'/>
          <div className="row">
            <div className="col" style={styleLeft}>
              <Cross/>
              {/*<Zero/>*/}
            </div>
            <div className="col">
              <Cross/>
              {/*<Zero/>*/}
            </div>
            <div className="col" style={styleRight}>
              <Cross/>
              {/*<Zero/>*/}
            </div>
          </div>
        </div>
        

    </>
  );
}

export default App;
