import { Route, Switch } from 'react-router-dom';
import { AddMovie } from '../components/AddMovie';
import { Header } from "../components/Header/index"
import { UpdateMovie } from '../components/UpdateMovie';
import Home from '../pages/Home';

const Routes = () => {

    return (
        <>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/add-movie" exact component={AddMovie} />
                <Route path="/update-movie/:id" component={UpdateMovie} />
            </Switch>
        </>
    )
}

export default Routes