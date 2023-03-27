import Head from 'next/head'
//import Image from 'next/image'
//import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

//const inter = Inter({ subsets: ['latin'] })


// create a multiplication table in next.js
// https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation


export async function getStaticProps() {
  const table = []
  for (let i = 1; i <= 10; i++) {
    const row = []
    for (let j = 1; j <= 10; j++) {
      row.push(i * j)
    }
    table.push(row)
  }
  return {
    props: {
      table,
    },
  }
}

export default function Home({ table }) {
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }
  return (

    <div className={styles.container}>
      <Head>
        <title>Multiplication Table</title>
        <meta name="description" content="Multiplication Table" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Multiplication Table</h1>
        <button onClick={toggle}class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Toggle Answers</button>
        <table border="0" cellSpacing="10" cellPadding="10">
          <tbody>
            {table.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  (i === 0 || (j == 0)) ? 
                    <td align="center" key={j}><div>{cell}</div></td> :

                    <td align="center" key={j}><div style={{
                      display: showMe?"block":"none"
                    }}>
                      {cell}
                    </div></td>

                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  )

}


