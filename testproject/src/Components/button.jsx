const ArrowButton = ({ direction, onClick }) => {
    const isLeft = direction === 'left';

    return (
        <button
            aria-label={isLeft ? 'Previous slide' : 'Next slide'}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center focus:outline-none hover:bg-gray-100"
            onClick={onClick}
        >
            <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isLeft ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'}
                />
            </svg>
        </button>
    );
};

export default ArrowButton;