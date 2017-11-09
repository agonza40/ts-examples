
// Useful when something can be multiple types
let a: number | boolean;

// Useful for strict null checks
interface Nullable {
    nullableProperty: object | null;
}

// Useful with literal types

type OneOrZeroOrNegativeOne = -1 | 0 | 1;
type EventNames = 'click' | 'dblclick';

export interface ClickAction {
    type: 'click';
}

export interface InputAction {
    type: 'input';
    value: string;
}

export type Action = ClickAction | InputAction;

export interface State {
    timesClicked: number,
    value: string
}

export function update(state: State, action: Action): State {
    const nextState: State = {
        timesClicked: state.timesClicked,
        value: state.value
    };

    switch (action.type) {
        case 'click':
            nextState.timesClicked += 1;
        break;
        case 'input':
            nextState.value = action.value;
        break;
    }
    return nextState;
}
