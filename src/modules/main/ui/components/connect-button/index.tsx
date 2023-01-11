import React, { useContext } from "react";
import UIButton from "~/modules/shared-ui/button";
import MetaMaskIcon from "./metamask";
import UIIcon from "~/modules/shared-ui/icon";
import UITypography from "~/modules/shared-ui/typography";
import { formatID } from "~/modules/shared-ui/helpers/typography";
import { ConnectorContext } from "~/modules/main/contexts/ConnectorContext";


const MainComponentsConnectButton = (props: {className?:string}) => {
    const connection = useContext(ConnectorContext);
    if (connection?.account){
        return (
            <UIButton 
                className={props.className} 
                variant='primary-inverted' 
                onClick={connection?.onDisconnect}
                rounded
            >
                <MetaMaskIcon/>
                <UITypography>{formatID(connection.account, 15)}</UITypography>
                <UIIcon name='disconnect' size={16}/>
            </UIButton>
        )
    }
    return (
        <UIButton 
            className={props.className} 
            onClick={connection?.onConnect} 
            variant='primary'
        >
            Connect Wallet
        </UIButton>
    )
    
}

export default MainComponentsConnectButton
