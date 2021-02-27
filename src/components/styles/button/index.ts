import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    margin: 4px 2px;
    padding: 0;
    min-height: 40px;
    height: 40px;
    color: ${theme.colors.white};
    font-size: 16px;
    font-weight: bold;
    background-color: ${theme.colors.black};
    border: 2px solid ${theme.colors.black};
    border-radius: 4px;
    cursor: pointer;
    opacity: 0.9;
    transition: ${theme.transition};

    &:focus {
      outline: none;
      border-color: ${theme.colors.blue};
    }

    &:hover {
      opacity: 0.6;
    }
  `}
`;
