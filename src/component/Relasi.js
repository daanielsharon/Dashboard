import React from 'react';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { relasi } from '../helper/IconStyle';

const Relasi = () => {
	return (
		<div className="deskotp:flex desktop:flex-col desktop:bg-white desktop:mt-9 desktop:max-h-[32vh] desktop:box-border desktop:shadow-xl desktop:p-[2rem] desktop:w-auto desktop:rounded-md tablet:mt-5 tablet:w-[62vw] mobile:p-4">
			<div className="flex flex-row justify-between items-center">
				<div className="font-poppins font-bold text-lg">Relasi</div>
				<div className="font-poppins cursor-pointer hover:underline ">Lihat semua</div>
			</div>
			<div className="flex flex-col desktop:mt-4 tablet:mt-6 mobile:mt-6">
				<div className="flex flex-row items-center">
					<ShareOutlinedIcon style={relasi} />
					<div className="ml-3">
						<div className="font-poppins text-lg font-bold">20</div>
						<div className="font-poppins text-gray-400">Memiliki</div>
					</div>
				</div>
				<div className="flex flex-row items-center desktop:my-3 tablet:my-5 mobile:my-5">
					<ShareOutlinedIcon style={relasi} />
					<div className="ml-3">
						<div className="font-poppins text-lg font-bold">108</div>
						<div className="font-poppins text-gray-400">Menggunakan</div>
					</div>
				</div>
				<div className="flex flex-row items-center">
					<ShareOutlinedIcon style={relasi} />
					<div className="ml-3">
						<div className="font-poppins text-lg font-bold">67</div>
						<div className="font-poppins text-gray-400">Meminjam</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Relasi;
