const InputPortofolioForm = ({
  listPortofolio,
  onChangeImg,
  onChangeText,
  handleUpdatePortofolio,
  handleBtnDelete
}) => {
  return (
    <div className="row">
      {listPortofolio.map((item, idx) => (
        <div key={idx} className="col-md-4 mb-4">
          <div className="row">
            <div className="col-sm-12">
              <img
                src={item.img?.size ? URL.createObjectURL(item.img) : item.img}
                width="100%"
                height={250}
                style={{ objectFit: "cover" }}
                className="mb-2"
              />
            </div>
            <div className="col-sm-12">
              <label htmlFor="select-img">Select Image</label>
              <input
                accept=".jpg,.jpeg,.png"
                onChange={(e) => onChangeImg(e, idx)}
                type="file"
                name=""
                id="select-img"
                className="form-control "
              />
            </div>
            <div className="col-sm-12">
              <label htmlFor="Link href"> Link href</label>
              <input
                onChange={(e) => onChangeText(e, idx)}
                name="link"
                id="Link href"
                type="text"
                className="form-control "
                defaultValue={item.link}
              />
            </div>
            <div className="col-sm-12">
              <label htmlFor="Title"> Title</label>
              <input
                onChange={(e) => onChangeText(e, idx)}
                name="title"
                id="Title"
                type="text"
                className="form-control "
                defaultValue={item.title}
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-sm-12">
              <button
                className="btn btn-primary"
                onClick={() => handleUpdatePortofolio(item)}
              >
                Save
              </button>
              <button className="btn text-danger" onClick={() => handleBtnDelete(item)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InputPortofolioForm;
