const server = require('./server');
const { PORT } = require('./common/config');

server.listen(PORT, () => console.info(`App is running on http://localhost:${PORT}`));
