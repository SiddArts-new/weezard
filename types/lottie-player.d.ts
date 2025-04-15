declare namespace JSX {
  interface IntrinsicElements {
    'dotlottie-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      src: string;
      background?: string;
      speed?: string | number;
      style?: React.CSSProperties;
      loop?: boolean;
      autoplay?: boolean;
    }, HTMLElement>;
  }
} 