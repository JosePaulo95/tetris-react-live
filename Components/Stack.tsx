import { css, cx } from '@emotion/css';
import {
  CSSProperties,
  forwardRef,
  HTMLAttributes,
  memo,
  ReactNode,
} from 'react';

export type StackProps = {
  alignCenter?: true;
  alignNormal?: true;
  center?: true;
  children?: ReactNode;
  className?: string;
  end?: true;
  gap?: 2 | 16 | 32 | true;
  nowrap?: true;
  reverse?: true;
  selfCenter?: true;
  start?: true;
  stretch?: true;
  style?: CSSProperties;
  vertical?: true;
};

const Stack = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & StackProps
>(
  (
    {
      alignCenter,
      alignNormal,
      center,
      className,
      end,
      gap,
      nowrap,
      reverse,
      selfCenter,
      start,
      stretch,
      style,
      vertical,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        {...props}
        className={cx(
          baseStyle,
          vertical && verticalStyle,
          reverse && (vertical ? verticalReverseStyle : reverseStyle),
          center && centeredStyle,
          start && startStyle,
          end && endStyle,
          alignNormal && flexStartStyle,
          alignCenter && alignCenterStyle,
          selfCenter && selfCenterStyle,
          nowrap && nowrapStyle,
          stretch && stretchStyle,
          className,
        )}
        ref={ref}
        style={gap ? { ...style, gap: gap === true ? defaultGap : gap } : style}
      />
    );
  },
);

const defaultGap = 8;

const baseStyle = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const verticalStyle = css`
  flex-direction: column;
`;

const reverseStyle = css`
  flex-direction: row-reverse;
`;

const verticalReverseStyle = css`
  flex-direction: column-reverse;
`;

const centeredStyle = css`
  justify-content: center;
`;

const startStyle = css`
  justify-content: flex-start;
`;

const nowrapStyle = css`
  flex-wrap: nowrap;
`;

const endStyle = css`
  justify-content: flex-end;
`;

const flexStartStyle = css`
  align-items: flex-start;
`;

const alignCenterStyle = css`
  align-items: center;
`;

const stretchStyle = css`
  flex-grow: 1;
`;

const selfCenterStyle = css`
  align-self: center;
`;

Stack.displayName = 'Stack';
export default memo(Stack);
