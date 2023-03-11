import HeaderTop from '@/components/layouts/HeaderTop';
import StButton from '@/components/ui/StButton';
import * as React from 'react';
import { useState } from 'react';

export default function Product() {

  // 1 Fetch the product data from the API
  // axios.get('https://api.example.com/products/1')

  // useState and useEffect hooks

  const [ prodOne, setProdOne ] = useState();

  return (
    <>
    <HeaderTop />
    
    </>
  );
}