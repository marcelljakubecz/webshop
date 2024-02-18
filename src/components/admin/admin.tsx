import {CategoryEditor} from "./category-editor/category-editor.tsx";
import {ProductEditor} from "./product-editor/product-editor.tsx";
export const Admin = (): React.ReactElement => {
    return <div>
        <CategoryEditor />
        <hr/>
        <ProductEditor />
    </div>;
}