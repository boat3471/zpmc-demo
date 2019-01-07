import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import { Menus, Header, PageNotFound } from './features/common';
import { Welcome } from './features/home';
import { MainTodoList } from './features/todolist';
import history from '-history';

import './main.less';


import { generateStore } from './store';

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
                            <Route path="/todo" component={MainTodoList} />
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
