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
import {loguearUsuario} from "../../services/index"
import GoogleLogin from 'react-google-login';
import Swal from 'sweetalert2'
const Login = () => {

  const responseGoogle = (response) => {
    console.log(response);
    const profile = response.getBasicProfile();
    console.log(profile)
  }

  const onFailure = (response) => {
    console.log(response);
  }
   
  const loguear=async(e)=>{
    e.preventDefault();
    const res = await loguearUsuario({mail : e.target[0].value , password : e.target[1].value});
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
      <Col lg="6" md="8" >
        <Card className="bg-secondary shadow border-0 " id="cardL">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <small>Sign in with</small>
            </div>
            <div className="btn-wrapper text-center">
              <GoogleLogin
                clientId="864639499650-80fgaes9loj29q2u8kpu49t14sd9gtaq.apps.googleusercontent.com"
                render={renderProps => (
                  <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#"
                onClick={renderProps.onClick} disabled={renderProps.disabled}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/google.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
              />
              
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Or sign in with credentials</small>
            </div>
            <Form role="form" onSubmit={(e)=>{loguear(e)}}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
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
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <Button className="my-4" color="primary" type="submit"  >
                  Sign in
                </Button>
              </div>
            </Form>
        <Row className="mt-3 position-absolute w-100 start-0 mx-auto my--1 text-center text-uppercase" style={{ left: 0}} >
          <Col xs="6">
            <a
              className=""
              style={{color :"#5e72e4"}}
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="" xs="6">
            <a
              className=""
              style={{color :"#5e72e4"}}
              href="/auth/Register"
            >
              <small>Create new account</small>
            </a>
          </Col>
        </Row>
          </CardBody>
        </Card>
     
      </Col>
     
    </>
  );
};

export default Login;
