import React, { useRef, useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import avatar from "../images/avatar.png";
import leftImage from "../images/temp1.svg";
import { useHistory } from "react-router";
function Profile() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [religion, setReligion] = useState("");
  const [dob, setDOB] = useState("");
  const [height, setHeight] = useState("");
  const [updating, setUpdating] = useState(true);
  const [image, setImage] = useState();
  const history = useHistory();

  const handleSubmit = () => {
    setUpdating(!updating);
  };

  const handleLogout = () => {
    history.push("login");
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
    logoutButton: {
      margin: "auto",
      marginTop: 10,
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: "center",
    },
  };
  return (
    <div className="row" style={{ height: "100vh" }}>
      <div className="col continer d-flex align-items-center justify-content-center">
        <img
          src={leftImage}
          style={{ width: "40rem" }}
          class="img-fluid"
          alt="Responsive image"
        />
      </div>

      <div className="col d-flex align-items-center justify-content-center">
        {updating ? (
          <div>
            <Card style={{ width: "50vh", marginTop: 10 }}>
              <Card.Img
                style={{
                  borderRadius: 500,
                  padding: "2rem",
                  height: "500px",
                  width: "500px",
                }}
                variant="top"
                src={image ? image : avatar}
              />
              <Card.Body>
                <Card.Title className="d-flex justify-content-center">
                  Profile Details
                </Card.Title>
                <Card.Text>
                  {name ? <div style={styles.input}>Name: {name}</div> : ""}
                  {email ? <div style={styles.input}>Email: {email}</div> : ""}
                  {religion ? (
                    <div style={styles.input}>Religion: {religion}</div>
                  ) : (
                    ""
                  )}
                  {dob ? (
                    <div style={styles.input}>Date of Birth: {dob}</div>
                  ) : (
                    ""
                  )}
                  {height ? (
                    <div style={styles.input}>Height: {height} cm</div>
                  ) : (
                    ""
                  )}
                </Card.Text>

                <div className="justify-content-center d-flex">
                  <Button
                    variant="outline-primary"
                    onClick={() => setUpdating(!updating)}
                  >
                    Update Profile
                  </Button>
                </div>
              </Card.Body>
            </Card>
            <Button
              style={styles.logoutButton}
              variant="outline-danger"
              onClick={handleLogout}
            >
              Log Out
            </Button>
          </div>
        ) : (
          <div>
            <Card>
              <Card.Body className="p-5">
                <h2 className="text-center mb-4">Update Profile Details</h2>
                {/* {error && <Alert variant="danger">{error}</Alert>} */}
                <Form>
                  <Form.Group id="email">
                    <Form.Control
                      value={email}
                      placeholder="Email"
                      onChange={(text) => setEmail(text.target.value)}
                      type="email"
                    />
                  </Form.Group>
                  <br />
                  <Form.Group id="name">
                    <Form.Control
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                    />
                  </Form.Group>
                  <br />
                  <Form.Group id="religion">
                    <Form.Control
                      placeholder="Religion"
                      value={religion}
                      onChange={(e) => setReligion(e.target.value)}
                      type="text"
                    />
                  </Form.Group>

                  <br />
                  <Form.Group id="height">
                    <Form.Control
                      placeholder="Height in cm"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      type="number"
                    />
                  </Form.Group>
                  <br />
                  <Form.Group id="dob">
                    <Form.Label>Update your Date Of Birth</Form.Label>
                    <Form.Control
                      placeholder="Date Of Birth"
                      value={dob}
                      onChange={(e) => setDOB(e.target.value)}
                      type="date"
                    />
                  </Form.Group>
                  <br />
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Update your diplay picture</Form.Label>
                    <Form.Control
                      type="file"
                      onChange={(e) => {
                        setImage(URL.createObjectURL(e.target.files[0]));
                      }}
                    />
                  </Form.Group>
                  <Button
                    className="w-100 mt-4"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit Updates
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
