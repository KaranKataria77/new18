export const config = { amp: "hybrid" };

import dynamic from 'next/dynamic';

const Header = dynamic(() => import('widgets/Desktop/header'))
const Footer = dynamic(() => import('widgets/Desktop/footer'),{ssr:false})

const Layout = ({ children }) => {    

    return (
        <div className={`container 'non-amp-container`}>
            <Header /> 
            <div className={`allWrap`}>
                <div className={"wrapper"}>
                    <div className={`centerBar`}>{children}</div>
                </div>
            </div>
            <Footer  />
        </div>
    );
};

export default Layout;