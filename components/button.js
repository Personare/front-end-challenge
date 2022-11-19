import styled from 'styled-components';

const MainButton = styled.button`
    font-family: inherit;
    font-size: 1em;
    line-height: 1em;
    font-weight: bold;

    padding: 1em 2em;
    cursor: pointer;
    border-radius: 50px;

    color: ${(props) => (props.black ? 'white' : '#0d0d0d')};
    background-color: ${(props) => (props.black ? '#0d0d0d' : '#f2ea7e')};
    border: 2px solid ${(props) => (props.black ? '#0d0d0d' : '#f2ea7e')};

    &:hover {
        border: 2px solid ${(props) => (props.black ? '#6e6e6e' : '#d1c848')} !important;
    }
`;

export default function Button(props) {
    return (
        <MainButton black={props.black} {...props}>
            {props.children}
        </MainButton>
    );
}
