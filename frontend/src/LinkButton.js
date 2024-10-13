// src/components/LinkButton.js

import React from 'react';
import PropTypes from 'prop-types';
import './LinkButton.css'; // Import the CSS for styling

const LinkButton = ({ onClick, children, className, style }) => {
    return (
        <button
            onClick={onClick}
            className={`link-button ${className}`}
            style={style}
        >
            {children}
        </button>
    );
};

LinkButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default LinkButton;
