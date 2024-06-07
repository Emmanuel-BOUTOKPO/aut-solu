import React, { useEffect, useState } from 'react'
import Header from '../composant/header/Header'
import Footer from '../composant/footer/Footer'
import {Table} from 'react-bootstrap';
import Sidebar from '../composant/sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { deletePosts, getAllePosts } from '../../redux/features/post/postSlice'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Dash = () => {

  const dispatch = useDispatch();
const [products, setProducts] = useState([]);
const product = useSelector((state) => state.product.postes);
const [toggle, setToggle] = useState(false);
useEffect(() => {
  dispatch(getAllePosts());
}, [dispatch])

useEffect(() => {
  if (product) {
      const newCat = product.map((item) => {
          return item;
      });
      setProducts(newCat);
  } else {
    setProducts([]);
  }
}, [product]);

console.log(products);

const onDeleteCategory = (id) => {
  const  isDelete = window.confirm("Voulez vous supprimer ce produit ?");
   if (isDelete === true) {
       dispatch(deletePosts(id));
      toast.success("Product a été supprimée avec succes !")        
  }
   dispatch(getAllePosts());
}

  return (
    <>
     <Header toggle={toggle} setToggle={setToggle}/> 

     <div id="layoutSidenav">
     <Sidebar  toggle={toggle} setToggle={setToggle}/>
  <div id="layoutSidenav_content">
    <main>
      <div className="container-fluid px-4">
        <h1 className="mt-4">Dashboard</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>

        <div className="row">
          <div className="col-xl-3 col-md-6">
            <div className="card bg-primary text-white mb-4">
              <div className="card-body">Suivre nos commandes</div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a className="small text-white stretched-link" href="#">View Details</a>
                <div className="small text-white"><i className="fas fa-angle-right" /></div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card bg-warning text-white mb-4">
              <div className="card-body">Voir nos produits disponibles</div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a className="small text-white stretched-link" href="#">View Details</a>
                <div className="small text-white"><i className="fas fa-angle-right" /></div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card bg-success text-white mb-4">
              <div className="card-body">Voir nos clients fidels</div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a className="small text-white stretched-link" href="#">View Details</a>
                <div className="small text-white"><i className="fas fa-angle-right" /></div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card bg-danger text-white mb-4">
              <div className="card-body">Livraisons assurées</div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a className="small text-white stretched-link" href="#">View Details</a>
                <div className="small text-white"><i className="fas fa-angle-right" /></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card mb-4" style={{ overflowX: 'auto' }}>
          <div className="card-header" style={{ marginBottom: '15px' }}>
            <i className="fas fa-table me-1" />
            Liste des produits
          </div>
          <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr className="stylet">
                                        <th style={{ textAlign: "center" }}>No.</th>
                                        <th style={{ textAlign: "center" }}>Nom</th>
                                        <th style={{ textAlign: "center" }}>Catégories</th>
                                        <th style={{ textAlign: "center" }}>Marques</th>
                                        <th style={{ textAlign: "center" }}>Prix</th>
                                        <th style={{ textAlign: "center" }}>Disponible</th>
                                        <th style={{ textAlign: "center" }}>En stock</th>
                                        <th style={{ textAlign: "center" }}>Images</th>
                                        <th style={{ textAlign: "center" }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody  style={{ textAlign: "center" }}>
                                    {product.map((item, index) => {  
                                        return (
                                          <tr key={index}>
                                          <th scope="row">{index + 1}</th>
                                          <td>{item.title}</td>
                                          <td>{item.categories.category}</td>
                                          <td>{item.brands.brand}</td>
                                          <td>{item.price}</td>
                                          <td>{item.price> 0? "Dispo" : "Pas dispo"}</td>
                                          <td>{item.stock > 0 ? "En stock" : 'Pas en stock'}</td>
                                          <td> <img src={item.imgprod} alt="azdrc" /></td>
                                          <td>
                                          <Link to={`/product?edit=${item.id}`} state={item} className="btn-edit"  title="Modifier">
                                          Edit
                      </Link>
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
      </div>
    </main>
    <Footer />
    </div>
</div>

    </>
  )
}

export default Dash
