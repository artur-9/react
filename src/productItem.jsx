export default function ProductItem(id, imageUrl, price, discount, title) {

    return (
        <li > {id}
            <div>
                <img src={ imageUrl } alt="" />
            </div>
            <div>
                <span>{ price }</span>
                <span>{ discount }</span>
            </div>
            <div>
                <span>{ title }</span>
            </div>
        </li>

    );
}