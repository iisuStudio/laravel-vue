const path = require('path');

module.exports = {
    publicPath: '/assets/vue',
    outputDir: path.resolve(__dirname, '../../public/assets/vue'),
    indexPath: path.resolve(__dirname, '../../resources/views/vue.blade.php')
};
