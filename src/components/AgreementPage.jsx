import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAgreement } from '../store/agreementReducer';

const AgreementPage = () => {
    const dispatch = useDispatch();
    const agreed = useSelector(state => state.agreed);

    const handleCheckboxChange = () => {
        dispatch(toggleAgreement());
    };

    return (
        <div>
            <h2>User Agreement</h2>
            <form>
                <label>
                    <input
                        type="checkbox"
                        checked={agreed}
                        onChange={handleCheckboxChange}
                    />
                    I agree to the terms and conditions
                </label>
                <button type="submit" disabled={!agreed}>
                    Submit Agreement
                </button>
            </form>
        </div>
    );
};

export default AgreementPage;
