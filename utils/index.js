import checkPropTypes from "check-prop-types";


export const findByTestAtrr = (component, atrr) => {
  const wrapper = component.find(`[data-test='${atrr}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsError = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
  return propsError;
}
