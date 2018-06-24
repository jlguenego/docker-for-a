module.exports = (a) => {
    const { execute, log } = a;
    return {
        image: {
            list: 'docker images [...options]',
            delete: 'docker image rm <image>',
        },
        container: {
            list: 'docker container ls --all',
            empty: 'docker container prune --force',
            delete: 'docker container rm <container>',
            create: 'docker container create [...options]',

            start: 'docker container start [...options]',
            stop: 'docker container stop [...options]',
        }
    };
};