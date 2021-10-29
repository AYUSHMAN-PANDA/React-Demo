import React, { useRef, useState } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import signupLogo from "../images/signup.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const history = useHistory();
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordRef.current.value === passwordConfirmRef.current.value) {
      history.push("login");
    } else {
      setError("Password Dont Match");
    }
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
      <div>
        <div className="row">
          <div
            className="col w-100 d-flex align-items-center justify-content-center"
            style={{ height: "100vh" }}
          >
            <Card>
              <Card.Body className="p-5">
                <h2 className="text-center mb-4">Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="email">
                    <Form.Control
                      style={styles.input}
                      type="email"
                      ref={emailRef}
                      placeholder="Enter Your Email"
                      required
                    />
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Control
                      style={styles.input}
                      type="password"
                      ref={passwordRef}
                      placeholder="Password"
                      required
                    />
                  </Form.Group>
                  <Form.Group id="password-confirm">
                    <Form.Control
                      type="password"
                      style={styles.input}
                      ref={passwordConfirmRef}
                      placeholder="Confirm Password"
                      required
                    />
                  </Form.Group>
                  <Button className="w-100 mt-4" type="submit">
                    Sign Up
                  </Button>
                </Form>
              </Card.Body>
              <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/login">Log In</Link>
              </div>
            </Card>
          </div>
          <div
            className="col d-flex align-items-center justify-content-center"
            style={{ height: "100vh" }}
          >
            <img src={signupLogo} class="img-fluid" alt="Responsive image" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SignUp;
