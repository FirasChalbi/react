import React , {useState} from 'react';
import "./styles.css";

function Filter() {
    const list = [
        "Banana",
        "Apple",
        "Orange",
        "Mango",
        "Pineapple",
        "Watermelon"
      ];

    const [filterList, setFilterList] = useState(list);

    const handleSearch = (event) => {

        if (event.target.value === ""){
            setFilterList(list);
            return;
        }
        const filteredValues = list.filter(
            (item) =>
            item.toLocaleLowerCase().indexOf(event.target.value.toLocaleLowerCase()) !== -1
        );
        setFilterList(filteredValues);
    };

  return (
    <div>
    <div>
        Search: <input name='query' type="text" onChange={handleSearch} />
    </div>
    {filterList &&
    filterList.map((item, index) =>(
        <div key={index}>{item}</div>
    ))}
    </div>
  );
}

export default Filter;