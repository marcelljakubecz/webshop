import './category-editor.scss';
import {useCategoryEditor} from "./category-editor.hook.ts";

export const CategoryEditor = (): React.ReactElement => {
    const { categories, onAddCategory, onParentCategorySelect, onCategoryNameInputChange, newCategoryName, parent } = useCategoryEditor();
    return (
    <>
        <h3>add category</h3>
        <div className="category-editor-container">
            <input type="text" placeholder="name" value={newCategoryName} onChange={onCategoryNameInputChange}/>
            <div>
                <select id="category-select" value={parent} onChange={onParentCategorySelect} onEmptied={onParentCategorySelect}>
                    {categories.map(category =>
                        <option key={category.name} value={category.name}>{category.name}</option>
                    )}
                    <option hidden disabled value=""> -- select an option --</option>
                </select>
            </div>
            <button onClick={() => onAddCategory()} disabled={!newCategoryName}>
                add
            </button>
        </div>
    </>)
}