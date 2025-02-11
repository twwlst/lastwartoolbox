const levelOutput = [
    { level: 0, output: 0 }, 
    { level: 1, output: 720 },
    { level: 2, output: 1440 },
    { level: 3, output: 2160 },
    { level: 4, output: 2880 },
    { level: 5, output: 3600 },
    { level: 6, output: 4320 },
    { level: 7, output: 5040 },
    { level: 8, output: 5760 },
    { level: 9, output: 6480 },
    { level: 10, output: 7200 },
    { level: 11, output: 7920 },
    { level: 12, output: 8640 },
    { level: 13, output: 9360 },
    { level: 14, output: 10080 },
    { level: 15, output: 10800 },
    { level: 16, output: 11520 },
    { level: 17, output: 12240 },
    { level: 18, output: 12960 },
    { level: 19, output: 13680 },
    { level: 20, output: 14400 },
    { level: 21, output: 15120 },
    { level: 22, output: 15840 },
    { level: 23, output: 16560 },
    { level: 24, output: 17280 },
    { level: 25, output: 18000 },
    { level: 26, output: 18720 },
    { level: 27, output: 19440 },
    { level: 28, output: 20160 },
    { level: 29, output: 20880 },
    { level: 30, output: 21600 }
];

window.onload = function() {
    const container = document.getElementById('selects-container');
    for (let i = 1; i <= 5; i++) {
        const label = document.createElement('label');
        label.className = 'factory-label';
        label.textContent = `鈦合金工廠${i}：`;
        const select = document.createElement('select');
        select.id = `factory${i}`;
        select.name = `factory${i}`;
        select.options.add(new Option('選擇等級', ''));
        levelOutput.forEach(item => {
            select.options.add(new Option(`等級 ${item.level}`, item.level));
        });
        container.appendChild(label);
        container.appendChild(select);
        container.appendChild(document.createElement('br'));
    }
};

function calculateOutput() {
    let total = 0;
    for (let i = 1; i <= 5; i++) {
        const select = document.getElementById(`factory${i}`);
        const level = parseInt(select.value);
        const output = levelOutput.find(item => item.level === level).output;
        total += output;
    }
    document.getElementById('total-output').textContent = `每小時總產出: ${total}`;

    const current = parseInt(document.getElementById('current-titanium').value) || 0;
    const needed = parseInt(document.getElementById('needed-titanium').value) || 0;
    const difference = needed - current;
    document.getElementById('difference').textContent = `你還差：${difference}`;

    const hoursNeeded = difference / total;
    const hours = Math.floor(hoursNeeded); // 计算整数小时
    const minutes = Math.round((hoursNeeded - hours) * 60); // 计算剩余的分钟数
    document.getElementById('time-needed').textContent = `需要 ${hours} 小時 ${minutes} 分鐘`; // 显示小时和分钟

    const upgradeTime = new Date(Date.now() + hoursNeeded * 3600000);
    document.getElementById('upgrade-time').textContent = `預計可升級時間：${upgradeTime.toLocaleString()}`;
}
