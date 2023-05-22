import logo from "./Linkedin-Logo.webp";
import "./App.css";

function App() {
  return (
    <>      
      <div className="Container">
        <img src={logo} id="linkedin-logo" alt="LinkedIn" />
        <section className="login-form">
          <form id="login" action="">
            <table className="tables">
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
                    className="username"
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
                    className="password"
                    name="password"
                    id="text-box"
                    placeholder="Password"
                  />
                </td>
              </tr>
              <tr>
                <td id="forgot-pwd">
                  <a href="#">Forgot password?</a>
                </td>
              </tr>
              <tr>
                <td id="tdata">
                  <button className="btn" type="button">
                    Submit
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <p id="sign-up">
                    New to LinkedIn <a href="#">Join Now</a>
                  </p>
                </td>
              </tr>
            </table>
          </form>
        </section>
      </div>

      <footer className="container">
        <img src={logo} id="footer-logo" alt="LinkedIn" />
      </footer>
    </>
  );
}

export default App;
