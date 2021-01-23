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
    margin-top: 1rem;
    font-family: 'Rubik', sans-serif;

    .image{
        /* transform: rotate(-8deg); */
        margin: 0 auto;

        .img {
            position: relative;
        }
        
        img {
            max-width: 340px;
            border: 1rem solid white;
        }
        .hover-div {
            cursor: pointer;
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: #000;
            color: #fff;
            opacity: 0.8;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            p > i {
                font-size: 3rem;
            }
            p{
                text-transform: uppercase;
                margin: 0.2rem 0;
                font-family: 'Rubik', sans-serif;
                font-weight: 400;
                letter-spacing: 0.2rem;
            }
        }

        .hidden {
            display: none;
            visibility: hidden;
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
        .copyright {
            font-style: italic;
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