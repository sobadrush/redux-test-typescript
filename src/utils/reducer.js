
const initialState = {
    hitCount: 0
};

/* STEP3. resucer 會根據 action 做事 */
/* STEP4. index.tsx 中以 reducer 建立 store，故 reducer 的異動會直接影響 store */
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                hitCount: state.hitCount + 1
            };
        case 'DECREMENT':
            return {
                hitCount: state.hitCount - 1
            };
        default:
            return state;
    }
}

export default counterReducer;