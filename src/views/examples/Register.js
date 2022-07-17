import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import Swal from 'sweetalert2'
import {registrarUsuario} from "../../services/index"

const Register = () => {

     
  const registrar=async(e)=>{
    e.preventDefault();
    const res = await registrarUsuario({name : e.target[0].value , mail : e.target[1].value , password : e.target[2].value});
    if(res.status===200){
      if(res.data.success){
        localStorage.setItem("Token", res.data.token) ; window.location.reload()
      }else{
        Swal.fire({
          title: res.data.msg,
          icon: 'error',
        })
      }
    }else{
      Swal.fire({
        title: "error en el sistema.",
        icon: 'error',
        closeButton: 'Aceptar',
        closeButtonColor : "#0f0"
      })
    }
  }

  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0"  id="cardR">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Sign up with credentials</small>
            </div>
            <Form role="form" onSubmit={(e)=>{registrar(e)}}>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Name" type="text"  required/>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    required
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    required
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-muted font-italic">
                <small>
                  password strength:{" "}
                  <span className="text-success font-weight-700">strong</span>
                </small>
              </div>
              <Row className="my-4">
                <Col xs="12">
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheckRegister"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckRegister"
                    >
                      <span className="text-muted">
                        I agree with the{" "}
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>
                </Col>
              </Row>
              <div className="text-center">
                <Button className="mt-4 mb-3" color="primary" type="submit">
                  Create account
                </Button>
              </div>
            </Form>
            <Row className="mt-3 position-absolute w-100 start-0 mx-auto my--1 text-center text-uppercase" style={{ left: 0}} >
          <Col xs="6">
            <a
              className=""
              style={{color :"#5e72e4"}}
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small className="btn-hover">Forgot password?</small>
            </a>
          </Col>
          <Col className="" xs="6">
            <a
              className=""
              style={{color :"#5e72e4"}}
              href="/auth/login"
            >
              <small className="btn-hover">Sign in</small>
            </a>
          </Col>
        </Row>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;
