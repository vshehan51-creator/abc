const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.export𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=9c94d0caae138672: process.env.SESSION_ID === undefined ? 'Your SESSION ID Put' : process.env.SESSION_ID,
PORT: process.env.PORT === undefined ? "8000" : process.env.PORT,
SESSION_NAME: process.env.PORT === undefined ? "asitha" : process.env.SESSION_NAME,
};
