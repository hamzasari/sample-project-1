import { emptyUserInfo, setUserInfo } from '../../redux/actions/user';

/**
 * mapStateToProps function to use with redux
 * @param state
 * @returns {{userInfo}}
 */
export const mapStateToProps = (state) => ({
  /**
   * User information object in redux state
   */
  userInfo: state.user.info,
});

/**
 * mapDispatchToProps object to use with redux
 * @param dispatch
 * @returns {{dispatchEmptyUserInfo: dispatchEmptyUserInfo, dispatchSetUserInfo: dispatchSetUserInfo}}
 */
export const mapDispatchToProps = (dispatch) => ({
  /**
   * Method to set user information in redux state with dispatch function in redux
   * @param userInfo
   */
  dispatchSetUserInfo: (userInfo) => {
    dispatch(setUserInfo(userInfo));
  },
  /**
   * Method to empty user information in redux state with dispatch function in redux
   */
  dispatchEmptyUserInfo: () => {
    dispatch(emptyUserInfo());
  },
});
