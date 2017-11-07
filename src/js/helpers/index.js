

export const getBreakpoint = () => {
    let breakpoint = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');

    return breakpoint;
};
