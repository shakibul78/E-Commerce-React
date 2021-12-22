import styled from 'styled-components';
import { categories } from "../data.js"
import { mobile } from '../responsive.js';
import CategoryItem from './CategoryItem.jsx';

const Container = styled.div`
padding: 20px;
display: flex;
justify-content: space-between;
${ mobile({ padding: "0px", flexDirection: "column" }) }
`;

const Categories = () => {
    return (
        <Container>
            {categories.map(item => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </Container>
    );
};

export default Categories;