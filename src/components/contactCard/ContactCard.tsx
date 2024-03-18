import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export interface ContactProps {
	nome: string;
	cargo: string;
	sobre: string;
	imagem: string;
	linkedin: string;
	github: string;
}

function ContactCard({
	nome,
	cargo,
	sobre,
	imagem,
	linkedin,
	github,
}: ContactProps) {
	return (
		<div className="xsxm:flex-col justify-center bg-gradient-to-l from-[#568C6D] to-[#B5C8BD] shadow-xl rounded-3xl items-center mb-10 container w-full sm:flex">
			<div className="flex justify-center px-4 pt-4">
				<img
					src={imagem}
					alt={nome}
					className="rounded-full object-cover xsm:size-40 sm:size-52 md:size-56"
				/>
			</div>

			<div className="align-center p-4">
				<div className="flex-col justify-center">
					<h4 className="text-3xl flex justify-center mb-4 mx-4 text-wrap max-w-xl">
						{nome}
					</h4>

					<hr className="border-gray-700 border-2 w-2/3 mx-auto" />

					<h5 className="text-lg flex justify-center xsm:text-center my-4 mx-4 text-wrap max-w-xl font-medium">
						{cargo}
					</h5>

					<h5 className="text-lg flex justify-center my-4 mx-4 text-wrap max-w-xl text-justify">
						{sobre}
					</h5>
				</div>

				<hr className="border-gray-700 border-1 w-full" />

				<div className="flex justify-center gap-2 p-4">
					<Link target="_blank" to={linkedin}>
						<LinkedinLogo
							size={40}
							weight="regular"
							className="hover:motion-safe:animate-bounce"
						/>
					</Link>
					<Link target="_blank" to={github}>
						<GithubLogo
							size={40}
							weight="regular"
							className="hover:motion-safe:animate-bounce"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ContactCard;
