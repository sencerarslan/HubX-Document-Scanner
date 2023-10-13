import { ReactElement } from 'react';
import { DocumentScannerSlideStyled } from './styles';
import SwipeableTabs from '../../components/SwipeableTabs';
import Container from '../../components/Container';

const DocumentScannerSlide = (): ReactElement => {
    const data = [
        {
            button: {
                icon: 'x',
                title: 'Document Scanner',
            },
            content: <div>test0</div>,
        },
        {
            button: {
                icon: 'x',
                title: 'Sign & Stamp',
            },
            content: <div>test1</div>,
        },
        {
            button: {
                icon: 'x',
                title: 'Batch Scanning',
            },
            content: <div>test2</div>,
        },
        {
            button: {
                icon: 'x',
                title: 'Advanced Filters',
            },
            content: <div>test3</div>,
        },
        {
            button: {
                icon: 'x',
                title: 'Export & Share',
            },
            content: <div>test4</div>,
        },
    ];

    return (
        <DocumentScannerSlideStyled>
            <SwipeableTabs data={data} />
        </DocumentScannerSlideStyled>
    );
};
export default DocumentScannerSlide;
