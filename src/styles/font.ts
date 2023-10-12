import { css } from 'styled-components';
export const fontFaces = css`
    /** Regular */
    @font-face {
        font-family: 'San Francisco';
        font-weight: 400;
        src: url('https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff');
    }

    /** Medium */
    @font-face {
        font-family: 'San Francisco';
        font-weight: 500;
        src: url('https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-medium-webfont.woff');
    }

    /** Semi Bold */
    @font-face {
        font-family: 'San Francisco';
        font-weight: 600;
        src: url('https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-semibold-webfont.woff');
    }

    /** Bold */
    @font-face {
        font-family: 'San Francisco';
        font-weight: 700;
        src: url('https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-bold-webfont.woff');
    }

    @font-face {
        font-family: 'Helvetica Now Display';
        src: local('Helvetica Now Display Medium'), local('Helvetica-Now-Display-Medium'),
            url('/assets/fonts/HelveticaNowDisplay-Medium.woff2') format('woff2'),
            url('/assets/fonts/HelveticaNowDisplay-Medium.woff') format('woff'),
            url('/assets/fonts/HelveticaNowDisplay-Medium.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
    }
`;
