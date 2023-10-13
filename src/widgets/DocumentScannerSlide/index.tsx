import { ReactElement } from 'react';
import { CardStyled, DocumentScannerSlideStyled } from './styles';
import SwipeableTabs, { DataProps } from '../../components/SwipeableTabs';
import { useSelector } from 'react-redux';

interface CardProps {
    subtitle: string;
    title: string;
    content: string;
    screenshot: string;
    url: string;
}

const DocumentScannerSlide = (): ReactElement => {
    const activeTab = useSelector((state: any) => state.tabControl);
    const url = 'https://hubx.co';
    const Card = (item: CardProps) => {
        return (
            <CardStyled>
                <div className="card">
                    <div className="left">
                        <div className={`mobile active-tab-${activeTab}`}>
                            {activeTab === '1' && <div className="sacaner"></div>}
                            {activeTab === '2' && (
                                <>
                                    <div className="scale scale-1">
                                        <img src="/assets/images/scale-1.png" alt="scale 1" />
                                    </div>
                                    <div className="scale scale-2">
                                        <img src="/assets/images/scale-2.png" alt="scale 2" />
                                    </div>
                                </>
                            )}
                            {activeTab === '3' && (
                                <div className="document">
                                    <img src="/assets/images/file-document.png" alt="document 1" />
                                    <img src="/assets/images/file-document.png" alt="document 2" />
                                    <img src="/assets/images/file-document.png" alt="document 3" />
                                </div>
                            )}

                            <img src="/assets/images/iphone-frame.svg" className="frame" alt="iphone" />
                            <img src={item.screenshot} className="screenshot" alt="screenshot" />
                        </div>
                    </div>
                    <div className="right">
                        <div className="sub-title">{item.subtitle}</div>
                        <div className="title">{item.title}</div>
                        <div className="content">{item.content}</div>
                        <a href={item.url} target="_blank" className="button">
                            Learn More
                        </a>
                    </div>
                </div>
            </CardStyled>
        );
    };

    const data: DataProps[] = [
        {
            button: {
                icon: '/assets/images/icon-1.svg',
                title: 'Document Scanner',
            },
            content: (
                <Card
                    title="Scan with Ease"
                    subtitle="Document Scanner"
                    content="Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format."
                    url={url}
                    screenshot="/assets/images/screenshot-1.jpg"
                />
            ),
        },
        {
            button: {
                icon: '/assets/images/icon-2.svg',
                title: 'Sign & Stamp',
            },
            content: (
                <Card
                    title="One-Tap Focus"
                    subtitle="Sign & Stamp"
                    content="Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!"
                    url={url}
                    screenshot="/assets/images/screenshot-2.jpg"
                />
            ),
        },
        {
            button: {
                icon: '/assets/images/icon-3.svg',
                title: 'Batch Scanning',
            },
            content: (
                <Card
                    title="Multiple Page Scan"
                    subtitle="Batch Scanning"
                    content="Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document."
                    url={url}
                    screenshot="/assets/images/screenshot-3.jpg"
                />
            ),
        },
        {
            button: {
                icon: '/assets/images/icon-4.svg',
                title: 'Advanced Filters',
            },
            content: (
                <Card
                    title="Unique Filters"
                    subtitle="Advanced Filters"
                    content="Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters."
                    url={url}
                    screenshot="/assets/images/screenshot-3.jpg"
                />
            ),
        },
        {
            button: {
                icon: '/assets/images/icon-5.svg',
                title: 'Export & Share',
            },
            content: (
                <Card
                    title="All-Round Conversion"
                    subtitle="Export & Share"
                    content="Export your scans as PDF,JPG,ZIP,TXT and Word."
                    url={url}
                    screenshot="/assets/images/screenshot-1.jpg"
                />
            ),
        },
    ];

    return (
        <DocumentScannerSlideStyled>
            <SwipeableTabs data={data} />
        </DocumentScannerSlideStyled>
    );
};
export default DocumentScannerSlide;
