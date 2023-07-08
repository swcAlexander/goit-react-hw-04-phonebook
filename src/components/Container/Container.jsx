import React from "react";
import { PropTypes } from "prop-types";

export const Container = ({ title, children }) => {
    return (<section>
        {title && <h2>{title}</h2>}
        {children}
    </section>)
}

Container.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}
