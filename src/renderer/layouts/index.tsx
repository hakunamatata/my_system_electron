import React, {FC, Fragment} from "react";
import {Outlet} from "umi";
import {SettingModal} from "@/modals";
import {ConfigProvider, theme} from "antd";
import {useMemoizedFn} from "ahooks";
import styled from "styled-components";
import {useAppScale, useAppTheme} from "@/hooks";
const {useToken}=theme
const Layouts:FC = () => {
    useAppScale()
    const [appTheme,primaryColor] = useAppTheme()

    const renderTheme=useMemoizedFn(()=>{
        if(appTheme === "dark"){
            return theme.darkAlgorithm
        }
        return theme.defaultAlgorithm
    })

    return (
        <ConfigProvider
            theme={{
                algorithm: renderTheme(),
                token:{
                  colorPrimary:primaryColor
                }
            }}
            getPopupContainer={()=>document.getElementById("app-layout") as HTMLDivElement}
        >
            <LayoutContent/>
        </ConfigProvider>
    )
}
const LayoutContent:FC = () => {
    const {token} = useToken()
    return(
        <StyledLayouts
            dropBgColor={token.colorBgElevated}
            id={'app-layout'}>
            <Outlet/>
            <SettingModal/>
        </StyledLayouts>
    )
}
const StyledLayouts = styled.div<{dropBgColor:string}>`
  height: 100%;
  width: 100%;

  .dropdown-content {
    background: ${({dropBgColor})=>dropBgColor};
    box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
    0 9px 28px 8px rgb(0 0 0 / 5%);
    border-radius: 4px;
    width: 140px;
    word-break: break-all;
  }
  .dropdown-content .ant-dropdown-menu {
    box-shadow: none;
  }

`
export default Layouts