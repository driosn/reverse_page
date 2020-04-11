import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../Layout';
import HomePage from '../../pages/HomePage/HomePage';
import ProblemsListPage from '../../pages/ProblemsListPage/ProblemsListPage';
import CategoryPage from '../../pages/CategoryPage/CategoryPage';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={ProblemsListPage}/>
                        <Route exact path="/home" component={HomePage}/>
                        <Route exact path="/category" component={CategoryPage}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;