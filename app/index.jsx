import React from "react";
import ReactDOM from "react-dom";
import UIManager from "./UIManager";
import Header from './Header';

class App extends React.Component {
	render() {
		return (
		<div>
			<Header/>
			<UIManager/>
		</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
