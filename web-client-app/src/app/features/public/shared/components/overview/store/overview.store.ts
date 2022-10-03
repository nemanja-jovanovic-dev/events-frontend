import { ComponentStore } from "@ngrx/component-store";

interface State {
    loading: boolean;
}

const INITIAL_STATE: State = {
    loading: false,
}

export class OverviewStore extends ComponentStore<State> {
    constructor(){
        super(INITIAL_STATE)
    }
}
