import { Switch, Route } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import ItemShow from '../pages/ItemShow'
import NewItem from '../pages/NewItem'
import UpdateItem from '../pages/UpdateItem'

export default (
  <div>
    <Navbar />
    <Switch>
      <Route
        exact
        path="/"
        render={(propsRouter) => <Home {...propsRouter} />}
      />
      <Route
        path="/items/new"
        render={(propsRouter) => <NewItem {...propsRouter} />}
      />
      <Route
        path="/items/:id/update"
        render={(propsRouter) => <UpdateItem {...propsRouter} />}
      />
      <Route
        path="/items/:id"
        render={(propsRouter) => <ItemShow {...propsRouter} />}
      />
    </Switch>
  </div>
)
