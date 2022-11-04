const InputForm = ({
  register,
  fieldsListAbout = [],
  imgBanner,
  setImgBanner,
}) => {
  return (
    <form>
      <div className="card-header">Text Decoration</div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              autoFocus
              {...register("title")}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="title">Description's</label>
            <textarea
              type="text"
              className="form-control"
              id="title"
              {...register("desc")}
            />
          </div>
        </div>
      </div>

      <hr className="my-1" />

      <div className="card-header">List About</div>
      <div className="card-body">
        <div className="row">
          {fieldsListAbout.map((item, index) => (
            <div className="col-md-6 my-1" key={index}>
              <input
                key={item.id}
                {...register(`listAbout.${index}.text`)}
                type="text"
                className="form-control"
              />
            </div>
          ))}
        </div>
      </div>

      <hr className="my-1" />

      <div className="card-header">Image Banner</div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <img
              width="100%"
              height="250px"
              style={{ objectFit: "contain" }}
              src={imgBanner?.size ? URL.createObjectURL(imgBanner) : imgBanner}
              alt=""
            />
            <input
              type="file"
              className="form-control"
              accept=".jpg,.jpeg,.png"
              onChange={(e) => setImgBanner(e.target.files[0])}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default InputForm;
