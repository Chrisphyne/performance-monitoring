import './home.scss';

import React from 'react';
import { Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import { CRow } from '@coreui/react';

export type IHomeProp = StateProps;

export const Home = (props: IHomeProp) => {
  const { account } = props;
  return (
    <CRow>

          {account && account.login ? (
            <Alert color="success">
              <Translate contentKey="home.logged.message" interpolate={{ username: account.login }}>
                You are logged in as user {account.login}.
              </Translate>
            </Alert>
          ) : (
            <Alert color="warning">
              <p>Kindly log in to proceed</p>
            </Alert>
          )}

    </CRow>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Home);
