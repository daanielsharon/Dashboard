import React from 'react';
import navsizeimage from '../assets/profileicon.png';
import { Search, NotificationsNone } from '@mui/icons-material/';
import { navbar } from '../helper/IconStyle';

const Navbar = () => {
	return (
		<div className="desktop:flex desktop:flex-row desktop:justify-between desktop:items-center desktop:pt-1 desktop:mb-0 tablet:flex tablet:flex-row tablet:items-center tablet:justify-between tablet:mb-6 mobile:flex mobile:flex-row mobile:items-center mobile:justify-end mobile:mb-2 mobile:p-3">
			<div className="desktop:inline tablet:inline mobile:hidden">
				<p className="text-gray-400 font-poppins">
					Perushaaan <span>&#62;</span> <b className="text-black/70">Mitramas infosys Global</b>
				</p>
			</div>
			<div className="flex items-center">
				<Search style={navbar} />
				<NotificationsNone style={navbar} />
				<img className="w-[60px] h-[40px] inline cursor-pointer" src={navsizeimage} alt="profileimage" />
				<div className="inline cursor-pointer">User</div>
			</div>
		</div>
	);
};

export default Navbar;
