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