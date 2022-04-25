import { createContext, useContext } from "react"

export interface IDeviceProperties {
    screenSize: number;
    isMobile: boolean;
}

export const DeviceContext = createContext<IDeviceProperties>({
    screenSize: 0,
    isMobile:false
});

export const useScreen = () => {
    const deviceProps = useContext(DeviceContext);
    if(!deviceProps){
        throw Error(`${DeviceContext.displayName}: You must call hook inside context`)
    }

    return deviceProps;
}
