import { ReduceStore } from 'flux/utils';
import Action from '../data/Action';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { Dasboard } from '../data/Dashboard';

class DashboardStore extends ReduceStore<Dasboard, Action> {
    constructor() {
        super(AppDispatcher);
    }

    getInitialState(): Dasboard {
        return new Dasboard();
    }

    reduce(state: Dasboard, action: Action) {
        switch (action.type) {
            default: return state;
        }
    }

}

export default new DashboardStore();