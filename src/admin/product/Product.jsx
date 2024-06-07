import React, { useEffect, useState } from 'react'
import Header from '../composant/header/Header'
import Sidebar from '../composant/sidebar/Sidebar'
import Footer from '../composant/footer/Footer'
import { getBrand } from '../../redux/features/brand/brandSlice'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCat } from '../../redux/features/cat/catSlice'
import { toast } from 'react-toastify'
import "./product.css"
import { createPost, getAllPosts, updatePost } from '../../redux/features/post/postSlice'

const Product = () => {
  const state = useLocation().state;
  const [title, setTitle] = useState(state?.title|| "");
  const [imgprod, setImgProd] = useState(state?.imgprod || "");
  const [price, setPrice] = useState(state?.price || "");
  const [description, setDescription] = useState(state?.description || "");
  const [prodimgs, setProdimgs] = useState(state?.prodimgs || []);
  const [stock, setStock] = useState(state?.stock || "");
  const [availability, setAvailability] = useState(state?.availability || "");
  const [categoryId, setCategoryId] = useState(state?.categoryId || "");
  const [brandId, setBrandId] = useState(state?.brandId || "");

  const [imgPostPreview, setImgPostPreview] = useState(null);
  const [multipleImgsPreview, setMultipleImgsPreview] = useState([]);
  
  const [cat, setCat] = useState([]);
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();
  const categorie = useSelector(state => state.cat.categorie); 
  const brand = useSelector(state => state.brand.brand); 
  const dispatch = useDispatch();

  //------------------------  Create and edit Post ------------------------

  useEffect(() => {
    dispatch(getBrand());
}, [dispatch])

useEffect(() => {
    if (brand) {
      setBrands(brand)
    } else {
      setBrands([])
    }
}, [brand]);

useEffect(() => {
  dispatch(getCat());
}, [dispatch])

useEffect(() => {
  if (categorie) {
    setCat(categorie)
  } else {
    setCat([])
  }
}, [categorie]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const getUserId = JSON.parse(localStorage.getItem("users"));

    if (getUserId !== null) {
      const userId = getUserId.id;
      const formData = new FormData();
       
      if (!title || !price || !categoryId || !stock || !imgprod || !prodimgs) {
        toast.error("Veuillez renseigner le champs !");
      } else if (!state) {
        formData.append("title", title);
        formData.append("imgprod", imgprod);
        formData.append("price", price);
        formData.append("description", description);
        prodimgs.forEach((img, index) => {
          formData.append(`prodimgs[${index}]`, img);
        });
        formData.append("stock", stock);
        formData.append("availability", availability);
        formData.append("categoryId", categoryId);
        formData.append("brandId", brandId);
        formData.append("userId", userId);

        dispatch(createPost(formData));
        toast.success("Votre post a été créé avec succès !");
        navigate("/admin");
      } else {
        let id = state.id;
        dispatch(updatePost({
          id,
          title,
          imgprod,
          price,
          description,
          prodimgs,
          stock,
          availability,
          categoryId,
          userId,
          brandId
        }));
        toast.success("Votre post a été modifié avec succès !");
        navigate("/admin");
      }
       dispatch(getAllPosts());
    }
  };

  // Handle image preview for single image
  const handleSingleImageChange = (e) => {
    const file = e.target.files[0];
    setImgProd(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImgPostPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // Handle image preview for multiple images
  const handleMultipleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setProdimgs(files);

    const previewUrls = files.map((file) => {
      const reader = new FileReader();
      return new Promise((resolve) => {
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(previewUrls).then((urls) => {
      setMultipleImgsPreview(urls);
    });
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
        <h1 className="mt-4">Nos Produits</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active">Ajout des produits</li>
        </ol>
      
      <div className="container-fluid">
        <div>
          <form className="add" onSubmit={handleSubmit}>
            <div className="col-lg-6 col-md-7">
              <input
                type="text"
                placeholder="Titre de la pièce détachées"
                className="titlesf"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              
               <textarea
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description de la catégorie"
                    className="titlesf"
                  />
    
                  <select
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    className='titlesf'
                  >
                    <option>Selectionner une catégorie </option>
                     {
                      cat.map((item, id) => (
                        <option key={id} value={item.id}>{item.category}</option>
                      ))
                    }  
                  </select>
                 
                  <input
                    type="number"
                    value={price}
                    className="titlesf"
                    placeholder='Quel est le prix unitaire du produit?'
                    onChange={(e) => setPrice(e.target.value)}
                  />
              
                  <input
                    type="number"
                    value={stock}
                    placeholder="Combien il y a t-il en stock?"
                    className="titlesf"
                    onChange={(e) => setStock(e.target.value)}
                  />
               
            </div>
            <div className="col-lg-6 col-md-5">
                  <input
                    type="number"
                    value={availability}
                    placeholder="Combien il y a t-il de disponible?"
                    className="titlesf"
                    onChange={(e) => setAvailability(e.target.value)}
                  />
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="file"
                  onChange={handleSingleImageChange}
                />
                <label className="file" htmlFor="file">
                  Uploader une image principale du produit
                </label>
                {imgPostPreview && (
                  <div className="imgPreview">
                    <img src={imgPostPreview} alt="primaryImg" style={{width : '25%'}}/>
                  </div>
                )}
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="multipleFiles"
                  multiple
                  onChange={handleMultipleImagesChange}
                />
                <label className="file" htmlFor="multipleFiles">
                  Uploader plusieurs images du produit
                </label>
                <div className="imgPreviews">
                  {multipleImgsPreview.map((src, index) => (
                    <img key={index} src={src} style={{width : '25%', marginRight : "5px"}} alt={`imgSec${index + 1}`} />
                  ))}
                </div>
                <select
                    value={brandId}
                    onChange={(e) => setBrandId(e.target.value)}
                    className='titlesf'
                  >
                    <option>Selectionner une model </option>
                     {
                      brands.map((item, id) => (
                        <option key={id} value={item.id}>{item.brand}</option>
                      ))
                    }  
                  </select>

                <div className="buttons">
                  <button className="button2" type="submit">
                    {state ? "Modifier" : "Publier"}
                  </button>
                </div>
            </div>
          </form>
        </div>
      </div>
      </div>
    </main>
    <Footer />
    </div>
</div>

    </>
  )
}

export default Product
