import styled from 'styled-components';

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    padding: 0px 20px 0px 20px;
    width: 100%;
    border-bottom: 1px solid gray;
    display: flex;
    align-items: center;
`;

export const Container = styled.div`
    margin: 20px;
    height: 90vh;
`;

export const BaseButton = styled.button`
    padding: 10px;
    margin: 5px;
    font-size: large;
    border: 0;
    border-radius: 4px;
`

export const HeaderButton = styled(BaseButton)`
    font-size: small;
    margin: 20px;
`;

export const TopLevelContainer = styled.div`
    background-color: ${(props) => props.isDarkmode ? props.theme.color.darkmode.background : props.theme.color.lightmode.background };
    height: 130vh;
    padding-top: 60px;

    header {
        background-color: ${(props) => props.isDarkmode ? props.theme.color.darkmode.background : props.theme.color.lightmode.background };
    }

    h2, h3 {
        padding-right: 10px;
        color: ${(props) => props.isDarkmode ? props.theme.color.darkmode.text : props.theme.color.lightmode.text }
    }

    div {
        color: ${(props) => props.isDarkmode ? props.theme.color.darkmode.text : props.theme.color.lightmode.text };
    }

    button {
        font-weight: 700;
        background-color: ${(props) => props.isDarkmode ? props.theme.color.darkmode.cta: props.theme.color.lightmode.cta };
        color: ${(props) => props.isDarkmode ? 'black': props.theme.color.lightmode.ctaText };

        :hover {
            background-color: ${(props) => props.isDarkmode ? 'lightblue' : 'darkred'}
        }
    }
`;

