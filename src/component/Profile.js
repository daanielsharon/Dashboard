import React from 'react';
import background from '../assets/map.png';
import logo from '../assets/logo.png';
import { Edit, ToggleOn, MailOutline, LocalPhoneOutlined, LanguageOutlined } from '@mui/icons-material';
import { profile, toggleprofile } from '../helper/IconStyle';

const Profile = () => {
	return (
		<div className="desktop:w-[350px] desktop:shadow-2xl desktop:bg-white desktop:rounded-md tablet:w-[300px]  ">
			<img className="w-full desktop:max-h-[110px] tablet:max-h-[110px]" src={background} alt="background" />
			<div className="border border-green-600 bg-white scale-[0.7] rounded-full w-[200px] h-[200px] relative bottom-[100px] desktop:left-[20%] tablet:left-[20%] mobile:left-[23%]">
				<img className="w-[130px] relative top-[68px] left-[35px]" src={logo} alt="" />
			</div>
			<div className="flex flex-col -mt-[110px] px-3">
				<h3 className="text-center font-poppins">Mitramas Infosys Global</h3>
				<h6 className="mt-1 mb-5 text-center font-poppinsr text-sm text-gray-400">Layanan IT</h6>
				<div className="flex flex-row justify-center desktop:mr-0 tablet:mr-0 mobile:mr-5">
					<Edit style={profile} />
					<h3 className="font-poppins text-sm ml-2 cursor-pointer ">Sunting Profil</h3>
				</div>
			</div>
			<div className="mt-6 px-5">
				<h6 className="font-poppins text-gray-400 text-sm ">Status perusahaan</h6>
				<div className="flex flex-row justify-between items-center mt-1 mb-2">
					<h6 className="font-poppins text-sm">Aktif</h6>
					<ToggleOn style={toggleprofile} />
				</div>
				<h6 className="font-poppins text-gray-400 text-sm ">Singkatan</h6>
				<h6 className="font-poppins mt-1 mb-2 text-sm">MIG</h6>
				<h6 className="font-poppins text-gray-400 text-sm ">Alamat perusahaan</h6>
				<h6 className="font-poppins mt-1 mb-2 text-sm">Jl. Tebet Raya No. 42, Jakarta Selatan</h6>
				<h6 className="font-poppins text-gray-400 text-sm ">Penanggung Jawab (PIC)</h6>
				<h6 className="font-poppins mt-1 mb-2 text-sm">John Doe</h6>
				<h6 className="font-poppins text-gray-400 text-sm ">Tanggal PKP</h6>
				<h6 className="font-poppins mt-1 mb-2 text-sm">03 Maret 2021</h6>
				<h6 className="font-poppins text-gray-400 text-sm ">Email</h6>
				<div className="flex flex-row justify-start items-center mt-1 mb-2 text-sm">
					<MailOutline style={profile} />
					<h6 className="ml-2 font-poppins text-sm underline cursor-pointer">mig@mitrasolusi.group</h6>
				</div>
				<h6 className="font-poppins text-gray-400 text-sm ">No_telp</h6>
				<div className="flex flex-row justify-start items-center mt-1 mb-2 text-sm">
					<LocalPhoneOutlined style={profile} />
					<h6 className="ml-2 font-poppins text-sm">021-5678-1234</h6>
				</div>
				<h6 className="font-poppins text-gray-400 text-sm ">Situs Web</h6>
				<div className="flex flex-row justify-start items-center mt-1 mb-2 text-sm">
					<LanguageOutlined style={profile} />
					<h6 className="ml-2 font-poppins underline cursor-pointer">https://www.mitrasolusi.group/p</h6>
				</div>
			</div>
		</div>
	);
};

export default Profile;
