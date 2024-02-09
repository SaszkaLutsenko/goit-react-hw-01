import styled from '@emotion/styled';

export const Container = styled.div`
  width: 250px;
  max-width: 300px;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 10px;
  overflow: hidden;
`;

export const Avatar = styled.img`
  margin-top: 15px;
  width: 150px;
  border-radius: 50%;
  background-color: white;
`;

export const StatsContainer = styled.ul`
  display: flex;
  background-color: gray;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
`;

export const StatsItem = styled.li`
  outline: 1px solid lightgray;
  text-align: center;
  padding: 10px;
  outline: 1px solid black;
  flex: 1;
`;

export const Description = styled.div`
  text-align: center;
`;

export const Info = styled.p`
  margin: 0;
`;