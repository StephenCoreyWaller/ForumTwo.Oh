import React, { useEffect, useState } from 'react';
import { GetRequest } from '../AxiosRequest';
import CategroyCard from './CategoryCard';
import IsLoading from '../IsLoading';

const CategoryView = () => {
	const [categories, setCategories] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const call = async () => {
		await GetRequest('category').then((resp) => {
			setCategories(resp.data.data);
		});
	};
	useEffect(() => {
		call();
		setIsLoading(false);
	}, []);
	return (
		<>
			{isLoading ? (
				<IsLoading />
			) : (
				categories.map((category) => {
					const { description, dateCreated, title, id } = category;
					console.log(id);
					return (
						<CategroyCard
							description={description}
							dateCreated={dateCreated}
							title={title}
							id={id}
							key={id}
						/>
					);
				})
			)}
		</>
	);
};

export default CategoryView;
