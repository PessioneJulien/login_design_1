import React, { useState } from 'react';
import wallpaper_1 from './assets/wallpaper_1.jpg';
import wallpaper_2 from './assets/wallpaper_2.jpg';
import wallpaper_3 from './assets/wallpaper_3.jpg';
import wallpaper_4 from './assets/wallpaper_4.jpg';
import CustomSlider from './components/custom.slider';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';

function App() {
  const [showPassword, setShowPassword] = useState(false);

  const wallpaper = [
    { imgURL: wallpaper_1, imgAlt: "wallpaper_1" },
    { imgURL: wallpaper_2, imgAlt: "wallpaper_2" },
    { imgURL: wallpaper_3, imgAlt: "wallpaper_3" },
    { imgURL: wallpaper_4, imgAlt: "wallpaper_4" },
  ];

  return (
    <div className="App">
      <div className="App-header">
        <div className="Left_side">
          <CustomSlider>
            {wallpaper.map((image, index) => {
              return <img key={index} src={image.imgURL} alt={image.imgAlt} className='image' />;
            })}
          </CustomSlider>
        </div>
        <div className="Right_side">
          <div className="login_form">
            <h1 style={{ fontWeight: "600", marginBottom: 5, fontSize: 50 }}>Create an account</h1>
            <text className="App-subText">Already have an account? <a href="/" className='App-link'>Login</a></text>
            <form className='form'>
              <div className='inputRow'>
                <input type="text" placeholder="First Name" className='inputField' />
                <span style={{ width: 10 }} />
                <input type="text" placeholder="Last Name" className='inputField' />
              </div>
              <div className='inputRow'>
                <input type="email" placeholder="Email" className='inputField' />
              </div>
              <div className='inputRow'>
                <div className='passwordField'>
                  <input type="password" placeholder="Enter your password" className='inputField' />
                  {showPassword ? (
                    <FontAwesomeIcon icon={faEye} className='icon' onClick={() => setShowPassword(!showPassword)} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} className='icon' onClick={() => setShowPassword(!showPassword)} />
                  )}
                </div>
              </div>
              <div className="checkboxField">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms" className='terms'>I agree to the <a href="/">Terms & Conditions</a></label>
              </div>
              <button className="submitButton">Create account</button>
              <div className="divider">
                <div className='line' />
                <span style={{ marginRight: 5, marginLeft: 5, fontSize: 16 }}>Or register with</span>
                <div className='line' />
              </div>
              <div className="socialButtons">
                <button className="googleButton">
                  <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" className='socialIcon' />
                  Google
                </button>
                <button className="appleButton">
                  <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/mac-os.png" alt="mac-os" className='socialIcon' />
                  Apple
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}



export default App;
