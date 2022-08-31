import React from 'react';
import dummyCard from '../assets/cardfirst.png';
import { Edit, DeleteOutline, AddOutlined } from '@mui/icons-material';

const Akun = () => {
	return (
		<div className="desktop:flex desktop:flex-col desktop:mt-9 desktop:p-5 desktop:bg-white desktop:w-[20vw] desktop:shadow-xl desktop:rounded-md tablet:mt-5 tablet:w-[62vw] mobile:p-4">
			<div className="flex flex-row justify-between items-center">
				<h1 className="font-poppins text-lg font-bold">Akun Bank</h1>
				<div className="flex flex-row bg-green-900 text-white p-1 text-sm rounded-md items-center justify-center cursor-pointer">
					<AddOutlined fontSize="13px" />
					<h1 className="font-poppins text-[12px] ml-1">Tambahkan Akun Bank</h1>
				</div>
			</div>
			<div className="flex flex-row items-center pt-3">
				<div className="p-2">
					<img className="desktop:w-[90px] desktop:h-[70px] tablet:w-[150px] tablet:h-[100px] mobile:w-[150px] mobile:h-[100px]" src={dummyCard} alt="" />
				</div>
				<div className="ml-3">
					<div className="flex flex-row ">
						<h3 className="font-poppins">Bank KB Bukopin</h3>
						<Edit className="cursor-pointer desktop:ml-[2rem] tablet:ml-3 " />
						<DeleteOutline className="cursor-pointer" />
					</div>
					<div className="flex flex-col justify-around">
						<div className="font-poppins">***</div>
						<h6 className="font-poppins">IDR</h6>
					</div>
				</div>
			</div>

			<div className="flex flex-row items-center pt-3">
				<div className="p-2">
					<img className="desktop:w-[90px] desktop:h-[70px] tablet:w-[150px] tablet:h-[100px] mobile:w-[150px] mobile:h-[100px]" src={dummyCard} alt="" />
				</div>
				<div className="ml-3">
					<div className="flex flex-row ">
						<h3 className="font-poppins">Bank KB Bukopin</h3>
						<Edit className="cursor-pointer desktop:ml-[2rem] tablet:ml-3 " />
						<DeleteOutline className="cursor-pointer" />
					</div>
					<div className="flex flex-col justify-around">
						<div className="font-poppins">***</div>
						<h6 className="font-poppins">IDR</h6>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Akun;
