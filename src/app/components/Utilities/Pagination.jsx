import React from 'react'

const Pagination = ({page, lastPage, setPage}) => {

  const scrollTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
  }

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  }
  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  }

  return (
    <div className='flex justify-center items-center py-4 px-2 gap-4'>
      <button onClick={handlePrevPage} className='transition-all hover:text-color-blue'>Prev</button>
      <p>{page} of {lastPage}</p>
      <button onClick={handleNextPage} className='transition-all hover:text-color-blue'>Next</button>
    </div>
  )
}

export default Pagination