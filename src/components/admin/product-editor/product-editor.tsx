import {useProductEditor} from "./product-editor.hook.ts";
import './product-editor.scss';
export const ProductEditor = (): React.ReactElement => {
    const {handleInputChange, handleOnCreateProduct, productForm, categories} = useProductEditor();
    return (
        <>
            <h3>add product</h3>
            <form onSubmit={handleOnCreateProduct} className="product-editor-container">
                <input placeholder="name" type="text" name="name" value={productForm.name}
                       onChange={handleInputChange}/>
                <input placeholder="price" type="number" name="price" value={productForm.price}
                       onChange={handleInputChange}/>
                <select name="parent" id="category" value={productForm.parent} onChange={handleInputChange}>
                    {categories.map(category =>
                        <option key={category.name} value={category.name}>{category.name}</option>
                    )}
                    <option hidden disabled value=""> -- select an option --</option>
                </select>
                <button disabled={!productForm.name || !productForm.price || !productForm.parent} type="submit">
                    save
                </button>
            </form>
        </>);
}