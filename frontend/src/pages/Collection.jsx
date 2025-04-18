import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';


function Collection() {

  const {products,search,showSearch}=useContext(ShopContext);
  const [showfilter,setshowfilter]=useState(false)
  const [filterProducts, setfilterProducts] = useState([])
  const [category, setcategory] = useState([])
  const [subcategory, setsubcategory] = useState([])
  const [sortType, setsortType] = useState('relavent')

  

  const toggleCategory=(e)=>{
    if(category.includes(e.target.value)){
      setcategory(prev=>prev.filter(item=>item !== e.target.value))
    }else{
      setcategory(prev=>[...prev,e.target.value])
    }
  }

  const toggleSuncategory=(e)=>{
    if(subcategory.includes(e.target.value)){
      setsubcategory(prev=>prev.filter(item=>item !== e.target.value))
    }else
    {
      setsubcategory(prev=>[...prev,e.target.value])
    }
  }


  const applyfilter=()=>{
    let cpyproducts=products.slice()
    if(category.length>0){
      cpyproducts=cpyproducts.filter(item=>category.includes(item.category))
    }
    
    if(subcategory.length>0){
       cpyproducts=cpyproducts.filter(item=>subcategory.includes(item.subcategory))
      
    } 

    if(showSearch && search){
      cpyproducts=cpyproducts.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    setfilterProducts(cpyproducts)
  }

  const sortProduct=()=>{
    let fpcopy=filterProducts.slice()

    switch (sortType) {
      case 'low-high':
        setfilterProducts(fpcopy.sort((a,b)=>(a.price-b.price)))
        break;
      case 'high-low':
        setfilterProducts(fpcopy.sort((a,b)=>(b.price-a.price)))
        break;
    
      default:
        applyfilter()
        break;
    }
  }

  // useEffect(() => {
  //   setfilterProducts(products)
  // }, [])

  useEffect(() => {
    applyfilter()
  }, [category,subcategory,search,showSearch,products])
  
 useEffect(() => {
   sortProduct()
 }, [sortType])
 
  

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-200'>
      {/* left */}
      <div className='min-w-60'>
        <p onClick={()=>setshowfilter(!showfilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img src="https://img.icons8.com/?size=256w&id=45330&format=png" alt="" className={`h-3 sm:hidden ${showfilter ? 'rotate-180':''}`} />
        </p>
        {/* category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter ? '': 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium '>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={'Men'}  onChange={toggleCategory}  />Men
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={'Women'} onChange={toggleCategory}  />Women
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={'Kids'}  onChange={toggleCategory} />Kids
              </p>
            </div>
        </div>
        {/* sub category */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showfilter ? '': 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium '>TYPE</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={'Topwear'} onChange={toggleSuncategory} />Topwear
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={'Bottomwear'} onChange={toggleSuncategory}  />Bottomwear
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={'Winterwear'} onChange={toggleSuncategory} />Winterwear
              </p>
            </div>
        </div>
      </div>
      
      {/* right side */}
      <div className='flex-1'>
          <div className='flex justify-between text-base sm:text-xl lg:text-2xl mb-4'>
            <Title text1={'ALL'} text2={'COLLECTIONS'}/>
             {/* product sort */}
             <select onChange={(e)=>setsortType(e.target.value)} className='border-2 border-gray-300 text-sm lg:text-base px-2'>
              <option value="relavent">Sort by:Relavent</option>
              <option value="low-high">Sort bt:Low to high</option>
              <option value="high-low">Sort bt:high to Low</option>
             </select>
          </div>
          {/* map product */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  gap-y-6'>
              {
                filterProducts.map((item)=>(
                  <ProductItem key={item._id} name={item.name} id={item._id} price={item.price} image={item.image}/>
                ))
              }
          </div>
      </div>
      
    </div>
  )
}

export default Collection