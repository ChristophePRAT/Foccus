import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState, useRef } from "react";
import { getColor, capitalize } from "./api/helpers";

export default function Home() {
    const [textColor, setTextColor] = useState("");
    const [thisColor, setColor] = useState("");
    const container = useRef(null);

    const changeName = () => {
        let localTextColor = getColor([textColor]);

        setTextColor(localTextColor);
        setColor(getColor([localTextColor, thisColor]));
        console.log(thisColor);
    };
    useEffect(() => {
        changeName();
        container.current.focus();
    }, []);

    return (
        <>
            {/* <Head>
        <title>Foccus</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Focus in less than a minute" />
        <meta name="theme-color" content="#000000" />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name="keywords" content="focus concentrate concentration foccus work" />


        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1BGDDQ0YGN"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1BGDDQ0YGN', { page_path: window.location.pathname });
            `,
          }}
        />
      </Head> */}
            <Head>
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <div
                className={styles.container}
                style={{ color: thisColor }}
                onClick={changeName}
                tabIndex="0"
                onKeyDown={changeName}
                ref={container}
            >
                <h1>{capitalize(textColor)}</h1>
            </div>
        </>
    );
}
