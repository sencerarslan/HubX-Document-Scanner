import React, { useState, useEffect } from 'react';
import { CircleCursorStyled } from './styles';
import classNames from 'classnames';

const CircleCursor: React.FC = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [clicked, setClicked] = useState<boolean>(false);
    const [linkHovered, setLinkHovered] = useState<boolean>(false);
    const [hidden, setHidden] = useState<boolean>(false);

    useEffect(() => {
        const checkIsMobile = (): boolean => {
            const ua = navigator.userAgent;
            return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
        };

        setIsMobile(checkIsMobile());

        const addEventListeners = (): void => {
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseenter', onMouseEnter);
            document.addEventListener('mouseleave', onMouseLeave);
            document.addEventListener('mousedown', onMouseDown);
            document.addEventListener('mouseup', onMouseUp);
        };

        const removeEventListeners = (): void => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseenter', onMouseEnter);
            document.removeEventListener('mouseleave', onMouseLeave);
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mouseup', onMouseUp);
        };

        const onMouseMove = (e: MouseEvent): void => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const onMouseDown = (): void => {
            setClicked(true);
        };

        const onMouseUp = (): void => {
            setClicked(false);
        };

        const onMouseLeave = (): void => {
            setHidden(true);
        };

        const onMouseEnter = (): void => {
            setHidden(false);
        };

        const handleLinkHoverEvents = (): void => {
            document.querySelectorAll('a').forEach((el) => {
                el.addEventListener('mouseover', () => setLinkHovered(true));
                el.addEventListener('mouseout', () => setLinkHovered(false));
            });
        };

        addEventListeners();
        handleLinkHoverEvents();

        return () => {
            removeEventListeners();
        };
    }, []);

    if (isMobile) return null;

    const cursorClasses: string = classNames('cursor', {
        'cursor--clicked': clicked,
        'cursor--hidden': hidden,
        'cursor--link-hovered': linkHovered,
    } as const);

    return (
        <CircleCursorStyled>
            <div className={cursorClasses} style={{ left: `${position.x}px`, top: `${position.y}px` }} />
        </CircleCursorStyled>
    );
};

export default CircleCursor;
