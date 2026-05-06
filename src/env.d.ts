/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPPORT_EMAIL?: string;
  readonly VITE_DOWNLOAD_URL_UNIVERSAL?: string;
  readonly VITE_DOWNLOAD_URL_APPLE?: string;
  readonly VITE_DOWNLOAD_URL_GOOGLE_PLAY?: string;
  readonly VITE_DOWNLOAD_URL_HUAWEI?: string;
  readonly VITE_DOWNLOAD_URL_XIAOMI?: string;
  readonly VITE_DOWNLOAD_URL_APP_BAO?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
