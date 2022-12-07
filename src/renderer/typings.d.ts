import 'umi/typings';

declare global {
  interface Window {
    "electron"?: {
      versions:ElectronVersion
      appAction:(channel:"min"|"max"|"close")=>void
      platform:NodeJS.Platform
      scaleApp:(factor:number)=>void
    },
  }
}
