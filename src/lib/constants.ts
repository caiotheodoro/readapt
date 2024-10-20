import { IReactReaderStyle, ReactReaderStyle } from "react-reader";

export const MAX_FILE_SIZE = 8 * 1024 * 1024; // 8MB


export const grayscaleReaderTheme: IReactReaderStyle = {
  ...ReactReaderStyle,
  arrow: {
    ...ReactReaderStyle.arrow,
    color: '#000',
  },
  arrowHover: {
    ...ReactReaderStyle.arrowHover,
    color: '#222',
  },
  readerArea: {
    ...ReactReaderStyle.readerArea,
    background: 'rgba(226, 226, 226,0.8), url(https://grainy-gradients.vercel.app/noise.svg)',
    transition: undefined,
  },
  titleArea: {
    ...ReactReaderStyle.titleArea,
    color: '#000',
  },
  tocArea: {
    ...ReactReaderStyle.tocArea,
    background: '#2e2e2e',
  },
  tocButtonExpanded: {
    ...ReactReaderStyle.tocButtonExpanded,
    background: 'transparent',
  },
  tocButtonBar: {
    ...ReactReaderStyle.tocButtonBar,
    background: '#2e2e2e',
  },
  tocButton: {
    ...ReactReaderStyle.tocButton,
    color: '#fff',
  },
}