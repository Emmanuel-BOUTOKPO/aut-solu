import React, { useEffect, useState } from 'react'
import Footer from '../composant/footer/Footer'
import Header from '../composant/header/Header'
import { Button, Form, Modal,Table} from 'react-bootstrap';
import Sidebar from '../composant/sidebar/Sidebar'
import './brand.css'
import { useDispatch, useSelector } from 'react-redux';
import { createBrand, deleteBrands, getBrand, updateBrand } from '../../redux/features/brand/brandSlice';
import { toast } from 'react-toastify';


const Brand = () => {
  const initial = {
    id : "",
    brand : ""
};

const [formValue, setFormValue] = useState(initial);
const {id,brand} = formValue;
const dispatch = useDispatch();
const [brands, setBrands] = useState([]);
const models = useSelector((state) => state.brand.brand);
console.log(models);
const [show, setShow] = useState(false); 
const handleClose = () =>{ 
      setShow(false);
      setFormValue(initial)
  };

  const handleShow = () => setShow(true);
  const [toggle, setToggle] = useState(false);

//--------------Get All Category ------------------------
useEffect(() => {
    dispatch(getBrand());
}, [dispatch])

useEffect(() => {
    if (models) {
        const newCat = models.map((item) => {
            return item;
        });
        setBrands(newCat);
    } else {
      setBrands([]);
    }
}, [models]);
console.log(brands);
//------------------------  Create and edit Category ------------------------

const handleSubmit = (e) => {
    e.preventDefault();
    if (brand === "" || brand === undefined) {
        toast.error("Veuillez renseigner le champs !")        
    }
 else if (!id) {
      dispatch(createBrand({ brand }));      
      //toast.success("Catégorie a été créée avec succes !")    
      dispatch(getBrand());    
    }else{
         dispatch(updateBrand(formValue));
         //toast.success("Catégorie a été modifiée avec succes !")    
         dispatch(getBrand());    
    }  
    handleClose()
    setFormValue(initial);
}

const handleChange = (e) =>{
let { name, value } = e.target;
setFormValue({ ...formValue, [name]: value })
}

const editUser = (id,brand) =>{
    setFormValue({id,brand});
    console.log(id,brand);
     handleShow()
 }

//-------------------------Delete category ------------------------
const onDeleteCategory = (id) => {
    const  isDelete = window.confirm("Voulez vous supprimer cette catégorie ?");
     if (isDelete === true) {
         dispatch(deleteBrands(id));
        toast.success("Catégorie a été supprimée avec succes !")        
    }
     dispatch(getBrand());
 }

  //-----------------Loading ---------------------------------------
 

  return (
    <>
      <Header toggle={toggle} setToggle={setToggle}/> 

<div id="layoutSidenav">
<Sidebar  toggle={toggle} setToggle={setToggle}/>
  <div id="layoutSidenav_content">
    <main>
      <div className="container-fluid px-4">
        <h1 className="mt-4">Model</h1>
        <ol className="breadcrumb brans mb-4">
          <li className="breadcrumb-item active">Model de pièces détachées</li>
          <li className="btnCat" onClick={handleShow} >Ajouter un model</li>
        </ol>
        
        <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr className="stylet">
                                        <th style={{ textAlign: "center" }}>No.</th>
                                        <th style={{ textAlign: "center" }}>Name</th>
                                        <th style={{ textAlign: "center" }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody  style={{ textAlign: "center" }}>
                                    {brands.map((item, index) => {  
                                        return (
                                          <tr key={index}>
                                          <th scope="row">{index + 1}</th>
                                          <td>{item.brand}</td>
                                          <td>
                                              <button 
                                              className="btn-edit" 
                                              onClick={(e) =>editUser(item.id, item.brand)}
                                              >Edit
                                              </button>
                                              <button
                                                  className="btn-delete"
                                                 onClick={(e) => onDeleteCategory(item.id)}
                                              >
                                                  Delete
                                              </button>
                                          </td>
                                      </tr>
                                        );
                                      })}  
                                </tbody>
                            </Table>

      </div>
    </main>
    <Footer />
    <Modal show={show} onHide={handleShow}>
                <Modal.Header>
                    <Modal.Title>{id?"Modifier la catégorie":"  Ajouter une nouvelle model"} </Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            
                            <input
                                type="text"
                                name="brand"
                                value={id?brand:brand}
                                onChange={handleChange}
                                placeholder= {id?"Modifier votre model":"Ajouter votre model"}  
                                autoFocus
                                className="inputs"
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button type="submit" variant="primary">
                           {id?"Modifier":"Ajouter"} 
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
    </div>
</div>

    </>
  )
}

export default Brand
