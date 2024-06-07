import React, { useEffect, useState } from 'react';
import Footer from '../composant/footer/Footer';
import Header from '../composant/header/Header';
import { Button, Form, Modal, Table } from 'react-bootstrap';
import Sidebar from '../composant/sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { createCat, deleteCatgry, getCat, updateCatgry } from '../../redux/features/cat/catSlice';
import { toast } from 'react-toastify';
import './cat.css';

const Catef = () => {
  const [id, setId] = useState(null);
  const [category, setCategory] = useState('');
  const [imgcat, setImgcat] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const cats = useSelector((state) => state.cat.categorie);

  useEffect(() => {
    dispatch(getCat());
  }, [dispatch]);

  const renderCategories = () => {
    return cats.map((item) => (
      <tr key={item.id}>
        <th scope="row">{item.id}</th>
        <td>{item.category}</td>
        <td>{item.imgcat && <img className="imgCat" src={item.imgcat} alt="Category" />}</td>
        <td>
          <button className="btn-edit" onClick={() => editCategory(item)}>
            Edit
          </button>
          <button className="btn-delete" onClick={() => deleteCategory(item.id)}>
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category) {
      toast.error('Veuillez remplir le champ Nom de la catégorie !');
      return;
    }
    const formData = new FormData();
    formData.append('category', category);
    if (imgcat) {
      formData.append('imgcat', imgcat);
    }
    if (id) {
      dispatch(updateCatgry({ id, category, imgcat }));
    } else {
      dispatch(createCat({category, imgcat}));
    }
    handleClose();
    resetForm();
  };

  const editCategory = (item) => {
    setId(item.id);
    setCategory(item.category);
    handleShow();
  };

  const deleteCategory = (categoryId) => {
    if (window.confirm('Voulez-vous vraiment supprimer cette catégorie ?')) {
      dispatch(deleteCatgry(categoryId));
    }
  };

  const resetForm = () => {
    setId(null);
    setCategory('');
    setImgcat(null);
  };
  const [toggle, setToggle] = useState(false);

  return (
    <>
       <Header toggle={toggle} setToggle={setToggle}/> 

<div id="layoutSidenav">
<Sidebar  toggle={toggle} setToggle={setToggle}/>
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Catégories</h1>
              <ol className="breadcrumb brans mb-4">
                <li className="breadcrumb-item active">Catégories de pièces détachées</li>
                <li className="btnCat" onClick={handleShow}>Ajouter un catégorie</li>
              </ol>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr className="stylet">
                    <th style={{ textAlign: 'center' }}>No.</th>
                    <th style={{ textAlign: 'center' }}>Nom</th>
                    <th style={{ textAlign: 'center' }}>Image</th>
                    <th style={{ textAlign: 'center' }}>Action</th>
                  </tr>
                </thead>
                <tbody style={{ textAlign: 'center' }}>{renderCategories()}</tbody>
              </Table>
            </div>
          </main>
          <Footer />
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{id ? 'Modifier la catégorie' : 'Ajouter une nouvelle catégorie'}</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit} enctype="multipart/form-data">
              <Modal.Body>
                <Form.Group className="mb-3">
                  <input
                    type="text"
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Nom de la catégorie"
                    autoFocus
                    className="inputs"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <input type="file" id="file" name="" onChange={(e) => setImgcat(e.target.files[0])} />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Fermer
                </Button>
                <Button type="submit" variant="primary">
                  {id ? 'Modifier' : 'Ajouter'}
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Catef;
