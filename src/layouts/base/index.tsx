import * as S from './styles';

type LayoutProps = {
    children: React.ReactNode;
};

const BaseLayout = ({ children }: LayoutProps) => {
    return (
        <>
            <S.Main>{children}</S.Main>
        </>
    );
};

export default BaseLayout;
