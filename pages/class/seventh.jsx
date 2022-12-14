import NavBar from "../../components/nav-bar/NavBar";
import CustomHead from "../../components/utils/CustomHead";
import {colorThemeDark, colorThemeLight, heroImageAltText, heroImagePath} from "../../lib/frontend-env-variables";
import CustomFooter from "../../components/utils/CustomFooter";
import HeroImage from "../../components/classes/HeroImage";

const SeventhClass = (props) => {
    return (
        <>
            <CustomHead
                title={'MU - sedmá třída'}
                themeColorLight={colorThemeLight}
                themeColorDark={colorThemeDark}
            />
            <main>
                <NavBar
                    activeRoute={'/class/seventh'}
                />
                <HeroImage
                    imagePath={heroImagePath}
                    altText={heroImageAltText}
                    description={'Sedmá třída'}
                />
                <div className={'container-fluid'}>

                </div>
            </main>
            <CustomFooter/>
        </>
    )
}

export default SeventhClass