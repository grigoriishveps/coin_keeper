import {
    CoinKeeperButton,
    CoinKeeperContainer,
    CoinKeeperWrapper, HeaderContainer,
    HeaderWrapper,

} from "./coin-keeper.styles";
import React from "react";
import {ReactComponent as LogoSVG} from '../../../assets/logo.svg'

interface CoinKeeperProps{
    link:string
}


const CoinKeeper: React.FC<CoinKeeperProps> = ({link}:CoinKeeperProps)=>{
    return (<CoinKeeperWrapper>

            <HeaderWrapper>
                <HeaderContainer>
                    <LogoSVG/>
                </HeaderContainer>
            </HeaderWrapper>

            <CoinKeeperContainer>
                <h3>Добро пожаловать на тестирование</h3>
                <h5>Нажмите на кнопку, чтобы открыть задание</h5>
                <a href={link}><CoinKeeperButton>Открыть задание</CoinKeeperButton></a>
            </CoinKeeperContainer>
    </CoinKeeperWrapper>
    )
}

export default CoinKeeper
