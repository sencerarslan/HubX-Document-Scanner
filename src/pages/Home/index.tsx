import { HomePageStyled } from './styles';
import Header from '../../widgets/Header';
import DocumentScannerSlide from '../../widgets/DocumentScannerSlide';
import Footer from '../../widgets/Footer';

const HomePage = () => {
    return (
        <HomePageStyled>
            <Header />
            <DocumentScannerSlide />
            <Footer />
        </HomePageStyled>
    );
};
export default HomePage;
