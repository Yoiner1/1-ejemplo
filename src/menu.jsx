import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function TemporaryDrawer() {

	const [open, setOpen] = React.useState(false);

	const routes = [
		{
			to: '/home',
			label: 'Home',
		},
		{
			to: '/about',
			label: 'About',
		},
		{
			to: '/contact',
			label: 'Contact',
		},
	];

	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};

	const DrawerList = (
		<Box
			sx={{ width: 250 }}
			role="presentation"
			onClick={toggleDrawer(false)}
		>
			<List>
				{
					routes.map((route, index) => (
						<ListItemButton
							key={index}
							to={route.to}
						>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={route.label} />
						</ListItemButton>
					))
				}
			</List>
		</Box>
	);

	return (
		<div>
			<Button
				onClick={toggleDrawer(true)}
			>
				Open drawer
			</Button>
			<Drawer
				open={open}
				onClose={toggleDrawer(false)}
			>
				{DrawerList}
			</Drawer>
		</div>
	);
}
