export default async function NotFoundHandler(req, res) {
    return res.send({
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            error: 'Not found.'
        },
        statusCode: 404
    });
}
