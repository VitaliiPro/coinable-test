import styled from 'styled-components'
import Arrow from '../public/Vector.svg'
import Mark from '../public/mark.svg'
import BREAKPOINTS from '../constants/breakpoints'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 5rem 15rem;
  margin: 0 auto;

  @media only screen and (max-width: ${BREAKPOINTS.xl}) {
    padding: 2rem 5rem;
  }

  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    padding: 1rem 0.8rem;
  }
`

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    margin-bottom: 1rem;
  }
`

export const StyledArrow = styled(Arrow)`
  cursor: pointer;
  color: var(--font-color);
  transform: rotate(0deg);
  margin-right: 0.9375rem;
`

export const LinkToPreviousPage = styled.h3`
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.25rem;
  color: var(--font-color);
`

export const InfoContainer = styled.div`
  width: 100%;
  height: 20.625rem;
  display: flex;

  @media only screen and (max-width: ${BREAKPOINTS.md}) {
    flex-direction: column;
    height: auto;
  }
`

export const AnimeImage = styled.img`
  border-radius: 0.625rem;
  width: 16.875rem;
  height: auto;

  @media only screen and (max-width: ${BREAKPOINTS.md}) {
    width: 100%;
    margin-bottom: 1rem;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding-left: 1.1875rem;

  @media only screen and (max-width: ${BREAKPOINTS.md}) {
    padding: 0;
  }
`

export const InfoTitleContainer = styled.div`
  display: flex;
  align-items: center;
`

export const InfoTitle = styled.h3`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.875rem;
  color: var(--font-color);
  margin: 0;
`

export const MarkIcon = styled(Mark)`
  margin-left: 0.625rem;
`

export const InfoContext = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`

export const Description = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.25rem;
`

export const DescriptionText = styled.p`
  margin: 0;
`
