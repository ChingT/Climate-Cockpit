import styled from "styled-components";

export const StyledImage = styled.img`
  width: auto;
  height: 25px;
  cursor: pointer;
`;

export const DropdownLayout = styled.div`
  position: relative;
`;

export const DropdownContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  top: 100%;
  left: 0;
  width: 17rem;
  background-color: ${(props) => props.theme.backgroundColors.secondary};
  border: 1px solid
    ${(props) => props.theme.backgroundColors.impactIconSelected};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  z-index: 1;
  padding: 10px;
  border-radius: 5px;
  gap: 1.4rem;
  height: 21rem;
`;

export const TitleAndImage = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 0.5rem;

  img {
    height: 20px;
    width: auto;
  }
`;

export const DropdownSelect = styled.select`
  width: inherit;
  padding: 5px;
  margin-top: 0px;
  border: 1px solid ${(props) => props.theme.backgroundColors.lightGrayBorder};
  border-radius: 5px;
  background-color: white;
`;

export const DropdownSort = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContainerTop = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3rem;
`;

DropdownSort.displayName = "DropdownSort";
