import styled from '@emotion/styled';

export const NavBar = styled.div`
    margin: 0 auto;
    color: white;
    
    .title {
        display: flex;
        align-items: center;

        img {
            height: 120px;
        }

        span {
            text-transform: uppercase;
            letter-spacing: 0.5rem;
            font-size: 2rem;
            font-family: 'Rubik', sans-serif;
            font-weight: 700;
            font-style: italic;
            border-left: 3px solid white;
            padding-left: 2rem;
        }

    }
    @media (max-width: 1024px) {

        img {
            height: 90px;
        }

        span{
            font-size: 1.8rem;
        }
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    font-family: 'Rubik', sans-serif;

    .image{
        /* transform: rotate(-8deg); */
        margin: 0 auto;
        img {
            max-width: 340px;
            border: 1rem solid white;
        }
    }
    .info {
        color: #fff;

        h2 {
            font-size: 1.9rem;
            font-style: italic;
            font-weight: 700;
            text-transform: uppercase;
        }

        .date{
            font-weight: 400;
        }

        p{
            margin: 1rem 0;
            font-size: 1.1rem;
            font-weight: 300;
        }
    }

    @media screen and (max-width: 1024px) {
        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns: 1fr;
        margin-top: 0;

        .image {
            transform: none;
            margin: 2rem auto;

            img {
                max-width: 75vw;
            }
        }
        .info {
            padding: 0 2rem;
        }
    }
`;