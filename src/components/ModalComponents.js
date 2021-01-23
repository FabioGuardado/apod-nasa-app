import styled from '@emotion/styled';

export const Modal = styled.div`
    
    position: absolute;
    z-index: 100;
    background-color: #000;
    width: 100%;
    height: 100vh;
    border-radius: 5px;
    align-self: center;
    justify-self: center;
    display: grid;
    grid-template-rows: 60px 1fr;
    grid-template-columns: 1fr;

    .modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 2rem;

        h2 {
            font-size: 2rem;
            margin-left: 2rem;
            text-transform: uppercase;
            letter-spacing: 0.4rem;
            font-family: 'Rubik', sans-serif;
            color: #fff;
            font-style: italic;
        }

        button {
            display: flex;
            cursor: pointer;
            background-color: transparent;
            width: 40px;
            height: 40px;
            border: none;
            border-radius: 0;
            color: #fff;
            font-size: 2rem;
            margin: 0 1rem;
        }
    }

    .modal-body {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            max-height: 80vh;
        }
    }

    @media (max-width: 1024px) {
        height: 100%;
        max-width: auto;
        grid-template-rows: 80px auto;

        .modal-body {
            align-items: flex-start;
            
            img {
                margin-top: 4rem;
                max-width: 80vw;
            }
        }
    } 
    
`;