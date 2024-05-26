const DownloadResumeButton = () => {
	return (
		<a
			href='/Hasanefendi CV.pdf'
			download='Hasanefendi CV.pdf'
			target='_blank'
			rel='noreferrer'
			className='flex items-center py-2 px-4 mx-auto mt-4 text-sm font-bold bg-gradient-to-r from-pink-700 to-indigo-700 rounded-lg border md:py-2.5 md:px-5 md:mx-0 focus:outline-none w-fit text-white '
			data-umami-event='Download resume button'
		>
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
			<span>Download Resume</span>
		</a>
	);
};

export default DownloadResumeButton;
