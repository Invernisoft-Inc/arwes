import { style, globalStyle } from '@vanilla-extract/css';
import { createFrameOctagonClip } from '@arwes/react';

export const root = style({
  position: 'relative',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  minHeight: 0
});

export const floating = style({});

export const frame = style({
  zIndex: 1,
  position: 'absolute',
  left: '50%',
  top: '2rem',
  bottom: '2rem',
  width: '100%',
  maxWidth: 900,
  transform: 'translate(-50%, 0)',
  clipPath: createFrameOctagonClip({
    squareSize: '1rem'
  })
});

globalStyle(`${frame} path`, {
  transitionProperty: 'color',
  transitionDuration: '200ms',
  transitionTimingFunction: 'ease-out'
});

globalStyle(`${frame} path[data-name="shape"]`, {
  color: 'hsla(180, 100%, 75%, 0.02)'
});

globalStyle(`${frame} path[data-name="decoration"]`, {
  color: 'hsla(180, 100%, 9%, 0.6)'
});

globalStyle(`${root}:hover ${frame} path[data-name="shape"]`, {
  color: 'hsla(180, 100%, 75%, 0.04)'
});

globalStyle(`${root}:hover ${frame} path[data-name="decoration"]`, {
  color: 'hsla(180, 100%, 9%, 0.8)'
});

export const overflow = style({
  zIndex: 2,
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  padding: '2rem 1rem',
  width: '100%',
  minHeight: 0
});

export const container = style({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  overflowY: 'auto',
  width: '100%',
  minHeight: 0
});

export const content = style({
  padding: '3rem',
  width: '100%',
  maxWidth: 900,

  // To create the container scroll padding bottom space.
  ':after': {
    content: '""',
    display: 'block',
    marginTop: '3rem',
    width: '100%',
    height: 1
  },

  selectors: {
    [`${floating} &`]: {
      padding: 0
    }
  }
});
