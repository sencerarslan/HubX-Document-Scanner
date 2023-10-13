import { ReactElement } from 'react';
import { CardStyled, DocumentScannerSlideStyled } from './styles';
import SwipeableTabs, { DataProps } from '../../components/SwipeableTabs';

interface CardProps {
    subtitle: string;
    title: string;
}

const DocumentScannerSlide = (): ReactElement => {
    const Card = (item: CardProps) => {
        return (
            <CardStyled>
                <div className="card">
                    <div className="left"></div>
                    <div className="right">
                        <div className="sub-title">{item.subtitle}</div>
                        <div className="title">{item.title}</div>
                    </div>
                </div>
            </CardStyled>
        );
    };

    const data: DataProps[] = [
        {
            button: {
                icon: 'x',
                title: 'Document Scanner',
            },
            content: <Card title="Scan with Ease" subtitle="Document Scanner" />,
        },
        {
            button: {
                icon: 'x',
                title: 'Sign & Stamp',
            },
            content: <Card title="One-Tap Focus" subtitle="Sign & Stamp" />,
        },
        {
            button: {
                icon: 'x',
                title: 'Batch Scanning',
            },
            content: <Card title="Multiple Page Scan" subtitle="Batch Scanning" />,
        },
        {
            button: {
                icon: 'x',
                title: 'Advanced Filters',
            },
            content: <Card title="Unique Filters" subtitle="Advanced Filters" />,
        },
        {
            button: {
                icon: 'x',
                title: 'Export & Share',
            },
            content: <Card title="All-Round Conversion" subtitle="Export & Share" />,
        },
    ];

    return (
        <DocumentScannerSlideStyled>
            <SwipeableTabs data={data} />
        </DocumentScannerSlideStyled>
    );
};
export default DocumentScannerSlide;
