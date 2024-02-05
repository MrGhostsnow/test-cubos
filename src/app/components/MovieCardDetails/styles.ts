"use client";
import styled from "styled-components";


export const ContainerMovieCard = styled.div`
  display: flex; 
  background-size: cover;
  background-position: center;
  transition: background 0.5s ease; 
  position: relative;
  margin-top: -35rem;

  &::before {
    content: ""; 
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(18, 17, 19, 0.6),
      rgba(18, 17, 19, 0.8),
      rgba(18, 17, 19, 0)
    );
  }
`;

export const ContainerCardInfos = styled.div`
  z-index: 1; 
  display: flex;
  flex-direction: row; 
  align-items: center; 
  display: flex;
  flex-wrap: wrap;
  width: 1530px;
  height: 600px;
  gap: 3rem;
  font-family: "Montserrat", sans-serif;
`;
export const  MoviePoster = styled.img`
  width: 350px;
  height: 542px;
  border-radius: 4px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
  margin-left: 2rem;
  `;	
export const  ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 500px;
  height: 606px;
`;
export const  SectionTitles = styled.div`
  display: flex;
  flex-direction: column;
  width: 466px;
  height: 138px;
  justify-content: space-between;
  margin-top: 1.0rem;
`;
export const  MovieTitle = styled.h3`
  width: 443px;
  height: 69px;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
`;
export const  MovieOriginalTitle = styled.p`
  width: 312px;
  height: 20px;
  top: 39px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.5px;
  color: #B5B2BC;
`;
export const  MovieCatchFrase = styled.p`
  width: 226px;
  height: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.5px;
  font-style: italic;
  color: #EEEEF0;
`;
export const  SectionDescription = styled.div`
  width: 417.75px;
  height: 300px;
  border-radius: 4px;
  padding: 16px;
  gap: 8px;
  background-color: rgba(35, 34, 37, 0.6);
`;
export const  ContainerTitle = styled.div`
  width: 75px;
  height: 20px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19.5px;
  color:#B5B2BC;
`;
export const  MovieDescription = styled.p`
  width: 385.75px;
  height: 240px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.5px;
  color: #EEEEF0;
`;
export const  SectionGenre = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 355px;
  height: 88px;
  border-radius: 4px;
  padding: 16px;
  gap: 8px;
  background-color: rgba(35, 34, 37, 0.6);
`;

export const Genres = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`;
export const  MovieGenre = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 31px;
  border-radius: 2px;
  padding: 8px;
  gap: 8px;
  background-color: rgba(193, 80, 255, 0.18);
`;
export const Genre = styled.p`
  height: 15px;
  font-weight: 600;
  font-size: 12px;
  line-height: 14.63px;
  color: rgba(236, 217, 250, 1);

`;
export const ContainerMoreInfos = styled.div`
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;
export const  SectionVotes = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  width: 500px;
  height: 110px;
`;
export const  MoviePopularity = styled.div`
  display: flex;
  flex-direction: column;
  width: 126px;
  height: 69px;
  border-radius: 4px;
  padding: 16px;
  gap: 8px;
  background-color: rgba(35, 34, 37, 0.75);
`;
export const PopularityTitle = styled.p`
  width: 104px;
  height: 15px;
  font-weight: 700;
  font-size: 12px;
  line-height: 14.63px;
  color: rgba(181, 178, 188, 1);
`;
export const  Popularity = styled.p`
  width: 104px;
  height: 14px;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: rgba(255, 255, 255, 1);
`;
export const  MovieVotes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 69px;
  border-radius: 4px;
  padding: 16px;
  gap: 8px;
  background-color: rgba(35, 34, 37, 0.75);
`;
export const  VotesTitle = styled.p`
  width: 44px;
  height: 15px;
  font-weight: 700;
  font-size: 12px;
  line-height: 14.63px;
  color: rgba(181, 178, 188, 1);
`;
export const  Votes = styled.p`
  width: 44px;
  height: 14px;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: rgba(255, 255, 255, 1);
`;
export const SectionMovieAverage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: #000;
    top: 0.1rem;
    left: 0.5rem;
    border: 4px solid rgba(255, 224, 0, 1);
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const MovieAverage = styled.p`
    display: block;
    color: rgba(255, 224, 0, 1);
    font-size: 25px;  
`;
export const  SectionGeneralInfos = styled.div`
  width: 500px;
  height: 247px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const SectionMovieInfos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 420px;
  height: 160px;
`;
export const  SectionLaunch = styled.div`
  width: 200px;
  height: 72px;
  border-radius: 4px;
  padding: 16px;
  gap: 10px;
  background-color: rgba(35, 34, 37, 0.75);
`;
export const  LaunchTitle = styled.p`
  width: 91px;
  height: 15px;
  font-weight: 700;
  font-size: 12px;
  line-height: 12.63px;
  color: rgba(181, 178, 188, 1);
`;
export const  Launch = styled.p`
  width: 168px;
  height: 17px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17.07px;
  color: rgba(238, 238, 240, 1);
`;
export const SectionRuntime = styled.div`
  width: 200px;
  height: 72px;
  border-radius: 4px;
  padding: 16px;
  gap: 10px;
  background-color: rgba(35, 34, 37, 0.75);
`;
export const RuntimeTitle = styled.p`
  width: 91px;
  height: 15px;
  font-weight: 700;
  font-size: 12px;
  line-height: 12.63px;
  color: rgba(181, 178, 188, 1);
`;
export const Runtime = styled.p`
  width: 168px;
  height: 17px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17.07px;
  color: rgba(238, 238, 240, 1);
`;
export const SectionStatus  = styled.div`
  width: 200px;
  height: 72px;
  border-radius: 4px;
  padding: 16px;
  gap: 10px;
  background-color: rgba(35, 34, 37, 0.75);
  `;
export const  StatusTitle = styled.p`
  width: 91px;
  height: 15px;
  font-weight: 700;
  font-size: 12px;
  line-height: 12.63px;
  color: rgba(181, 178, 188, 1);
  `;
export const Status = styled.p`
  width: 168px;
  height: 17px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17.07px;
  color: rgba(238, 238, 240, 1);
  `;
export const SectionOriginalLanguage = styled.div`
  width: 200px;
  height: 72px;
  border-radius: 4px;
  padding: 16px;
  gap: 10px;
  background-color: rgba(35, 34, 37, 0.75);
  `;
export const  OriginalLanguageTitle = styled.p`
  width: 91px;
  height: 15px;
  font-weight: 700;
  font-size: 12px;
  line-height: 12.63px;
  color: rgba(181, 178, 188, 1);
  `;
export const OriginalLanguage = styled.p`
  width: 168px;
  height: 17px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17.07px;
  color: rgba(238, 238, 240, 1);
  `;
export const SectionMoney = styled.div`
    display: flex;
    width: 420px;
    height: 72px;
    gap: 16px;
  `;
export const SectionBudget = styled.div`
  width: 138.58px ;
  height: 72px;
  border-radius: 4px;
  padding: 16px;
  gap: 8px;
  background-color: rgba(35, 34, 37, 0.75);
  `;
export const BudgetTitle = styled.p`
  width: 84px;
  height: 15px;
  font-weight: 700;
  font-size: 12px;
  line-height: 12.63px;
  color: rgba(181, 178, 188, 1);
  `;
export const Budget = styled.p`
  width: 106.58px;
  height: 17px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17.07px;
  color: rgba(238, 238, 240, 1);
  `;
export const  SectionRevenue = styled.div`
  width: 138.58px ;
  height: 72px;
  border-radius: 4px;
  padding: 16px;
  gap: 8px;
  background-color: rgba(35, 34, 37, 0.75);
  `;
export const  RevenueTitle = styled.p`
  width: 84px;
  height: 15px;
  font-weight: 700;
  font-size: 12px;
  line-height: 12.63px;
  color: rgba(181, 178, 188, 1);
  `;
export const Revenue = styled.p`
  width: 106.58px;
  height: 17px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17.07px;
  color: rgba(238, 238, 240, 1);
  `;
export const SectionProfit = styled.div`
  width: 138.58px ;
  height: 72px;
  border-radius: 4px;
  padding: 16px;
  gap: 8px;
  background-color: rgba(35, 34, 37, 0.75);
  `;
export const ProfitTitle = styled.p`
  width: 84px;
  height: 15px;
  font-weight: 700;
  font-size: 12px;
  line-height: 12.63px;
  color: rgba(181, 178, 188, 1);
  `;
export const  Profit = styled.p`
  width: 106.58px;
  height: 17px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17.07px;
  color: rgba(238, 238, 240, 1);
  `;
