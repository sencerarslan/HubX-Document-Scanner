import { useEffect, useState } from 'react';
import * as S from './styles';
import { Loading } from '../../components/Loading';

type LayoutProps = {
    children: React.ReactNode;
};

const BaseLayout = ({ children }: LayoutProps) => {
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 700);
    }, []);

    return loading ? <S.Main>{children}</S.Main> : <Loading />;
};

export default BaseLayout;
