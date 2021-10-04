import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from './components/core/header';
import NotFound from "./components/core/notfound";
import ViewBank from './components/management/viewbank';
import CreateBank from './components/management/createbank';
import ViewTransaction from './components/transaction/viewtransaction';
import CreateTransaction from './components/transaction/createtransaction';
import View from './components/bank/view';
import ViewTransactionDetails from './components/statement/viewstatement';
import CreateStatement from './components/management/createnewaccount';
import ViewCustomerById from './components/management/viewcustombyid';
import { Provider } from 'react-redux';
import { store } from "./redux/store/store";
import Home from './components/core/home';
import Transaction from './components/core/transactions';
import Customer from './components/core/customer';




const AppRouter = (
    <Provider store={store}>
        <Router>
            <Header></Header>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/viewcustomer" component={ViewBank} />
                <Route path="/createcustomer" component={CreateBank} />
                <Route path="/viewtransaction" component={ViewTransaction} />
                <Route path="/createtransaction" component={CreateTransaction} />
                <Route path="/viewbank" component={View} />
                <Route path="/viewstatement" component={ViewTransactionDetails} />
                <Route path="/createstatement" component={CreateStatement} />
                <Route path="/viewcustomerbyid" component={ViewCustomerById} />
                <Route path="/transactions" component={Transaction} />
                <Route path="/customer" component={Customer} />
                <Route exact component={NotFound} />
            </Switch>

        </Router>
    </Provider>
)

export default AppRouter;