module.exports = {
    compiler: {
        // Uso do style-components com swc: https://stackoverflow.com/a/70429669/4879533
        styledComponents: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dkw5ssdvaqf8l.cloudfront.net',
            },
        ],
    },
};
