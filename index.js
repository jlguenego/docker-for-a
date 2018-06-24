module.exports = (a) => {
    const { execute, log } = a;
    return {
        image: {
            list: 'docker images',
            delete: 'docker image rm <image>',
        },
        container: {
            list: 'docker container ls --all',
        }
    };
};