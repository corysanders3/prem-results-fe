import './Dropdown.css';
import { SelectOptions } from '../util/interface';

function Dropdown({ field }: SelectOptions) {

    return (
        <>
            <option value={field}>{field}</option>
        </>
    )
}

export default Dropdown;