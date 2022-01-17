import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ConfirmSendToken from '../confirm-send-token/confirm-send-token.component';
import ConfirmTokenTransactionBaseContainer from '../confirm-token-transaction-base';
import ConfirmTransactionBase from '../confirm-transaction-base/confirm-transaction-base.component';

const { useAssetDetails } = require('../../hooks/useAssetDetails');

export const ConfirmTokenTransactionSwitch = ({ transaction }) => {
  const {
    txParams: { data, to: tokenAddress, from: userAddress } = {},
  } = transaction;
  const {
    assetStandard,
    assetName,
    userBalance,
    tokenSymbol,
    decimals,
    tokenImage,
    toAddress,
    tokenAmount,
    tokenId,
  } = useAssetDetails(tokenAddress, userAddress, data);

  return (
    <Switch>
      <Route
        exact
        path={`${CONFIRM_TRANSACTION_ROUTE}/:id?${CONFIRM_APPROVE_PATH}`}
        component={ConfirmApprove}
      />
      <Route
        exact
        path={`${CONFIRM_TRANSACTION_ROUTE}/:id?${CONFIRM_TRANSFER_FROM_PATH}`}
        component={ConfirmTokenTransactionBaseContainer}
        ConfirmTokenTransactionBaseContainer
        // render={() => {
        //   <ConfirmTokenTransactionBaseContainer
        //     assetStandard={assetStandard}
        //     assetName={assetName}
        //     userBalance={userBalance}
        //     tokenSymbol={tokenSymbol}
        //     decimals={decimals}
        //     tokenImage={tokenImage}
        //     toAddress={toAddress}
        //     tokenAmount={tokenAmount}
        //     tokenId={tokenId}
        //   />;
        // }}
      />
      <Route
        exact
        path={`${CONFIRM_TRANSACTION_ROUTE}/:id?${CONFIRM_TOKEN_METHOD_PATH}`}
        component={ConfirmTransactionBase}
      />
      <Route
        exact
        path={`${CONFIRM_TRANSACTION_ROUTE}/:id?${CONFIRM_SEND_TOKEN_PATH}`}
        component={ConfirmSendToken}
      />
    </Switch>
  );
};
