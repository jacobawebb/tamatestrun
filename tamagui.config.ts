import { config } from '@tamagui/config';

import { createTamagui, setupReactNative } from 'tamagui';

const appConfig = createTamagui(config);
export type AppConfig = typeof appConfig;
declare module 'tamagui' {
    interface TamaguiCustomConfig extends AppConfig { }
}
export default appConfig;