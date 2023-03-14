import ChunsikList from '@/components/widgets/ChunsikList'
import MainBanner from '@/components/widgets/MainBanner'
import RecommandMdList from '@/components/widgets/RecommandMdList'
import Config from '@/configs/config.export'
import { BaseRes, eventData } from '@/constants/Apis/Types/ResponseType'
import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'


export default function Home() {
  
  const { baseUrl } = Config();
  const [ data, setData ] = useState<BaseRes>({} as BaseRes) 

  useEffect(()=>{

      axios.get(`${baseUrl}api/v1/recommend/active`)
      .then(res => {
       console.log(res)
       setData(res.data)
      })
      .catch(err => {
        console.log(err)
      })

  },[baseUrl])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainBanner />
      { 
        data.data && data.data.map( 
          (item: eventData) => <RecommandMdList key={item.id} data={item} />
        ) 
      }
      <ChunsikList />
    </>
  )
}
