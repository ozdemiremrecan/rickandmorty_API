import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import Search from './Search';
function CharactersDetail() {
    const [fetchData, updateFetchData]= useState([]);
    const {info, results}=fetchData;
    const [id,setId]=useState(1);
    const [name,setName]=useState('');  
    const itemsPerPage=20
    useEffect(()=>{
      const headers= new Headers(); 
       fetch('https://rickandmortyapi.com/api/character?page='+id+'&name='+name,{
          method:'GET',
          headers:headers,
          redirect: 'follow'
      }).then(response=>response.json()).then(data=>updateFetchData(data))
    },[itemsPerPage,name,id])
    const handlePageClick=(event)=>{
      
      setId(event.selected+1)
    }
  return (
    <>
      <div>
        <Search setName={setName}/>
        {Array.isArray(results)&& (
          results?.map((value,key)=>(
            <div className="container">
              <div className="card-group vgr-cards mb-5">               
                {value.id % 2 === 0 &&(
                  <div className="card">
                    <div className="">
                      <img className="" src={value.image}alt="Card  cap"/>
                    </div>
                    <div className="card-body bg-warning">
                      <h4 className="card-title">{value.name}</h4>
                      <p className="card-text">{value.created}</p>
                      <p className="card-text">{value.species}</p>
                      <p className="card-text">{value.gender}</p>
                      <p className="card-text">{value.location.name}</p>
                      <p className="card-text">{value.status}</p>
                      <Link to="/" className="btn btn-outline-primary">Primary</Link>
                    </div>
                </div>
                )}
                {value.id % 2 ===1 &&(
                  <div className="card ">
                  <div className="card-body bg-warning" style={{padding:40}}>
                    <h4 className="card-title">{value.name}</h4>
                    <p className="card-text">{value.created}</p>
                    <p className="card-text">{value.species}</p>
                    <p className="card-text">{value.gender}</p>
                    <p className="card-text">{value.location.name}</p>
                    <p className="card-text">{value.status}</p>
                    <Link to="/" className="btn btn-outline-primary">Primary</Link>
                  </div>
                  <div className="">
                      <img className="" src={value.image}alt="Card  cap"/>
                    </div>
                </div>
                )}
              </div>
            </div>
          ))
        )}
        </div>
        {
          <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={10}
          pageCount={info?.pages}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName='page-num'
          previousLinkClassName='page-num'
          nextLinkClassName='page-num'
          activeLinkClassName='active'
      />
        }
        
    </>
  )
}

export default CharactersDetail