import '@testing-library/jest-dom'
global.ResizeObserver = class ResizeObserver {
    observe() {
        // do nothing here
    }

    unobserve() {
        // do nothing here
    }

    disconnect() {
        // do nothing here
    }
};