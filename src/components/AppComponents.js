import styled from '@emotion/styled';

export const NavBar = styled.div`
    margin: 0 auto;
    color: white;
    
    .title {
        display: flex;
        align-items: center;

        span {
            text-transform: uppercase;
            letter-spacing: 0.5rem;
            font-size: 2rem;
            font-family: 'Rubik', sans-serif;
            font-weight: '700';
            font-style: italic;
            border-left: 3px solid white;
            padding-left: 2rem;
        }

    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 3rem;

    .image{

        img {
            max-width: 420px;
            border: 1rem solid white;
        }
    }
`;