import React, { useRef, useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import loginLogo from "../images/login1.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const handleSubmit = () => {
    history.push("profile");
  };
  const styles = {
    input: {
      bottom: 0,
      height: 40,
      flex: 1,
      borderColor: "transparent",
      backgroundColor: "#ECECEC",
      padding: 5,
      color: "black",
      textAlign: "center",
      marginTop: 10,
    },
  };
  return (
    <Container>
      <div className="row">
        <div
          className="col d-flex align-items-center justify-content-center"
          style={{
            height: "100vh",
            // backgroundColor: "#000",
            // backgroundImage: "url(" + loginLogo + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Card>
            <Card.Body className="p-5">
              <h2 className="text-center mb-4">Log In</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Control
                    type="email"
                    style={styles.input}
                    ref={emailRef}
                    placeholder="Email"
                    required
                  />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Control
                    type="password"
                    style={styles.input}
                    ref={passwordRef}
                    placeholder="Password"
                    required
                  />
                </Form.Group>

                <Button className="w-100 mt-4" type="submit">
                  Login
                </Button>
              </Form>
            </Card.Body>
            <div className="w-100 text-center mt-2">
              Don't have an Account? <Link to="/signup">Sign Up</Link>
            </div>
          </Card>
        </div>
        <div
          className="col d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <img src={loginLogo} class="img-fluid" alt="Responsive image" />
        </div>
      </div>
    </Container>
  );
}

export default Login;
