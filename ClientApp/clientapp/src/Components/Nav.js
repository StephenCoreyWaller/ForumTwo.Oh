import ProfileButton from './ProfileButton';
import './Components.css';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<Menu>
			<Menu.Item>Home</Menu.Item>
			<Menu.Item>Messages</Menu.Item>
			<Menu.Item>Friends</Menu.Item>
			<Menu.Item position='right'>
				<ProfileButton />
			</Menu.Item>
		</Menu>
	);
};
export default Nav;
