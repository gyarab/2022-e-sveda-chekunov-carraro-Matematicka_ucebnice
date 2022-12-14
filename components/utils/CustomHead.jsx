import Head from 'next/head'
import {useEffect, useState} from "react";

/**
 * CUSTOM HEAD ELEMENT
 *
 * - component creates head of an application
 * - should be used on every route of the project except API routes
 *
 * @param title
 * @param themeColorLight
 * @param themeColorDark
 * @returns {JSX.Element}
 * @constructor
 */
const CustomHead = ({title, themeColorLight, themeColorDark}) => {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            setIsDark(event.matches);
        });
    }, [])

    return (
        <Head>
            <title>{title}</title>
            <meta
                name={"description"}
                content={"Matematická učebnice pro základní školy. Naučí učivo 6.třídy, 7.třídy, 8.třídy a 9.třídy."}
            />
            <meta
                name={"viewport"}
                content={"width=device-width, initial-scale=1.0"}
            />
            <meta
                name={"author"}
                content={'Jakub Švéda, Egor Čekunov, Nella Carraro'}
            />
            <meta name={'theme-color'} content={isDark ? themeColorDark : themeColorLight}/>
            <meta
                name={"msapplication-TileColor"}
                content={"#ffffff"}
            />
            <link
                rel={"apple-touch-icon"}
                sizes={"180x180"}
                href={"/apple-touch-icon.png"}
            />
            <link
                rel={"icon"}
                type={"image/png"}
                sizes={"32x32"}
                href={"/favicon-32x32.png"}
            />
            <link
                rel={"icon"}
                type={"image/png"}
                sizes={"16x16"}
                href={"/favicon-16x16.png"}
            />
            <link
                rel={"manifest"}
                href={"/site.webmanifest"}
            />
            <link
                rel={"mask-icon"}
                href={"/safari-pinned-tab.svg"}
                color={"#5bbad5"}
            />
        </Head>
    )
}

export default CustomHead