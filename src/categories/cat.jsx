import React from 'react'

function Cat({filtrerparcat}) {
  
  let envoyer=(e)=>{
   if(e.currentTarget.innerHTML=='electronics')
    filtrerparcat("electronics");
   if(e.currentTarget.innerHTML=='men\'s clothing')
    filtrerparcat("men's clothing");
   if(e.currentTarget.innerHTML=='women\'s clothing')
    filtrerparcat("women's clothing");
  }
  return (
    <div className='cat'>
        <div id='cate'>Categories:</div>
        <div className='navbar'>
                    <div className='filsnav' onClick={envoyer}>electronics</div>
                    <div className='filsnav' onClick={envoyer}>men's clothing</div>
                    <div className='filsnav' onClick={envoyer}>women's clothing</div>
        </div>
        <hr id='ligne2'/>
    </div>
  )
}

export default Cat