import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState, useRef } from 'react'
import { getColor, capitalize }from './api/helpers'

export default function Home() {
  const [textColor, setTextColor ] = useState("");
  const [thisColor, setColor] = useState("");
  const container = useRef(null)
  const changeName = () => {
    let localTextColor = getColor([textColor]);

    setTextColor(localTextColor);
    setColor(getColor([localTextColor, thisColor]));
    console.log(thisColor)
  }
  useEffect(() => {
    changeName();
    container.current.focus();
  }, [])

  return (
    <>
      <Head>
        <title>Concentrate</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div 
        className={styles.container}
        style={{ color: thisColor }} 
        onClick={changeName}
        tabIndex="0"
        onKeyDown={changeName}
        ref={container}
      >
        <h1>
          {capitalize(textColor)}
        </h1>
      </div>
    </>
  )
}
