import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Компонент защищенного роута
 * @component
 * @param { Object } props
 * @param { JSX.Element } props.element - передаваемый компонент
 * @param { Array } props.props - дополнительные пропсы, передаваемые в компонент
 */
export const ProtectedRoute = ({ component: Component, ...props }) => {
  return props.isLogged ? (
    <Component {...props} />
  ) : (
    <Navigate to="/" replace />
  );
};

ProtectedRoute.propTypes = {
  Component: PropTypes.node,
  props: PropTypes.array,
};
