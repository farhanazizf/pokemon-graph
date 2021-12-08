import Skeleton from "@mui/material/Skeleton";
import React from "react";
import styled from "@emotion/styled";
import { mqLess } from "../../utils/media";

export const Styled = {
  SectionList: styled.section`
    padding: 12px 24px;
    flex-wrap: nowrap;

    div.listTitle {
      p {
        font-weight: 700;
        font-size: 24px;
      }
    }

    div.listWrapper {
      display: flex;
      width: 100%;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    div.emptyWrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      opacity: 0.5;

      margin-top: 50px;

      svg {
        font-size: 48px;
      }
    }
  `,
  ItemWrapper: styled.div`
    background: white;
    position: relative;
    cursor: pointer;
    margin: 1rem 0;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    min-height: 200px;
    max-height: 200px;
    overflow: hidden;

    max-width: 14rem;
    min-width: 14rem;

    div.ownedWrap {
      background: #1976d2;

      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;

      top: 5px;
      right: 5px;

      padding: 5px;
      border-radius: 8px;

      p {
        margin: 0;
        font-size: 8px;
        color: white;
      }
      p.quantity {
        font-weight: 700;
        font-size: 13px;
      }
    }

    ${mqLess["screen414"]} {
      max-width: 165px;
      min-width: 165px;
    }

    ${mqLess["screen375"]} {
      max-width: 150px;
      min-width: 150px;
    }
  `,
  ImgWrapper: styled.div`
    padding: 8px 12px;
    overflow: hidden;

    display: flex;
    justify-content: center;
    height: 90%;
    img.pokemon {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  `,
  DescWrapper: styled.div`
    // background: #f9f9f9;
    background-image: linear-gradient(
      to bottom,
      rgba(249, 249, 249, 0.3) 0%,
      rgba(255, 255, 255, 1)
    );
    position: absolute;
    padding: 12px;
    bottom: 0;
    border-radius: 10px;
    // width: 100%;
    max-width: 14rem;
    min-width: 14rem;
    display: flex;

    ${mqLess["screen414"]} {
      max-width: 165px;
      min-width: 165px;
    }

    ${mqLess["screen375"]} {
      max-width: 150px;
      min-width: 150px;
    }

    p {
      width: fit-content;
      margin: 0;
      margin-top: 5px;
    }
    p.pokemonName {
      font-weight: 700;
      font-size: 15px;
    }
    p.pokemonId {
      font-size: 13px;
    }
  `,
  SkeletonWrapper: styled.div`
    margin: 1rem 0;
    min-height: 200px;
    max-height: 200px;
    overflow: hidden;

    max-width: 14rem;
    min-width: 14rem;

    ${mqLess["screen414"]} {
      max-width: 165px;
      min-width: 165px;
    }

    ${mqLess["screen375"]} {
      max-width: 150px;
      min-width: 150px;
    }

    ${mqLess["screen360"]} {
      max-width: 150px;
      min-width: 150px;
    }
  `,
};

const CardPokemon: React.FC<{
  name: string;
  id: string;
  url: string;
  onClick?: () => void;
  owned?: number;
}> = ({ name = "", id, url, owned = 0, onClick }) => {
  return (
    <Styled.ItemWrapper onClick={onClick}>
      <Styled.ImgWrapper>
        <img
          className="pokemon"
          // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idRaw}.png`}
          src={url}
          alt={name}
        />
      </Styled.ImgWrapper>
      <Styled.DescWrapper>
        <div>
          <p className="pokemonId">#{id}</p>
          <p className="pokemonName">{name}</p>
        </div>
      </Styled.DescWrapper>

      {owned > 0 ? (
        <div className="ownedWrap">
          <p>OWNED</p>
          <p className="quantity">{owned}</p>
        </div>
      ) : null}
    </Styled.ItemWrapper>
  );
};

export const SkeletonCard: React.FC = () => {
  return (
    <Styled.SkeletonWrapper>
      <Skeleton variant="rectangular" width={160} height={160} />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
    </Styled.SkeletonWrapper>
  );
};

export default CardPokemon;
