const path = require('path');

module.exports = {
    publicPath: '/vue',
    outputDir: path.resolve(__dirname, '../../public/vue'),
    indexPath: path.resolve(__dirname, '../../resources/views/vue.blade.php')
};
