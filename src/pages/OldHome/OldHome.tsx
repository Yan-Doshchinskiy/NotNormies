import React, {useEffect, useMemo, useState, useCallback} from 'react';
import * as anchor from '@project-serum/anchor';

import styled from 'styled-components';
import {Container, Snackbar} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Alert from '@material-ui/lab/Alert';
import {PublicKey} from '@solana/web3.js';
import {useWallet} from '@solana/wallet-adapter-react';
import {WalletDialogButton} from '@solana/wallet-adapter-material-ui';
import {GatewayProvider} from '@civic/solana-gateway-react';
import {
    awaitTransactionSignatureConfirmation,
    CandyMachineAccount,
    CANDY_MACHINE_PROGRAM,
    getCandyMachineState,
    mintOneToken,
} from 'utils/candy-machine';
import { AlertState } from 'utils/utils';
import { Header } from 'components/Header/Header';
import { MintButton } from 'components/MintButton/MintButton';

const ConnectButton = styled(WalletDialogButton)`
  width: 100%;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 5px;
  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const MintContainer = styled.div``; // add your owns styles here

export interface HomeProps {
    candyMachineId?: anchor.web3.PublicKey;
    connection: anchor.web3.Connection;
    startDate: number;
    txTimeout: number;
    rpcHost: string;
}

export const OldHome = (props: HomeProps) => {
    const [isUserMinting, setIsUserMinting] = useState(false);
    const [candyMachine, setCandyMachine] = useState<CandyMachineAccount>();
    const [alertState, setAlertState] = useState<AlertState>({
        open: false,
        message: '',
        severity: undefined,
    });

    const {rpcHost, candyMachineId, connection, txTimeout} = props;
    const wallet = useWallet();

    const anchorWallet = useMemo(() => {
        const {publicKey, signAllTransactions, signTransaction} = wallet;
        return {
            publicKey,
            signAllTransactions,
            signTransaction,
        };
    }, [wallet]);

    const refreshCandyMachineState = useCallback(async () => {
        if (anchorWallet && candyMachineId) {
            try {
                const cndy = await getCandyMachineState(
                    // @ts-ignore
                    anchorWallet,
                    candyMachineId,
                    connection,
                );
                setCandyMachine(cndy);
            } catch (e) {
                // console.log('There was a problem fetching Candy Machine state');
                // console.log(e);
            }
        }
    }, [anchorWallet, candyMachineId, connection]);

    const onMint = async () => {
        try {
            setIsUserMinting(true);
            document.getElementById('#identity')?.click();
            if (wallet.connected && candyMachine?.program && wallet.publicKey) {
                const mintTxId = (
                    await mintOneToken(candyMachine, wallet.publicKey)
                )[0];

                let status: any = {err: true};
                if (mintTxId) {
                    status = await awaitTransactionSignatureConfirmation(
                        mintTxId,
                        txTimeout,
                        connection,
                        true,
                    );
                }

                if (status && !status.err) {
                    setAlertState({
                        open: true,
                        message: 'Congratulations! Mint succeeded!',
                        severity: 'success',
                    });
                } else {
                    setAlertState({
                        open: true,
                        message: 'Mint failed! Please try again!',
                        severity: 'error',
                    });
                }
            }
        } catch (error: any) {
            let message = error.msg || 'Minting failed! Please try again!';
            if (!error.msg) {
                if (!error.message) {
                    message = 'Transaction Timeout! Please try again.';
                } else if (error.message.indexOf('0x137')) {
                    message = `SOLD OUT!`;
                } else if (error.message.indexOf('0x135')) {
                    message = `Insufficient funds to mint. Please fund your wallet.`;
                }
            } else if (error.code === 311) {
                message = `SOLD OUT!`;
                window.location.reload();
            } else if (error.code === 312) {
                message = `Minting period hasn't started yet.`;
            }

            setAlertState({
                open: true,
                message,
                severity: 'error',
            });
        } finally {
            setIsUserMinting(false);
        }
    };

    useEffect(() => {
        refreshCandyMachineState();
    }, [
        anchorWallet,
        candyMachineId,
        connection,
        refreshCandyMachineState,
    ]);

    return (
        <Container style={{marginTop: 100}}>
            <Container maxWidth="xs" style={{position: 'relative'}}>
                <Paper
                    style={{padding: 24, backgroundColor: '#151A1F', borderRadius: 6}}
                >
                    {!wallet.connected ? (
                        <ConnectButton>Connect Wallet</ConnectButton>
                    ) : (
                        <>
                            <Header candyMachine={candyMachine}/>
                            <MintContainer>
                                {candyMachine?.state.isActive &&
                                candyMachine?.state.gatekeeper &&
                                wallet.publicKey &&
                                wallet.signTransaction ? (
                                    <GatewayProvider
                                        wallet={{
                                            publicKey:
                                                wallet.publicKey ||
                                                new PublicKey(CANDY_MACHINE_PROGRAM),
                                            // @ts-ignore
                                            signTransaction: wallet.signTransaction,
                                        }}
                                        gatekeeperNetwork={
                                            candyMachine?.state?.gatekeeper?.gatekeeperNetwork
                                        }
                                        clusterUrl={rpcHost}
                                        options={{autoShowModal: false}}
                                    >
                                        <MintButton
                                            candyMachine={candyMachine}
                                            isMinting={isUserMinting}
                                            onMint={onMint}
                                        />
                                    </GatewayProvider>
                                ) : (
                                    <MintButton
                                        candyMachine={candyMachine}
                                        isMinting={isUserMinting}
                                        onMint={onMint}
                                    />
                                )}
                            </MintContainer>
                        </>
                    )}
                </Paper>
            </Container>

            <Snackbar
                open={alertState.open}
                autoHideDuration={6000}
                onClose={() => setAlertState({...alertState, open: false})}
            >
                <Alert
                    onClose={() => setAlertState({...alertState, open: false})}
                    severity={alertState.severity}
                >
                    {alertState.message}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default OldHome;
