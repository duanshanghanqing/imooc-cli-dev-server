const mongoose = require('mongoose');
mongoose.connect('mongodb://root@121.4.213.43:27017/berners?authSource=admin');
mongoose.connection.once('open', () => {
    console.log('数据库链接成功');
});

//1.链接数据库
function connectDb() {
    return mongoose;
}

module.exports = connectDb;
