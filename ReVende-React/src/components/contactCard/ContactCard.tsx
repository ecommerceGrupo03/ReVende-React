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

function ContactCard({ nome, cargo, sobre, imagem, linkedin, github }: ContactProps) {
	return (
		<div className="flex justify-center grid-cols-3 bg-gradient-to-l from-[#568C6D] to-[#B5C8BD] shadow-xl rounded-3xl items-center mb-10 container h-96 w-[1300px] gap-24">
			<div className="flex">
				<img src={imagem} alt={nome} className="rounded-full size-64" />
			</div>

			<div className="align-center">
				<div className="flex-col justify-center">
					<h4 className="text-3xl flex justify-center my-4 mx-4 text-wrap max-w-xl">
						{nome}
					</h4>

					<hr className="border-gray-700 border-2 w-full" />

					<h5 className="text-lg flex justify-center my-4 mx-4 text-wrap max-w-xl">
						{cargo}
					</h5>

					<h5 className="text-lg flex justify-center my-4 mx-4 text-wrap max-w-xl">
						{sobre}
					</h5>
				</div>

				<hr className="border-gray-700 border-1 w-full" />

				<div className="flex justify-center gap-2 m-4">
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
