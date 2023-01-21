import { useFetch } from "../hooks/useFetch";
import "../App.css";

const InputSearchComponent = () => {
  const { handleChange, data } = useFetch();
  return (
    <div className=" overflow-auto fixed-input">
      <input
        type="text"
        className="form-control overflow-auto"
        aria-describedby="basic-addon3"
        id="basic-url"
        placeholder="Buscar..."
        onChange={(e) => handleChange(e)}
      />
      <div>
        <ul className="list-group">
          {data
            ? data.map((el: any) => {
                return (
                  <li
                    key={el.id ? el.id : 1}
                    className="list-group-item d-flex justify-content-between "
                  >
                    {el.name ? el.name : el.title}
                    <a href={el.image} target="_blank">
                      {" "}
                      <img height={30} src={el.image} />{" "}
                    </a>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
};

export default InputSearchComponent;
