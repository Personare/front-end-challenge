import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Table from "../Pages/Table"
import Error from "../Pages/Error"

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/table">
                    <Table />
                </Route>
                <Route>
                    <Error />
                </Route>
            </Switch>
        </BrowserRouter>
    )

}
