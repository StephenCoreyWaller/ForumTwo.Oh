import React, { useEffect, useState } from 'react';
import { GetRequest } from '../AxiosRequest';
import CategroyCard from './CategoryCard';
import IsLoading from '../IsLoading';

const CategoryView = () => {
	const [categories, setCategories] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const call = async () => {
		await GetRequest('category').then((resp) => {
			if (typeof resp !== 'undefined') {
				setCategories(resp.data.data);
				setIsLoading(false);
			}
		});
	};
	useEffect(() => {
		call();
	}, []);
	return (
		<>
			{isLoading ? (
				<IsLoading />
			) : (
				categories.map((category) => {
					const { description, dateCreated, title, id } = category;
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
