import InputPersonal from "./inputPersonal";
import InputSocialMedia from "./inputSocialMedia";

const HeaderPageDashboard = () => {
  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <h5 class="card-header">Personal</h5>
              <form id="formAccountSettings">
                <div className="card-body">
                  <InputPersonal />
                </div>
                <hr className="my-0" />
                <h5 class="card-header">Social Media</h5>
                <div className="card-body">
                  <InputSocialMedia />
                </div>
                <div className="card-footer">
                  <div className="mt-2">
                    <button type="submit" className="btn btn-primary me-2">
                      Save changes
                    </button>
                    <button type="reset" className="btn btn-outline-secondary">
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPageDashboard;
