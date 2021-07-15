import { Redirect, Route } from "react-router-dom";
import { getUser } from "./AuthService";

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) => {
			const currentUser = getUser();
      console.log({currentUser});
			if (currentUser === false) {
				return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
			} else return <Component {...props} />;
		}}
	/>
);
export { PrivateRoute };
