import React from "react";
import { Route, Switch} from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

import NewBlog from "./blogs/new";
import Register from "./sessions/register";
import Login from "./sessions/login";
import Logout from "./sessions/logout";
import BlogsIndex from "./blogs/index";
import BlogShow from "./blogs/show";
import BlogEdit from "./blogs/edit";
import BlogDestroy from "./blogs/destroy";

function Routes () {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/blogs/new" component={NewBlog} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/blogs" component={BlogsIndex} />
            <Route exact path="/blogs/:id" component={BlogShow} />
            <Route exact path="/blogs/:id/edit" component={BlogEdit} />
            <Route exact path="/blogs/destroy/:id" component={BlogDestroy} />
        </Switch>
    );
}

export default Routes;