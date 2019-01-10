import React from 'react';
import ReactDOM from 'react-dom';
import history from '-history';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import { generateStore } from './features-store';

import { Menus, Header, PageNotFound } from './features/common';
import { Welcome } from './features/home';
import { Todo } from './features/todolist';

import './styles/main.less';

const store = generateStore();

const RouterView = () => {
    return (
        <Router history={history}>
            <Layout>
                <Header />
                <Layout>
                    <Layout.Sider>
                        <Menus />
                    </Layout.Sider>
                    <Layout.Content>
                        <Switch>
                            <Route path="/" exact component={Welcome} />
                            <Route path="/todo" component={Todo} />
                            <Route path="/not-found" component={PageNotFound} />
                            <Redirect to="/not-found" />
                        </Switch>
                    </Layout.Content>
                </Layout>
            </Layout>
        </Router>
    );
};

const App = () => (
    <AppContainer>
        <div className="main-body">
            <Provider store={store}>
                <RouterView />
            </Provider>
        </div>
    </AppContainer>
);

ReactDOM.render(<App />, document.getElementById('app'));
