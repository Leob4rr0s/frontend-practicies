

import { maxWidth } from '@mui/system';
import Head from 'next/head'
import React, { FC, useState } from 'react'
import { Navbar, SideMenu } from '../ui';


interface Props {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
  
}


export const ShopLayout:FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
  
  const [open, setOpen] = useState<boolean>(false)

  const handleSide = () => {
    setOpen(!open)
    return open
  }



  return (
    <>
      <Head>
        <title>{ title }</title>

        <meta name='description' content={ pageDescription } />
        <meta name='og:title' content={ title } />
        <meta name='og:description' content={ pageDescription } />
        {
          imageFullUrl && (
            <meta name='og:image' content={ imageFullUrl } />
          )
        }
      </Head>

        <nav>
          <Navbar func={handleSide}/>
        </nav>

      <SideMenu />

      <main style={{
        margin: '80px auto',
        maxWidth:'1440px',
        padding:' 0px 30px'
      }}>
        { children }
      </main>

      <footer>

      </footer>

    </>
  )
}
