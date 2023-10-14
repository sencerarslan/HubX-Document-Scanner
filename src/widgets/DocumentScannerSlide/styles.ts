import styled, { css } from 'styled-components';
import { mediaQuery } from '../../common/media';
export const Mobile = css`
    & > * {
        min-height: 100vh;
        display: flex;
        align-items: stretch;
    }
    .card {
        height: 100%;
        .right {
            min-height: 0;
            padding: 30px;
            flex: 1;
            .sub-title {
            }
            .title {
                margin-bottom: 13px;
            }
            .content {
                font-size: 14px;
                line-height: 28px;
            }
            .button {
                font-size: 14px;
                padding: 10px 15px;
            }
        }
        .left {
            margin-top: -150px;
            width: 100%;
            transform: scale(0.6);
            transform-origin: bottom center;
            margin-bottom: 100px;
            .mobile {
                bottom: -170px;
            }
        }
    }
`;
export const Tablet = css`
    & > * {
        min-height: 100vh;
    }
`;
export const XLTabletCardStyled = css`
    .card {
        flex-direction: column-reverse;
        .right {
            text-align: center;
            padding: 60px 30px;
            min-height: 400px;
        }
        .left {
            height: auto;
            margin-bottom: 90px;
            .mobile {
                position: relative;
                margin-top: -250px;
            }
        }
    }
`;

export const CardStyled = styled.div`
    .card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 400px;
        width: 100%;
        overflow: hidden;
        .left {
            flex: 1;
            position: relative;
            max-width: 600px;
            width: 100%;
            height: 600px;
            margin: auto;
            display: flex;
            justify-content: center;
        }
        .right {
            text-align: right;
            max-width: 570px;
            animation: fadeIn 1s ease-in-out reverse forwards;
            opacity: 0;
        }
        .sub-title {
            color: var(--primary-color);
            font-size: 16px;
            font-weight: 800;
            line-height: 40px;
            text-transform: uppercase;
        }
        .title {
            color: #0b122a;
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 20px;
        }
        .content {
            color: #0b122a;
            font-size: 20px;
            font-weight: 400;
            line-height: 32px;
            letter-spacing: 0.8px;
            margin-bottom: 20px;
        }
        .button {
            display: inline-block;
            position: relative;
            text-decoration: none;
            color: #0b122a;
            font-size: 20px;
            text-decoration: none;
            font-weight: 400;
            padding: 15px 20px;
            border: solid 1px rgb(0 0 0 / 16%);
            background-color: #fff;
            transition: color 0.3s;
            cursor: pointer;
            z-index: 1;
            overflow: hidden;
        }
        .button:after {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            height: 100%;
            background: #0b122a;
            content: '';
            z-index: -2;
            transition: transform 0.3s;
        }
        .button:hover {
            color: #fff;
        }

        .button:hover::after {
            transform: translateY(-100%);
            transition: transform 0.3s;
        }
    }

    .mobile {
        position: absolute;
        bottom: -270px;
        width: 365px;
        user-select: none;
        transform: translateY(100%);
        filter: brightness(0);
        animation: mobile-animation 1.4s ease-in-out forwards reverse;
        .frame {
            position: relative;
            z-index: 2;
            width: 100%;
        }
        .screenshot {
            background-color: #000;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 0;
            width: calc(100% - 20px);
            height: calc(100% - 28px);
            margin: 14px 10px;
            border-radius: 44px;
        }
    }

    .mobile.active-tab-1 {
        .sacaner {
            position: absolute;
            width: 250px;
            height: 200px;
            background: linear-gradient(transparent 0%, rgb(3 129 255 / 50%) 100%);
            z-index: 3;
            top: -150px;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            animation: sacaner 5s 1.1s infinite ease-in-out;
            &::after {
                content: '';
                width: 110%;
                height: 5px;
                background-color: rgb(43 149 255);
                border-radius: 3px;
                bottom: 0;
                left: -5%;
                right: 0;
                margin: auto;
                position: absolute;
                box-shadow: 0 2px 8px 3px #ffffff51;
            }
            @keyframes sacaner {
                10%,
                30%,
                50% {
                    height: 50px;
                }
                20%,
                40%,
                60% {
                    height: 200px;
                }
                70% {
                    opacity: 1;
                }
                80%,
                90% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }
        }
    }

    .mobile.active-tab-2 {
        .scale {
            position: absolute;
            border: solid 2px var(--primary-color);
            background-color: #fff;
            backdrop-filter: blur(8px);
            border-radius: 12px;
            padding: 15px;
            z-index: 3;
            animation: scale-animation 1s 0.4s ease-in-out;
            &::before,
            &::after {
                content: '';
                background-size: contain;
                width: 37px;
                height: 37px;
                position: absolute;
                z-index: 2;
            }
            &::before {
                background-image: url('/assets/images/edit-icon.svg');
                bottom: -15px;
                right: -15px;
            }
            &::after {
                background-image: url('/assets/images/delete-icon.svg');
                top: -15px;
                left: -15px;
            }
            &.scale-1 {
                top: 271px;
                left: -80px;
                img {
                    width: 150px;
                    height: 85px;
                    animation: scale-change-animation 2.5s 1.4s ease-in-out infinite;
                }
            }
            &.scale-2 {
                top: 171px;
                right: -80px;
                transition: transform 0.4s;
                &:hover {
                    transform: scale(1.1);
                }
                img {
                    width: 147px;
                    height: 113px;
                }
            }
            @keyframes scale-animation {
                0% {
                    transform: scale(0);
                }
                100% {
                    transform: scale(1);
                }
            }
            @keyframes scale-change-animation {
                30% {
                    width: 160px;
                    height: 95px;
                }
                50% {
                    width: 145px;
                    height: 95px;
                }
                90% {
                    width: 145px;
                    height: 95px;
                }
            }
        }
    }
    .mobile.active-tab-3 {
        .document {
            position: absolute;
            z-index: 3;
            bottom: 200px;
            left: -22px;
            right: 0;
            margin: auto;
            width: 290px;
            height: 410px;
            & > img {
                position: absolute;
                left: 0;
                right: 0;
                margin: auto;
                top: 340px;
                transform-origin: top;
                &:nth-child(1) {
                    transform: scale(0.8);
                    z-index: 1;
                    animation: document-animation 0.5s 0.6s ease-in-out forwards reverse;
                }
                &:nth-child(2) {
                    transform: scale(0.9);
                    z-index: 2;
                    margin-top: 15px;
                    animation: document-animation 0.6s 0.7s ease-in-out forwards reverse;
                }
                &:nth-child(3) {
                    transform: scale(1);
                    z-index: 3;
                    margin-top: 30px;
                    animation: document-animation 0.7s 0.8s ease-in-out forwards reverse;
                }
            }
            @keyframes document-animation {
                0% {
                    top: 0;
                }
                100% {
                    top: 340px;
                }
            }
        }
    }
    .mobile.active-tab-4 {
        .document {
            position: absolute;
            z-index: 3;
            bottom: 200px;
            left: -22px;
            right: 0;
            margin: auto;
            width: 290px;
            height: 410px;
            & > img {
                position: absolute;
                left: 0;
                right: 0;
                margin: auto;
                top: 0px;
                transform-origin: top;
                &:nth-child(1) {
                    z-index: 2;
                    animation: document-animation-1 4.5s 0.6s ease-in-out infinite reverse;
                }
                &:nth-child(2) {
                    z-index: 1;
                    left: 300px;
                    position: absolute;
                    top: 10px;
                    overflow: hidden;
                    width: 25px;
                    object-position: left;
                    object-fit: none;
                    height: 100%;
                }
            }
            .filter {
                background-size: 100%;
                width: 43px;
                height: 360px;
                position: absolute;
                background-color: rgb(138 138 138 / 80%);
                backdrop-filter: blur(38px);
                border-radius: 15px;
                overflow: hidden;
                opacity: 0;
                &:before {
                    content: '';
                    width: 3px;
                    height: calc(100% - 120px);
                    z-index: 5;
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    margin: 60px auto;
                    background-color: #fff;
                }
                .dot {
                    width: 3px;
                    height: 13px;
                    z-index: 5;
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 60px;
                    margin: 0 auto;
                    background-color: var(--primary-color);
                    &::after {
                        content: '';
                        width: 30px;
                        height: 30px;
                        z-index: 5;
                        border-radius: 100%;
                        position: absolute;
                        left: -13px;
                        right: 0;
                        top: -13px;
                        margin: auto;
                        background-color: #fff;
                    }
                }
            }
            .filter-1 {
                background-image: url(/assets/images/filter-bar-1.svg);
                z-index: 4;
                top: -32px;
                left: -54px;
                animation: fadeIn 1s ease-in-out 0.7s reverse forwards;
                .dot {
                    height: calc(60% - 60px);
                    animation: filter-animation-1 4.5s 0.6s ease-in-out infinite reverse;
                }
            }
            .filter-2 {
                background-image: url(/assets/images/filter-bar-2.svg);
                z-index: 4;
                top: -32px;
                right: -70px;
                animation: fadeIn 1s ease-in-out 0.9s reverse forwards;
            }
            @keyframes filter-animation-1 {
                0%,
                10% {
                    height: calc(60% - 60px);
                }
                40%,
                50% {
                    height: calc(40% - 60px);
                }
                90%,
                100% {
                    height: calc(60% - 60px);
                }
            }
            @keyframes document-animation-1 {
                0%,
                10% {
                    filter: brightness(1.5);
                }
                40%,
                50% {
                    filter: brightness(0.7);
                }
                90%,
                100% {
                    filter: brightness(1.5);
                }
            }
        }
    }
    .mobile.active-tab-5 {
        .export {
            position: absolute;
            margin: auto;
            left: -30px;
            right: 0;
            bottom: 20px;
            top: 0;
            height: 180px;
            width: 430px;
            z-index: 6;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            img {
                position: relative;
                opacity: 0;
                transform: scale(0);
                transform-origin: bottom right;
            }
            img:first-child {
                bottom: -15px;
                right: -20px;
                animation: export 0.4s 1.4s ease-in-out forwards reverse;
            }
            img:nth-child(2) {
                animation: export 0.4s 1.6s ease-in-out forwards reverse;
                bottom: -22px;
            }
            img:nth-child(3) {
                left: -20px;
                bottom: 20px;
                animation: export 0.4s 1.8s ease-in-out forwards reverse;
            }
            img:nth-child(4) {
                left: -30px;
                bottom: -22px;
                animation: export 0.4s 2s ease-in-out forwards reverse;
            }
            @keyframes export {
                0% {
                    opacity: 1;
                    transform: scale(1);
                }
                100% {
                    opacity: 0;
                    transform: scale(0);
                }
            }
        }
    }
    @keyframes mobile-animation {
        0% {
            filter: brightness(1);
            transform: translateY(0);
        }
        20% {
            filter: brightness(1);
            transform: translateY(-3%);
        }
        30% {
            filter: brightness(1);
        }
        50% {
            filter: brightness(0);
        }
        100% {
            filter: brightness(0);
            transform: translateY(100%);
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    ${mediaQuery.lessThan('xltablet')`${XLTabletCardStyled}`}
    ${mediaQuery.lessThan('mobile')`${Mobile}`}
`;

export const DocumentScannerSlideStyled = styled.div`
    background-color: #fff;
    ${mediaQuery.lessThan('tablet')`${Tablet}`}
`;
