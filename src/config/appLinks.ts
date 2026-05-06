const supportEmail = import.meta.env.VITE_SUPPORT_EMAIL ?? 'hello@betterme.app';
const universalDownloadUrl =
    import.meta.env.VITE_DOWNLOAD_URL_UNIVERSAL ?? 'https://betterme.app/download';

const withPlatform = (platform: string) => `${universalDownloadUrl}?platform=${platform}`;

export const appLinks = {
    download: '/download#app-download',
    miniProgram: '/download#mini-program',
    pricing: '/pricing#premium-plans',
    solutions: '/solutions#plans-overview',
    stories: '/stories#story-list',
    aiCustomize: '/ai-customize#customize-studio',
    aiAssistant: '/ai-assistant',
    help: '/help',
    supportEmail: `mailto:${supportEmail}?subject=BetterMe%20Support`,
    appStore: import.meta.env.VITE_DOWNLOAD_URL_APPLE ?? withPlatform('ios'),
    googlePlay: import.meta.env.VITE_DOWNLOAD_URL_GOOGLE_PLAY ?? withPlatform('android-google'),
    huaweiStore: import.meta.env.VITE_DOWNLOAD_URL_HUAWEI ?? withPlatform('android-huawei'),
    xiaomiStore: import.meta.env.VITE_DOWNLOAD_URL_XIAOMI ?? withPlatform('android-xiaomi'),
    appBao: import.meta.env.VITE_DOWNLOAD_URL_APP_BAO ?? withPlatform('android-appbao'),
} as const;