    /**
     * 简介：
     * 下面用js简单的实现 在页面中实时展示当前的时间； 
     * 
     */
    let time = new Date();
    setInterval(() => {
        time = new Date();
        document.getElementById('time').innerHTML = `标准时间：${time}`; // 标准时间：Wed Apr 22 2020 18:53:43 GMT+0800 (中国标准时间)
        document.getElementById('time2').innerHTML = `转化后的时间：${time.toLocaleDateString()} ${time.toLocaleTimeString()}`; // 转化后的时间：2020/4/22 下午6:54:25
    }, 1000)
    document.getElementById('time').innerHTML = `标准时间：${time}`;
    document.getElementById('time2').innerHTML = `转化后的时间：${time.toLocaleDateString()} ${time.toLocaleTimeString()}`
    console.log(new Date()); // Wed Apr 22 2020 18:53:21 GMT+0800 (中国标准时间)