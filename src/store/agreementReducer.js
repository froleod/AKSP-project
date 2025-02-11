const initialState = {
    agreed: false,
};

const AGREEMENT_TOGGLE = 'AGREEMENT_TOGGLE';

export const toggleAgreement = () => ({
    type: AGREEMENT_TOGGLE,
});

const agreementReducer = (state = initialState, action) => {
    switch (action.type) {
        case AGREEMENT_TOGGLE:
            return {
                ...state,
                agreed: !state.agreed,
            };
        default:
            return state;
    }
};

export default agreementReducer;
