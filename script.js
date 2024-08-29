const levelOutput = [
    { level: 0, output: 0 },
    { level: 1, output: 720 },
    { level: 2, output: 1440 },
    // 加入其他等級的數據
    { level: 30, output: 21600 }
];

window.onload = function() {
    const container = document.getElementById('selects-container');
    for (let i = 1; i <= 5; i++) {
        const select = document.createElement('select');
        select.id = `factory${i}`;
        select.name = `factory${i}`;
        select.options.add(new Option('選擇等級', ''));
        levelOutput.forEach(item => {
            select.options.add(new Option(`等級 ${item.level}`, item.level));
        });
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
    document.getElementById('total-output').textContent = `總產出: ${total} 每小時`;

    const current = parseInt(document.getElementById('current-titanium').value) || 0;
    const needed = parseInt(document.getElementById('needed-titanium').value) || 0;
    const difference = needed - current;
    document.getElementById('difference').textContent = `你還差：${difference}`;

    const hoursNeeded = difference / total;
    document.getElementById('time-needed').textContent = `需要 ${hoursNeeded.toFixed(2)} 小時`;

    const upgradeTime = new Date(Date.now() + hoursNeeded * 3600000);
    document.getElementById('upgrade-time').textContent = `預計在：${upgradeTime.toLocaleString()}`;
}
