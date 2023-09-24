import React, {useEffect, useState} from 'react';
import ProductBox from '../components/ProductBox';
import { useSearchParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = () => {
  const productList = useSelector(state => state.productList)
  const dispatch = useDispatch();
  const [query, setQuery] = useSearchParams();
  const getProduct = () =>{
    let keyword = query.get('q') || '';
    console.log('쿼리값', keyword);
    dispatch(productAction.getProducts(keyword));
    
  }
  useEffect(()=>{getProduct()},[query]);
  return (
    <div className='inner'>
      <div className='productWarp'>
        <ul className='productList'>
          {productList.map((menu, index)=>(
          <li key={index}>
            <ProductBox item={menu}/>
          </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default ProductAll