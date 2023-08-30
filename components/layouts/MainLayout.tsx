import React, { FC } from 'react';
import styles from './MainLayout.module.css';
import Head from 'next/head';
import { Navbar } from '../Navbar';

interface Props {
    children: any
}

export const MainLayout: FC<Props> = ({ children }) => {

    return (
        <div className={styles.container}>
            <Head>
            <title>Home - Jesús</title>
            <meta name="description" content="Home Page" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className={styles.main}>
                {children}
            </main>
        </div>
      )
}
