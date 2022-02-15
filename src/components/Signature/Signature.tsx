import React from "react";
import './Signature.scss';
import { ReactComponent as SignatureImg } from 'assets/img/signature.svg';

export const Signature = () => {
    return (
        <SignatureImg className="signature" />
    );
};

export default Signature;
