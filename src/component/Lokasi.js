import React from 'react';
import { BusinessOutlined } from '@mui/icons-material/';

const Lokasi = () => {
	return (
		<div className="desktop:bg-white desktop:p-8 desktop:w-[148vh] desktop:h-[20vh] desktop:shadow-xl desktop:rounded-md tablet:w-[64vw] mobile:p-4">
			<div className="flex flex-row justify-between items-center">
				<h1 className="font-poppins text-lg font-bold">Lokasi</h1>
				<h3 className="font-poppins cursor-pointer hover:underline">Lihat Semua</h3>
			</div>
			<div className="flex flex-row justify-between pt-5 ">
				<div className="flex flex-row w-[30%] bg-green-800 p-3 items-center rounded-md desktop:justify-between tablet:justify-between mobile:justify-center ">
					<div className="desktop:inline tablet:inline mobile:hidden">
						<BusinessOutlined />
					</div>
					<div>
						<div className="text-white text-2xl text-center font-poppins">20</div>
						<div className="text-white font-poppins desktop:text-base tablet:text-xs">Induk</div>
					</div>
				</div>
				<div className="flex flex-row w-[30%]  bg-green-700 p-3 items-center rounded-md desktop:justify-between tablet:justify-between mobile:justify-center ">
					<div className="desktop:inline tablet:inline mobile:hidden">
						<BusinessOutlined />
					</div>
					<div>
						<div className="text-white text-2xl font-poppins desktop:text-end tablet:text-end mobile:text-center ">3</div>
						<div className="text-white font-poppins desktop:text-base tablet:text-xs mobile:text-[15px] mobile:text-center">Sub Lokasi Level 1</div>
					</div>
				</div>
				<div className="flex flex-row w-[30%] bg-green-600 p-3 items-center rounded-md desktop:justify-between tablet:justify-between mobile:justify-center ">
					<div className="desktop:inline tablet:inline mobile:hidden">
						<BusinessOutlined />
					</div>
					<div>
						<div className="text-white font-poppins text-2xl desktop:text-end tablet:text-end mobile:text-center ">1</div>
						<div className="text-white font-poppins desktop:text-base tablet:text-xs mobile:text-[15px] mobile:text-center">Sub Lokasi Level 2</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Lokasi;
