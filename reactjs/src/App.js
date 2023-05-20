import logo from './Linkedin-Logo.webp'
import './App.css';

function App() {
  return (
    <>
      <img src={logo} id="linkedin-logo" alt="LinkedIn" />
      <div class="Container">
      <section class="login-form">
        <form id="login" action="">
          <table class="tables">
            <tr>
              <td id="tbl-heading">
                <h1>Sign in</h1>
                <p id="para-font">Stay updated on your professional world</p>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  class="username"
                  name="username"
                  id="text-box"
                  placeholder="Email or Phone"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="password"
                  class="password"
                  name="password"
                  id="text-box"
                  placeholder="Password"
                />
              </td>
            </tr>
            <tr>
                <td id="forgot-pwd"><a href="#">Forgot password?</a></td>
            </tr>
            <tr>
              <td id="tdata">
                <button class="btn" type="button">Submit</button>
              </td>
            </tr>
          </table>
        </form>
      </section>
     </div>       
    </>
  );
}

export default App;
