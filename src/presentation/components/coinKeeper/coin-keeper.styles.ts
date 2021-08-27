import styled from 'styled-components'

export const CoinKeeperWrapper = styled.div`
    height:100%;
    min-height: 100vh;
    background: #FFFFFF;
    
    h5,h3,h6,h4{
        margin: 0;
    }
    padding: 0 12px;
    text-align:center;
`




export const HeaderWrapper = styled.header`
    width: 100%;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 50px 0px;
    @media (max-width:600px){   
        padding: 21px 0px;
    }
`


export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 10px;
    @media (max-width:600px){   
        >svg{
            //transform: scale(0.66, 0.66);
            width: 167px;
        }
    }
`

export const CoinKeeperContainer = styled.div`
    width:100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h3{
        max-width: 611px;
        font-family: Roboto ;
        font-style: normal;
        font-weight: 500;
        font-size: 64px;
        line-height: 75px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: -0.05em;
        margin-bottom:38px;
     
        color: #182045;
        
        @media (max-width:600px){
            max-width: 296px;
            font-weight: 500;
            font-size: 32px;
            line-height: 37px;
            margin-bottom:24px;
        }

    }
    a{
        text-decoration: none;
    }
    
    h5{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 32px;
        line-height: 37px;
    
        letter-spacing: -0.05em;
        color: #182045;
        margin-bottom:72px;
        
         @media (max-width:600px){   
            font-size: 18px;
            line-height: 21px;
            margin-bottom:64px;
        }
    }
    
    
`




export const CoinKeeperButton = styled.button`
    width: 100%;
    max-width: 253px;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    text-align: center;
    letter-spacing: -0.32px;

    border: none;
    outline: none;
  
    background: #1576AC;
    color: #FFFFFF;
    
    :hover{
           background: #0a4e73;
    }
`
