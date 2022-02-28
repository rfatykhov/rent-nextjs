import houses from "../houses.js";
import Head from "next/head";

export default function House(props) {
	return (
		<div>
			<Head>
				<title>{props.house.title}</title>
			</Head>
			<img src={props.house.picture} width="100%" alt="House picture" />
			<p>
				{props.house.type} - {props.house.town}
			</p>
			<p>{props.house.title}</p>
		</div>
	);
}

export async function getServerSideProps({ query }) {
	const { id } = query;
	console.log(query);
	return {
		props: {
			house: houses.filter((house) => house.id === parseInt(id))[0],
		},
	};
}
