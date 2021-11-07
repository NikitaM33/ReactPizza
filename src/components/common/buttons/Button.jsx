import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ click, children, className, outline }) => {
  return (
    <button
      onClick={click}
      className={classNames(
        'button',
        className,
        outline,
        {
          'button--outline': outline
        }
      )}
    >{ children }</button>
  )
}

Button.propTypes = {
  click: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  outline: PropTypes.bool
}

export default Button;
