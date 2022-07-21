import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";
import { getBaseUrl } from "services";
import { getInfoUser } from "services";
import Swal from "sweetalert2";

const AdminNavbar = (props) => {
  const [usuario , setUsuario] = useState({})
  useEffect(()=>{
    (async()=>{
      const res = await getInfoUser()
      if(res.status === 200){
        setUsuario(res.data.msg)
         console.log(usuario.foto)

      }else{
        Swal.fire("Error" , res.data.msg , "error")
      }
    })()
  },[])
  return (
    <div >
    
      <Navbar className="navbar-top navbar-dark shadow" expand="md" id="navbar-main">
        <Container fluid>
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            {props.brandText}
          </Link>
          <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <FormGroup className="mb-0">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Search" type="text" />
              </InputGroup>
            </FormGroup>
          </Form>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center" 
                      style={{overflow: "hidden" , maxWidth: "250px",maxHeight: "250px" }}>
                  <span className="avatar avatar-sm " 
                      style={{objectFit : "cover" , width : "25px"  }}
                  >
                    <img
                      alt="..."
                      src={usuario.foto ?  getBaseUrl() + "img/profile/" + usuario.foto : "a"}
                      style={{objectFit : "cover" , width : "25px"  }}

                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold mw-25 overflow-hidden">
                      {usuario.name ? usuario.name : "a"}
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right style={{ "zIndex" : "100"}} >
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-settings-gear-65" />
                  <span>Settings</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-calendar-grid-58" />
                  <span>Activity</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-support-16" />
                  <span>Support</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem  onClick={() => {localStorage.removeItem("Token"); window.location.reload();}}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default AdminNavbar;
