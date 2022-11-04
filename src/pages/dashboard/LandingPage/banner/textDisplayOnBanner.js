const TextDisplayOnBanner = () => {
  return (
    <div className="row mt-4">
      <div className="mb-3 col-md-6">
        <label forthml="title" className="form-label">
          Title
        </label>
        <input className="form-control" type="text" id="title" name="title" />
      </div>
      <div className="mb-3 col-md-6">
        <label className="form-label" forthml="desc">
          Description
        </label>
        <input type="text" id="desc" name="desc" className="form-control" />
      </div>
    </div>
  );
};

export default TextDisplayOnBanner;
