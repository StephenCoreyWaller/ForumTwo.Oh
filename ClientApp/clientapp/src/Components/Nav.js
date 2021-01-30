import ProfileButton from './Profile/ProfileButton';
import './Components.css';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<Menu>
			<Menu.Item>
				<Link to='/'>Home</Link>
			</Menu.Item>
			<Menu.Item>
				<Link to='Forum'>Forum</Link>
			</Menu.Item>
			<Menu.Item>About Me</Menu.Item>
			<Menu.Item position='right'>
				<ProfileButton />
			</Menu.Item>
		</Menu>
	);
};
export default Nav;
