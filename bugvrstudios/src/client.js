import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router';

render(
	<BrowserRouter>
		<Pages />
	</BrowserRouter>
	document.getElementById('render-target');
	);
