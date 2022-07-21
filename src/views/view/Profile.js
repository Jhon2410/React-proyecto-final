import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import { getInfoUser } from "services";
import { getBaseUrl } from "services";
import Swal from "sweetalert2";


const Profile = () => {

  const [usuario , setUsuario] = useState({})
  useEffect(()=>{
    (async()=>{
      const res = await getInfoUser()
      if(res.status === 200){
        setUsuario(res.data.msg)
         console.log(res.data.msg)

      }else{
        Swal.fire("Error" , res.data.msg , "error")
      }
    })()
  },[])
  
  return (
    <>
   
      <Container className="mx--auto bg-gradient-info" fluid>
        <Row style={{marginTop: "150px", marginBottom :  "150px"}}>
          <Col className="order-xl-2 mb-5  mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        style={{width: '150px', height: '150px', objectFit : "cover"}}
                        src={usuario.name ? getBaseUrl() +  "img/profile/" + usuario.foto : ""}
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                  <Button
                    className="mr-4"
                    color="info"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Add
                  </Button>
                  <Button
                    className="float-right"
                    color="default"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Message
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                        <span className="heading">{usuario.amigos ? usuario.amigos.length : ''}</span>
                        <span className="description">Friends</span>
                      </div>
                      <div>
                        <span className="heading">{usuario.fotos ? usuario.fotos.length : ''}</span>
                        <span className="description">Photos</span>
                      </div>
                      <div>
                        <span className="heading">{usuario.publicaciones ? usuario.publicaciones.length : ''}</span>
                        <span className="description">Posts</span>
                      </div>
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h3>
                  {usuario.name ? usuario.name : ''}
                    {/* <span className="font-weight-light">, 27</span> */}
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    {usuario.estado ==="activo" ? <span className="bg-success text-white p-1 rounded">{usuario.estado}</span> : <h5 className="bg-danger text-white  p-2 rounded">{usuario.estado}</h5> }
                  </div>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                   Rol :  {usuario.rol ? usuario.rol : ''}
                   <hr></hr>
                  {usuario.rol === "usuario" ? <button className="btn btn-primary">Solicitar rol peluquero</button> : null}
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    
                  </div>
                  <hr className="my-4" />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Update
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Username
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue=  {usuario.name  ? usuario.name :  ""}
                            id="input-username"
                            placeholder=  {usuario.name  ? usuario.name :  ""}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            disabled
                            placeholder= {usuario.mail  ? usuario.mail :  ""}
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            City
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={usuario.pais  ? usuario.pais :  ""}
                            id="input-city"
                            placeholder= {usuario.ciudad  ? usuario.ciudad :  ""}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Country
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={usuario.pais  ? usuario.pais :  ""}
                            id="input-country"
                            placeholder= {usuario.pais  ? usuario.pais :  ""}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Postal code
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-postal-code"
                            placeholder= {usuario.codigoPostal  ? usuario.codigoPostal :  ""}
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">About me</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label>About Me</label>
                      <Input
                        className="form-control-alternative"
                        placeholder={usuario.descripcion  ? usuario.descripcion :  ""}
                        rows="4"
                        defaultValue={usuario.descripcion  ? usuario.descripcion :  ""}
                        type="textarea"
                      />
                    </FormGroup>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
