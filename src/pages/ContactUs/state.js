/**
 * mapStateToProps function to use with redux
 * @param state
 * @returns {{userInfo, locale}}
 */
export const mapStateToProps = (state) => ({
  locale: state.i18n.locale,
  userInfo: state.user.info,
});
