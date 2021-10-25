import React, { ReactNode, useEffect, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Router from 'next/router';

Router.events.on('routeChangeComplete', (url) => {
  // @ts-ignore
  window.analytics.page(url)
})

interface IProps {  }

export default function Layout(props: React.PropsWithChildren<IProps>) {

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preload" href="/fonts/domaine-display-narrow-web-medium.woff2" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/domaine-display-narrow-web-regular-italic.woff2" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Garnett-Medium.woff2" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Garnett-Regular.woff2" as="font" crossOrigin="" />
      </Head>
      <Wrapper>
        { props.children }
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  
`;
