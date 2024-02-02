import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { Form } from "react-bootstrap";

import PropTypes from "prop-types"; // import prop-types package

const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 20;

const SearchBar = () => {
	const searchInput = useRef(null);
	const [images, setImages] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		fetchImages();
	}, [page]);

	const fetchImages = async () => {
		try {
			const { data } = await axios.get(
				`${API_URL}?query=${
					searchInput.current.value
				}&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${
					import.meta.env.VITE_API_KEY
				}`
			);
			console.log("data", data);
			setImages(data.results);
		} catch (error) {
			console.log(error);
		}
	};

	const resetSearch = () => {
		setPage(1);
		fetchImages();
	};

	const handleSearch = (event) => {
		event.preventDefault();
		console.log(searchInput.current.value);
		resetSearch();
	};

	const handleSelection = (selection) => {
		searchInput.current.value = selection;
		resetSearch();
	};

	// const searchPhotos = async (e) => {
	// 	e.preventDefault();
	// 	console.log("Submitting the form");

	// 	unsplash.search
	// 		.getPhotos({
	// 			query: query,
	// 			page: 1,
	// 			perPage: 15,
	// 		})
	// 		.then((response) => {
	// 			props.onResponseReturn(response.response.results);
	// 		});
	// };
	return (
		<div>
			<Form className="form" onSubmit={handleSearch}>
				<Form.Control
					type="search"
					placeholder="What are you looking for..."
					className="search-input btn-search"
					ref={searchInput}
				/>
			</Form>
			<div className="filters">
				<div onClick={() => handleSelection("nature")}>Nature</div>
				<div onClick={() => handleSelection("birds")}>Birds</div>
				<div onClick={() => handleSelection("dogs")}>Dogs</div>
				<div onClick={() => handleSelection("cars")}>Cars</div>
			</div>
			<div className="images">
				{images.map((image) => (
					<img
						key={image.id}
						src={image.urls.small}
						alt={image.alt_description}
						className="image"
					/>
				))}
			</div>
		</div>
	);
};

SearchBar.propTypes = {
	onResponseReturn: PropTypes.func.isRequired, // onResponseReturn prop is required and must be a function
};

export default SearchBar;
