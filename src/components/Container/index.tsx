import { CSSProperties, ReactElement } from 'react';
import * as S from './styles';

type ContainerProps = {
    children: React.ReactNode;
    style?: CSSProperties;
};

const Container = ({ children, style }: ContainerProps): ReactElement => {
    return <S.Wrapper style={style}>{children}</S.Wrapper>;
};

export default Container;
