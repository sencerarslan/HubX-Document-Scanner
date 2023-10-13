import React from 'react';
import { LoadingStyled } from './index.styles';

const WrappedLoading = () => {
    return (
        <LoadingStyled>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </LoadingStyled>
    );
};

export const Loading = React.memo(WrappedLoading);
