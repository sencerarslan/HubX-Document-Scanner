import styled from 'styled-components';

export const FooterStyled = styled.div`
    .footer {
        padding: 130px 0 32px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .copyright {
            font-size: 17px;
            color: rgb(0 0 0 / 70%);
        }
        .logo {
            & > img {
                height: 36px;
            }
        }
    }
`;
