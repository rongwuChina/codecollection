
function deepclone(orign, target) {
    if (typeof orign[key] !== 'object') {
        //原始值直接赋值
        target = orign;
    } else {
        //如果是非原始值
        target = target || (orign instanceof Array) ?
            [] : {};
        for (var key in orign) {
            if (orign.hasOwnProperty(key)) {
                //过滤对象原型链上的属性
                if (typeof orign[key] === 'object') {
                    //非原始值
                    deepclone(orign[key], target[key]);
                } else {
                    //原始值直接赋值
                    target[key] = orign[key];
                }
            }
        }
    }
    return target;
}
