import styled from 'styled-components';

const Button = styled.button`
    color: #1c28fa;
    font-size: 1em;
    margin-top: 1em;
    padding: 1em;
    border: 2px solid #1c28fa;
    border-radius: 10px;
    display: inline-block;
`;

function HomePage() {
    return (
        <>
            <div>Welcome to Next.js!</div>
            <Button href="#">Pog Botão</Button>
        </>
    );
}

export default HomePage;
