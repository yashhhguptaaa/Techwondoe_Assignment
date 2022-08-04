import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  color: string;
  borderRadius: number;
  fontSize: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  color = 'white',
  borderRadius = 7,
  fontSize = `10px`,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      // eslint-disable-next-line prettier/prettier
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor, color, borderRadius, fontSize }}
      {...props}>
      {label}
    </button>
  );
};
