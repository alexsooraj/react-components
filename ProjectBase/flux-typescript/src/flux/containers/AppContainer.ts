import { Container } from "flux/utils";
import App from "../../App";

import LoginStore from "../stores/LoginStore";

/**
 * Declaration of all stores associated with this container.
 */
function getStores() {
  return [LoginStore];
}

/**
 * Declaration of all stated associated with this container.
 */
function getState() {
  return {
    sessionState: LoginStore.getState(),
  };
}

export default Container.createFunctional(App, getStores, getState);
