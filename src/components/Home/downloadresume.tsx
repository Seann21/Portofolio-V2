import { useState } from 'react';

const DownloadResumeButton = () => {
	const [isLoading, setIsLoading] = useState(false);

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			const link = document.createElement('a');
			link.href = '/CV HasanEfendi.pdf';
			link.download = 'CV HasanEfendi.pdf';
			link.click();
		}, 2000); 
	};

	return (
		<a
			href='/CV HasanEfendi.pdf'
			download='CV HasanEfendi.pdf'
			target='_blank'
			rel='noreferrer'
			onClick={handleClick}
			className={`flex items-center py-2 px-4 mx-auto mt-4 text-sm font-bold bg-gradient-to-r from-pink-700 to-indigo-700 hover:from-black hover:to-violet-700 rounded-lg border md:py-2.5 md:px-5 md:mx-0 focus:outline-none w-fit text-white transition duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
			data-umami-event='Download resume button'
		>
			{isLoading ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-5 h-5 mr-2 animate-spin"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M12 4.75V6.25M12 17.75V19.25M4.75 12H6.25M17.75 12H19.25M7.76 7.76L8.5 8.5M15.5 15.5L16.24 16.24M7.76 16.24L8.5 15.5M15.5 8.5L16.24 7.76"
					/>
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-5 h-6 mr-2 pb-1"
					role="img"
					aria-label="Download Icon"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"
					/>
				</svg>
			)}
			<span>{isLoading ? 'Loading...' : 'Download Resume'}</span>
		</a>
	);
};

export default DownloadResumeButton;
