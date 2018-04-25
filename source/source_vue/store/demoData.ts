export interface DemoList {
    name: string;
    href: string;
    sourceHref: string;
}

export interface DemoMap {
    [index: string]: DemoList[]
}

const transform_lists: DemoList[] = [
    { name: '长方体点击渐次翻转特效', href: 'cubicSpin.html', sourceHref: '' },
    { name: '立方体', href: 'cube.html', sourceHref: '' },
    { name: '立方体点击旋转', href: 'rotateY.html', sourceHref: '' },
    { name: '六棱柱', href: 'hexagon.html', sourceHref: '' },
    { name: '图片环', href: 'picRing.html', sourceHref: '' },
    { name: '时钟', href: 'clock.html', sourceHref: '' },
    { name: '图片爆炸效果', href: 'bomb.html', sourceHref: '' },
    { name: '图片立体翻页', href: 'pageTurning.html', sourceHref: '' },
    { name: '图片局部翻转', href: 'turn.html', sourceHref: '' },
    { name: '立体切换效果', href: 'cubicSwitch.html', sourceHref: '' },
    { name: '进度条', href: 'progressBar.html', sourceHref: '' },
    { name: '滑动解锁', href: 'unlockBar.html', sourceHref: '' },
    { name: '文字渐入', href: 'showAnimation.html', sourceHref: '' }
];

const media_lists: DemoList[] = [
    { name: '捕鱼达人', href: 'fishingjoy/fishing.html', sourceHref: '' },
    { name: '屏保', href: 'screenSaver.html', sourceHref: '' },
    { name: '钢琴', href: 'piano.html', sourceHref: '' },
];

const DEMO_MAP: DemoMap = {
    transform: transform_lists,
    media: media_lists
};

const DEMO_CATEGORIES = ['transform', 'media']

for (let c of DEMO_CATEGORIES)
    for (let d of DEMO_MAP[c]) {
        const href = d.href;
        d.href = `/demo/${c}/${href}`;
        d.sourceHref = `https://github.com/yukilu/demo/blob/master/HTML5%26CSS3/${c}/${href}`;
    }

export const TABS = ['Blog', 'Demo', 'Poem', 'About'];

export { DEMO_CATEGORIES, DEMO_MAP };