import { useEffect, useState } from 'react';
import { generateMedia } from 'styled-media-query';

export enum MediaScreenTypes {
    Mobile = 'mobile',
    Tablet = 'tablet',
    XL_Tablet = 'xltablet',
    Desktop = 'desktop',
    XL_Desktop = 'xldesktop',
    XXL_Desktop = 'xxldesktop',
}

export const mediaBreakPoints = {
    [MediaScreenTypes.Mobile]: 480,
    [MediaScreenTypes.Tablet]: 768,
    [MediaScreenTypes.XL_Tablet]: 1024,
    [MediaScreenTypes.Desktop]: 1200,
    [MediaScreenTypes.XL_Desktop]: 1400,
    [MediaScreenTypes.XXL_Desktop]: 1600,
};

export const mediaQuery = generateMedia({
    mobile: `${mediaBreakPoints.mobile}px`,
    tablet: `${mediaBreakPoints.tablet}px`,
    xltablet: `${mediaBreakPoints.xltablet}px`,
    desktop: `${mediaBreakPoints.desktop}px`,
    xldesktop: `${mediaBreakPoints.xldesktop}px`,
    xxldesktop: `${mediaBreakPoints.xxldesktop}px`,
});
