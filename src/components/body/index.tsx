import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { FaKeyboard } from 'react-icons/fa';
import * as S from './body';

export default function Body() {
  return (
    <S.BodyContainer>
      <S.LogoContainer>
        <span style={{ color: '#4285f4' }}>G</span>
        <span style={{ color: '#ea4335' }}>o</span>
        <span style={{ color: '#fbbc05' }}>o</span>
        <span style={{ color: '#4285f4' }}>g</span>
        <span style={{ color: '#34a853' }}>l</span>
        <S.E id="e" style={{ color: '#ea4335' }}>
          e
        </S.E>
      </S.LogoContainer>
      <S.SearchContainer>
        <S.SearchIconContainer>
          <S.Search>
            <IoIosSearch id="search" size={20} />
          </S.Search>
        </S.SearchIconContainer>
        <S.InputContainer type="text" />
        <S.KeyboardContainer>
          <S.Keyboard>
            <FaKeyboard id="keyboard" size="20" />
          </S.Keyboard>
        </S.KeyboardContainer>
        <S.MicContainer>
          <S.MicSvg>
            <path
              d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
              fill="#4285f4"
            ></path>
            <path d="m11 18.08h2v3.92h-2z" fill="#34a853"></path>
            <path
              d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
              fill="#f4b400"
            ></path>
            <path
              d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
              fill="#ea4335"
            ></path>
          </S.MicSvg>
        </S.MicContainer>
      </S.SearchContainer>
      <S.ButtonsContainer>
        <button>Pesquisa Google</button>
        <button>Estou com sorte</button>
      </S.ButtonsContainer>
      <div className="textContainer">
        <S.TextContainer>
          Disponibilizado pelo Google em:{' '}
          <S.TextContainerSpan>English</S.TextContainerSpan>
        </S.TextContainer>
      </div>
    </S.BodyContainer>
  );
}
