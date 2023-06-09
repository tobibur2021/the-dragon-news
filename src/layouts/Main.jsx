import React from 'react';
import Header from '../shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../shared/LeftNav/LeftNav';
import { Outlet } from 'react-router-dom';
import RightNav from '../shared/RightNav/RightNav';
import NavigationBar from '../shared/NavigationBar/NavigationBar';

const Main = () => {
	return (
		<div>
			<Header></Header>
			<NavigationBar></NavigationBar>
			<Container>
				<Row>
					<Col lg={3}>
						<LeftNav></LeftNav>
					</Col>
					<Col lg={6}>
						<Outlet></Outlet>
					</Col>
					<Col lg={3}>
						<RightNav></RightNav>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Main;
