const endpoint = {
    get: (req, res) => {
        const client_id = process.env.GITHUB_ID;
        const redirect_uri = 'http://localhost:4000/auth/github/callback';
        const githubAuthUrl = 'https://github.com/login/oauth/authorize?client_id=' + client_id + '&redirect_uri=' + redirect_uri;
        return res.redirect(githubAuthUrl);
    },
};

export default endpoint;
