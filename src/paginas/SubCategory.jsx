import React from 'react';
import { useParams } from 'react-router';
import ListPost from '../components/ListPost';

const SubCategory = () => {

  const { subcategory } = useParams();

  return (
    <ListPost url={`/posts?subcategoria=${subcategory}`} />
  )
}

export default SubCategory;