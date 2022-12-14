import React, {FC, useState} from "react";
import {Avatar, Button, Descriptions, Divider, Input, Space, Spin, Typography} from "antd";
import {User} from "@/types/user";
import styled from "styled-components";
import {useModel} from "foca";
import userStore from "@/stores/user.store";



const { Text } = Typography;
interface IProps{
    user:User
}
const UserInfo:FC<IProps> = (props) => {
    const curUser = useModel(userStore,state => state.user)
    const {user}=props
    const [remark,setRemark]=useState<string>(user.nickname)
    const [senderDesc,setSenderDesc]=useState<string>(`我是 ${curUser?.nickname}`)

    return(
        <StyledInfoBox>
            <Descriptions
                column={1}
                size={"small"}
                title={(
                    <Space direction={"vertical"}>
                        {user.nickname}
                        <Text type="secondary">{user.username}</Text>
                    </Space>
                )}
                extra={<Avatar size={50} shape={"square"} src={user.avatar} />}
            >
                <Descriptions.Item label="个性签名" >
                    <Text type={"secondary"}>@todo</Text>
                </Descriptions.Item>
                <Descriptions.Item label={"邮箱"} >{user.email}</Descriptions.Item>
                <Descriptions.Item label="添加备注" >
                    <Input value={remark} onChange={(e)=>setRemark(e.target.value)} size={"small"} maxLength={20} placeholder={"在这里添加备注~"} />
                </Descriptions.Item>
                <Descriptions.Item label="发送申请" >
                    <Input.TextArea value={senderDesc} onChange={(e)=>setSenderDesc(e.target.value)} maxLength={50} size={"small"} autoSize={{maxRows:2,minRows:2}}  placeholder={"在这里添加备注~"} />
                </Descriptions.Item>
            </Descriptions>
            <Divider plain>
                <Button type={"primary"}>添加</Button>
            </Divider>
        </StyledInfoBox>
    )
}

export default UserInfo
const StyledInfoBox = styled.div`
  box-sizing: border-box;
  width: 350px;
  height: 300px;
  .ant-descriptions-item-content{
    display: unset!important;
  }
`