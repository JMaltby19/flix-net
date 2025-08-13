import React from "react";
import "../../styles/homeScreen.scss";
import { Banner } from "../../components/Banner/Banner";
import { Row } from "./Row";
import { requests } from "../../config";

export const HomeScreen = () => {
	const requestsArray = Object.values(requests);
	console.log(requestsArray);
	return (
		<>
			<div className="homeScreen">
				<Banner />

				{requestsArray.map((item) => {
					return (
						<Row
							key={item.id}
							title={item.title}
							fetchUrl={item.url}
							isLargeRow={item.title === "Netflix" ? true : false}
						/>
					);
				})}
			</div>
		</>
	);
};
