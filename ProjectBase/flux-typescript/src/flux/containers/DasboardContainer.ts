import { Container } from "flux/utils";
import DashboardtStore from "../stores/DashboardtStore";

/**
 * Declaration of all stores associated with this container.
 */
function getStores() {
    return [
        DashboardtStore,
    ];
}

/**
 * Declaration of all stated associated with this container.
 */
function getState() {
    return {
        dashboardState: DashboardtStore.getState()
    };
}

// export default Container.createFunctional(, getStores, getState);