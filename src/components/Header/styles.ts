import styled from 'styled-components';

export const HeaderStyled = styled.div`
    .header {
        padding: 72px 0 100px 0;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        &-left {
            flex: 1;
        }
        &-right {
        }
        &-section {
            display: flex;
            flex-direction: column;
            gap: 5px;
            &-subtitle {
                font-family: 'Helvetica Now Display';
                font-size: 21px;
                font-weight: 400;
            }
            &-title {
                font-size: var(--font-title-size);
                font-weight: 800;
            }
        }
    }
`;
