import Aktivitas from './component/Aktivitas';
import Akun from './component/Akun';
import Lokasi from './component/Lokasi';
import Navbar from './component/Navbar';
import Profile from './component/Profile';
import Relasi from './component/Relasi';
import Sidebar from './component/Sidebar';

function App() {
	return (
		<div className="desktop:flex desktop:flex-row desktop:h-[100vh]">
			<Sidebar />
			<div className="desktop:w-full desktop:px-[50px] desktop:bg-background desktop:ml-20 tablet:p-4 mobile:p-1">
				<Navbar />
				<div className="desktop:flex desktop:flex-row desktop:pt-1 desktop:h-[88.5vh] tablet:flex tablet:flex-row justify-between">
					<Profile />
					<div className="desktop:flex desktop:flex-col desktop:pl-10 tablet:pl-10">
						<Lokasi />
						<div className="desktop:flex desktop:flex-row desktop:h-[68vh]">
							<div>
								<Akun />
								<Relasi />
							</div>
							<Aktivitas />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
