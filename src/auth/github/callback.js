import axios from 'axios';

export default {
    get: async (req, res) => {
        const { code } = req.query;
        const client_id = process.env.GITHUB_ID;
        const client_secret = process.env.GITHUB_SECRET;

        try {
            const access_token = await axios.post('https://github.com/login/oauth/access_token', {
                client_id,
                client_secret,
                code,
            });
            let access_token_split = access_token.data.split('&')[0].split('=')[1];
            const userResponse = await axios.get('https://api.github.com/user', {
                headers: {
                    Authorization: `token ${access_token_split}`,
                },
            });

            return res.status(200).send(userResponse.data);
        } catch (error) {
            return res.status(400).json(error.data);
        }
    },
};
