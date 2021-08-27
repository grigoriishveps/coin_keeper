import {
    CoinKeeperButton,
    CoinKeeperContainer,
    CoinKeeperWrapper, HeaderContainer,
    HeaderWrapper,

} from "./coin-keeper.styles";
import React from "react";
import {ReactComponent as LogoSVG} from '../../../assets/logo.svg'

const CoinKeeper: React.FC = ()=>{
    return (<CoinKeeperWrapper>

            <HeaderWrapper>
                <HeaderContainer>
                    <LogoSVG/>
                </HeaderContainer>
            </HeaderWrapper>

            <CoinKeeperContainer>
                <h3>Добро пожаловать на тестирование</h3>
                <h5>Нажмите на кнопку, чтобы открыть задание</h5>
                <CoinKeeperButton>Открыть задание</CoinKeeperButton>
            </CoinKeeperContainer>
    </CoinKeeperWrapper>
    )
}

export default CoinKeeper
