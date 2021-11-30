export const slideIn = {
    hidden: {
        opacity: 0,
        x: -20,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
        },
    },
    exit: {
        opacity: 0,
        x: -20,
        transition: {
            duration: 1,
        },
    },
};

export const fade = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
};
export const scrollReveal = {
    hidden: {
        opacity: 0,
        scale: 1.2,
        transition: { duration: 0.5 },
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
        },
    },
};
