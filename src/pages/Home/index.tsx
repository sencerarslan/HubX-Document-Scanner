import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import DocumentScannerSlide from '../../widgets/DocumentScannerSlide';
import { HomePageStyled } from './styles';

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
