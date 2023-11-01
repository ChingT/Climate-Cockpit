import styled from "styled-components";

export const StyledImage = styled.img`
  width: 40px;
  height: 40px;
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
  width: 21rem;
  background-color: ${(props) => props.theme.backgroundColors.secondary};
  border: 1px solid
    ${(props) => props.theme.backgroundColors.impactIconSelected};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  z-index: 1;
  padding: 10px;
  border-radius: 5px;
  gap: 1.4rem;
  height: 27rem;
`;

export const TitleAndImage = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

export const DropdownSelect = styled.select`
  width: 100%;
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
`;

export const SortingOption = styled.option`
  padding: 5px;
  background-color: white;
`;

export const SortingImage = styled.image`
  width: 35px;
  height: 35px;
`;

DropdownSort.displayName = "DropdownSort";
SortingOption.displayName = "SortingOption";
