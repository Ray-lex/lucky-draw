// 定义奖品及其概率
// "谢谢惠顾" 80%，其他奖品各约 6.67%
const prizePool = [
    { name: '谢谢惠顾', weight: 80 },
    { name: 'iPhone 16', weight: 6.67 },
    { name: '特斯拉', weight: 6.67 },
    { name: '咖啡', weight: 6.66 }
];

// 根据权重随机抽取一个奖品
const drawPrize = () => {
    const totalWeight = prizePool.reduce((sum, p) => sum + p.weight, 0);
    let random = Math.random() * totalWeight;

    for (const prize of prizePool) {
        random -= prize.weight;
        if (random <= 0) {
            return prize.name;
        }
    }
    return prizePool[0].name;
};

const winner = drawPrize();

// 计算奖品文字的长度（中文字符算2个宽度）
const getDisplayLength = (str) => {
    let len = 0;
    for (const char of str) {
        len += /[\u4e00-\u9fa5]/.test(char) ? 2 : 1;
    }
    return len;
};

const textLength = getDisplayLength(winner);
const width = textLength + 8; // 左右各留4个空格的边距
const borderLine = '┌' + '─'.repeat(width - 2) + '┐';
const bottomLine = '└' + '─'.repeat(width - 2) + '┘';

// 计算左边留白以居中显示
const leftPadding = Math.floor((width - 2 - textLength) / 2);
const rightPadding = (width - 2 - textLength) - leftPadding;

// 打印结果
console.log('\n' + borderLine);
console.log('│' + ' '.repeat(width - 2) + '│');
console.log('│' + ' '.repeat(leftPadding) + '★ ' + winner + ' ★' + ' '.repeat(rightPadding) + '│');
console.log('│' + ' '.repeat(width - 2) + '│');
console.log(bottomLine + '\n');

if (winner === '谢谢惠顾') {
    console.log('😢 很遗憾，' + winner + '，再接再厉！\n');
} else {
    console.log('🎉 恭喜！你抽中了：' + winner + ' 🎉\n');
}
