interface Props {
	listElements: string[];
}

const NavLinks = ({ listElements }: Props) => {
	return (
        <ul className="list-none flex flex-row gap-5">
			{listElements.map((elem) => {
				return (
					<li className="text-white-100 hover:text-white-200">
						<a href="#">{elem}</a>
					</li>
				);
			})}
		</ul>
	);
};

export default NavLinks;
