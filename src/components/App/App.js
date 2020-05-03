import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../Layout';
import HomePage from '../../pages/HomePage/HomePage';
import ProblemsListPage from '../../pages/ProblemsListPage/ProblemsListPage';
import CategoryPage from '../../pages/CategoryPage/CategoryPage';

import AuthPage from '../../pages/AuthPage/AuthPage';
import UChallenge from '../../pages/UploadChallengePage/UChallengePage';


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                    <Switch>
                        <Route exact path="/auth" component={AuthPage}/>
                        
                        <Switch>
                            <Layout>
                                <Route exact path="/" component={ProblemsListPage}/>
                                <Route exact path="/home" component={HomePage}/>
                                <Route exact path="/category" component={CategoryPage}/>
                                <Route exact path="/createChallenge" component={UChallenge}/>

                            </Layout>
                        </Switch>
                    </Switch>
            </BrowserRouter>
        );
    }
}

export default App;