import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const getData = () => {
	return {
		image: "%PUBLIC_URL%/avatar.jpg",
		name: "Abhay Tyagi",
		description:
			"Data Developer/Full-Stack Developer at AroFlo Innovations. When I am not at work, I like to play guitar, and play video games. I also like board games and hanging out with my friends.",
		skills: [
			["SQL", "red"],
			["JavaScript", "green"],
			["React", "yellow"],
			["VueJS", "orange"],
			["Web Development", "blue"],
		],
	};
};

const App = () => {
	return (
		<div className="card">
			<Avatar />
			<div className="data">
				<Intro />
				<SkillList />
			</div>
		</div>
	);
};

const Avatar = () => {
	return <image className="avatar" src={getData().image} alt="Abhay Tyagi" />;
};

const Intro = () => {
	return (
		<div className="data">
			<h1>{getData().name}</h1>
			<p>{getData().description}</p>
		</div>
	);
};

const SkillList = () => {
	return (
		<div className="skill-list">
			{getData().skills.map((el) => (
				<Skill skill={el[0]} color={el[1]} />
			))}
		</div>
	);
};

const Skill = (prop) => {
	return (
		<div className="skill" style={{ backgroundColor: prop.color }}>
			<span>{prop.skill}</span>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
