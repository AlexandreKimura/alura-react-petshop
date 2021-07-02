import React from 'react'
import ListCategories from '../components/ListCategories'
import ListPost from '../components/ListPost'

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      <ListCategories />
      <ListPost url={`/posts`}/>

    </main>
  )
}

export default Home
