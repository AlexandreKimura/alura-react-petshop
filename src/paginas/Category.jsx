import React, { useEffect, useState } from 'react';
import { useParams, Route, useRouteMatch, Link, Switch } from 'react-router-dom';
import { search } from '../api/api';
import '../assets/css/blog.css';
import ListCategories from '../components/ListCategories';
import ListPost from '../components/ListPost';
import SubCategory from './SubCategory';

const Category = () => {

  const { id } = useParams();
  const { url, path } = useRouteMatch();
  const [ subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    search(`/categorias/${id}`, (category) => {
      setSubCategories(category.subcategorias)
    })
  }, [id])

  return(
    <div>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>

      <ListCategories />

      <ul className="lista-categorias container flex">
        {
          subCategories.map((subCategory) => (
            <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`}  key={subCategory}>
              <Link key={subCategory.id} to={`${url}/${subCategory}`}>
                {subCategory}
              </Link>
            </li>
          ))
        }
      </ul>
      <Switch>
        <Route exact path={`${path}/:subcategory`}>
          <SubCategory />
        </Route> 
        <Route exact path={`${path}/`}>
          <ListPost url={`/posts?categoria=${id}`} />
        </Route>
      </Switch>
    </div>
  )
}

export default Category