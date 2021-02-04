import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, Card, Grid } from 'semantic-ui-react';

const CategroyCard = ({ title, dateCreated, description, id }) => {
	return (
		<Link to={`/Category/${id}`}>
			<Card fluid style={{ boxShadow: 'none' }}>
				<Grid columns={3}>
					<Grid.Column
						style={{ paddingLeft: '30px' }}
						textAlign='left'
						verticalAlign='middle'
						width={4}
					>
						<Card.Header as='h4'>
							<strong>{title}</strong>
						</Card.Header>
					</Grid.Column>
					<Grid.Column textAlign='center' verticalAlign='middle' width={5}>
						<div style={{ padding: '15px' }}>
							<Grid.Row> Hits 0</Grid.Row>
							<Grid.Row> Threads 100</Grid.Row>
						</div>
					</Grid.Column>
					<Grid.Column
						style={{ paddingRight: '30px' }}
						textAlign='right'
						verticalAlign='middle'
						textAlign='right'
						width={7}
					>
						<Grid.Row>
							<Card.Description>{description}</Card.Description>
						</Grid.Row>
						<Grid.Row>
							<Card.Meta>{dateCreated}</Card.Meta>
						</Grid.Row>
					</Grid.Column>
				</Grid>
			</Card>
			<Divider />
		</Link>
	);
};

export default CategroyCard;
