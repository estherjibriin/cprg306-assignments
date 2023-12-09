export default function Item({name, quantity, category}){
    return(
        <div className="border border-sky-500 bg-sky-800 w-full max-w-xs m-4 p-2">
            <p>
                <b>Name:</b>{name}
            </p>
            <p>
                <b>Quantity:</b>{quantity}
            </p>
            <p>
                <b>Category:</b>{category}
            </p>
        </div>
    );
    }
