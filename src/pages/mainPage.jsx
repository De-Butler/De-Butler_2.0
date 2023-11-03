    import MainHero1 from "./main/mainHero1";
    import { MainLogo } from "./main/mainLogo";
    import MainDescribe from "./main/mainDescribe";
    import { MainPartner } from "./main/mainPartner";
    export default function MainPage() {
        return(
            <>
            <MainLogo/>
            <MainDescribe/> 
            <MainPartner />
            </>
        );
    }