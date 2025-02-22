import type { CSSProperties, HTMLProps, SVGProps } from 'react';
import type { MotionKeyframesDefinition, AnimationOptionsWithOverrides } from '@motionone/dom';
import type { AnimatorState } from '@arwes/animator';

export interface AnimatedCSSPropsShorthands {
  x?: number | string
  y?: number | string
  z?: number | string
  rotate?: number | string
  rotateX?: number | string
  rotateY?: number | string
  rotateZ?: number | string
  skew?: number | string
  skewX?: number | string
  skewY?: number | string
  scale?: number | string
  scaleX?: number | string
  scaleY?: number | string
  scaleZ?: number | string
}

export type AnimatedCSSProps = Omit<CSSProperties, keyof AnimatedCSSPropsShorthands> & AnimatedCSSPropsShorthands;

export type AnimatedSettingsTransitionDefinition = MotionKeyframesDefinition & {
  duration?: number
  easing?: AnimationOptionsWithOverrides['easing']
  options?: AnimationOptionsWithOverrides
};

export interface AnimatedSettingsTransitionFunctionConfig {
  element: HTMLElement | SVGElement
  duration: number
}

export interface AnimatedSettingsTransitionFunctionReturn {
  stop: () => void
}

export type AnimatedSettingsTransitionFunction =
  | ((config: AnimatedSettingsTransitionFunctionConfig) => AnimatedSettingsTransitionFunctionReturn)
  | ((config: AnimatedSettingsTransitionFunctionConfig) => void);

export type AnimatedSettingsTransitionTypes = AnimatedSettingsTransitionFunction | AnimatedSettingsTransitionDefinition;

export type AnimatedSettingsTransition = AnimatedSettingsTransitionTypes | AnimatedSettingsTransitionTypes[];

export interface AnimatedSettings<A extends HTMLProps<HTMLElement> | SVGProps<SVGElement> = HTMLProps<HTMLDivElement>> {
  initialAttributes?: A
  initialStyle?: AnimatedCSSProps
  transitions?: {
    [P in AnimatorState]?: AnimatedSettingsTransition | undefined
  } & {
    [P in string]?: AnimatedSettingsTransition | undefined
  }
};

export type AnimatedProp<A extends HTMLProps<HTMLElement> | SVGProps<SVGElement> = HTMLProps<HTMLDivElement>> =
  AnimatedSettings<A> | Array<AnimatedSettings<A> | undefined> | undefined;

export type AnimatedAnimation = AnimatedSettings | AnimatedSettings[];

export type AnimatedAnimations = { [P in AnimatorState]?: AnimatedAnimation };

export type AnimatedAnimationsCreatorFunction<P = undefined> = (props: P) => AnimatedAnimations;

export type AnimatedAnimationsCreator<P = undefined> = undefined | false | AnimatedAnimations | AnimatedAnimationsCreatorFunction<P>;
