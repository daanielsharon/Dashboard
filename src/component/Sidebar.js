import React, { useState } from 'react';
import { FormatListBulleted, Home, AccessTime, AllInclusive, Business, ClearAll, PeopleOutline, CloudQueue, Equalizer, AirplayOutlined } from '@mui/icons-material';
import logo from '../assets/doubleTriangle.png';
import { sidebar } from '../helper/IconStyle';

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="desktop:flex desktop:flex-col desktop:p-5 desktop:shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] desktop:h-[100vh] desktop:justify-start desktop:z-10 desktop:max-w-[4%] desktop:bg-white tablet:flex tablet:flex-row tablet:h-auto tablet:justify-center tablet:p-5 tablet:fixed tablet:bottom-0 tablet:w-[100vw] tablet:bg-white tablet:z-10 mobile:flex mobile:flex-row  mobile:justify-end mobile:p-5 mobile:fixed mobile:bottom-0 mobile:bg-white mobile:w-[100vw] mobile:z-10 mobile:h-auto ">
			<img className="cursor-pointer desktop:inline tablet:w-[40px] tablet:h-[40px] tablet:hidden mobile:hidden" src={logo} alt="logo" />
			<div className="desktop:flex desktop:flex-col desktop:my-5 tablet:flex tablet:flex-row">
				<div className="desktop:inline tablet:inline mobile:hidden">
					<Home style={sidebar} className="desktop:mt-[40px]" />
					<AccessTime style={sidebar} className="desktop:mt-[40px] desktop:ml-0 tablet:ml-8" />
					<AllInclusive style={sidebar} className="desktop:mt-[40px] desktop:ml-0 tablet:ml-8 " />
					<Business style={sidebar} className="desktop:mt-[40px] desktop:ml-0 tablet:ml-8 " />
					<ClearAll style={sidebar} className="desktop:mt-[40px] desktop:ml-0 tablet:ml-8 " />
					<PeopleOutline style={sidebar} className="desktop:mt-[40px] desktop:ml-0 tablet:ml-8 " />
					<CloudQueue style={sidebar} className="desktop:mt-[40px] desktop:ml-0 tablet:ml-8 " />
					<Equalizer style={sidebar} className="desktop:mt-[40px] desktop:ml-0 tablet:ml-8 " />
					<AirplayOutlined style={sidebar} className="desktop:mt-[40px] desktop:ml-0 tablet:ml-8  " />
				</div>
				<FormatListBulleted onClick={() => setIsOpen((e) => !e)} style={sidebar} className="desktop:mt-[40px] desktop:ml-0 tablet:ml-8 " />
			</div>
			{isOpen && (
				<div className="desktop:hidden tablet:hidden mobile:fixed mobile:bottom-[80px] mobile:right-[13px] mobile:flex mobile:flex-col mobile:bg-white mobile:z-2 mobile:p-2 mobile:rounded-md">
					<Home style={sidebar} />
					<AccessTime style={sidebar} className="mobile:mt-3" />
					<AllInclusive style={sidebar} className="mobile:mt-3 " />
					<Business style={sidebar} className="mobile:mt-3 " />
					<ClearAll style={sidebar} className="mobile:mt-3 " />
					<PeopleOutline style={sidebar} className="mobile:mt-3 " />
					<CloudQueue style={sidebar} className="mobile:mt-3 " />
					<Equalizer style={sidebar} className="mobile:mt-3 " />
					<AirplayOutlined style={sidebar} className="mobile:mt-3  " />
				</div>
			)}
		</div>
	);
};

export default Sidebar;
