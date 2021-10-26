import { Redirect, Route } from "react-router-dom";
import { getUser } from "./AuthService";

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) => {
			const currentUser = getUser();
			if (currentUser === false) {
				return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
			} else return <Component {...props} />;
		}}
	/>
);

const ProtectFromLoggedInUser = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
            const currentUser = getUser();
            if (currentUser) {
                return <Redirect to={{ pathname: "/", state: { from: props.location } }} />;
            } else return <Component {...props} />;
        }}
    />
);

export { PrivateRoute, ProtectFromLoggedInUser };
