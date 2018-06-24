module.exports = (a) => {
    const { execute, log } = a;
    return {
        image: {
            list: 'docker images',
        },
    };
};