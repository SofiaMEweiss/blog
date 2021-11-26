require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "blogg-contentful",
    },
    plugins: [
        "gatsby-plugin-sharp",
        "gatsby-plugin-image",
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `rb8rhzapqadb`,
                accessToken: `hJz671-i00fEytGLky-DtR_sV3z9MSXYTKShXQpzejk`,
                // accessToken: process.env.COONTENTFUL_ACCESS_TOKEN,
            },
        },
    ],
};