import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, Card, Grid } from 'semantic-ui-react';

const ThreadCard = ({ thread: { dateCreated, id, list, title, user } }) => {
	return (
		<Link to=''>
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
							<Grid.Row> Posts {list}</Grid.Row>
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
							<Card.Description>Created by: {user}</Card.Description>
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

export default ThreadCard;
