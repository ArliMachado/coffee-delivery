import styled from 'styled-components'
import backgroundBanner from '../../../../assets/background-banner.svg'

export const BannerContainer = styled.div`
  height: 34rem;
  display: flex;
  align-items: center;
  position: relative;
`

export const BannerBackgroud = styled.div`
  position: absolute;
  background-image: url(${backgroundBanner});
  height: 34rem;
  width: 100vw;
  margin-left: -10rem;
  background-repeat: no-repeat;
  background-size: contain;
`

export const BannerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`

export const BannerInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const BannerTitle = styled.div`
  display: flex;
  flex-direction: column;

  width: 36.75rem;

  strong {
    font-family: 'Baloo 2';
    font-size: 3rem;
    font-weight: 800;
    color: ${({ theme }) => theme['base-title']};
    line-height: 62.4px;
  }

  p {
    margin-top: 1rem;
    font-size: 1.25rem;
    color: ${({ theme }) => theme['base-subtitle']};

    line-height: 26px;
  }
`

export const BannerItens = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.25rem 2.5rem;

  margin-top: 4.125rem;
  width: 35.4rem;
`

const ITEM_COLORS = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

interface IBannerItemsProps {
  itemColor: keyof typeof ITEM_COLORS
}
export const BannerItem = styled.div<IBannerItemsProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    background: ${({ theme, itemColor }) => theme[ITEM_COLORS[itemColor]]};
    color: ${({ theme }) => theme.white};
  }

  p {
    color: ${({ theme }) => theme['base-text']};
  }
`
