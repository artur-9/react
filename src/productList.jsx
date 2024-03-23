import { ProductItem } from './productItem'

import { products } from './products';

export default function ProductList() {
    return (
        <section>
            <div>
                <ul>
                    <ProductItem {...products[0]} />
                    <ProductItem {...products[1]} />
                    <ProductItem {...products[2]} />
                    <ProductItem {...products[3]} />
                    <ProductItem {...products[4]} />
                    <ProductItem {...products[5]} />
                    <ProductItem {...products[6]} />
                    <ProductItem {...products[7]} />
                    <ProductItem {...products[8]} />
                    <ProductItem {...products[9]} />
                </ul>
            </div>
        </section>
    );
}