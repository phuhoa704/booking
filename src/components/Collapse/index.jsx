import { useState, useRef, useEffect } from 'react';

const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState('0px');

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(isOpen ? `${contentRef.current.scrollHeight + 20}px` : '0px');
        }
    }, [isOpen]);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="accordion-item">
            <div
                style={{ cursor: 'pointer' }}
                className={"accordion-title text-base mb-2.5"}
                onClick={toggleAccordion}
                aria-expanded={isOpen ? 'true' : 'false'}
            >
                {title}
                <i className={`float-right fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
            </div>
            <div
                style={{ maxHeight: contentHeight, transition: 'max-height 0.3s ease', overflow: 'hidden' }}
                className={`accordion-content ${isOpen ? 'pt-3.5' : ''}`}
                ref={contentRef}
            >
                {content}
            </div>
        </div>
    );
}

export default Collapse;